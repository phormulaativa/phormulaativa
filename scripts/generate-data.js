#!/usr/bin/env node
/**
 * Gera o arquivo data.js a partir das abas de uma Google Spreadsheet (export CSV).
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const SHEET_ID = process.env.SHEET_ID;
const GID_CONFIG = process.env.GID_CONFIG || '0';
const GID_CATEGORIAS = process.env.GID_CATEGORIAS;
const GID_PRODUTOS = process.env.GID_PRODUTOS;
const OUTPUT_PATH = process.env.OUTPUT_PATH || path.join(process.cwd(), 'data.js');

if (!SHEET_ID || !GID_CATEGORIAS || !GID_PRODUTOS) {
  console.error('Variaveis obrigatorias: SHEET_ID, GID_CATEGORIAS, GID_PRODUTOS');
  process.exit(1);
}

function fetchCsv(gid) {
  const url = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/export?format=csv&gid=' + gid;

  return new Promise((resolve, reject) => {
    const request = (currentUrl, redirectsLeft) => {
      if (redirectsLeft === undefined) redirectsLeft = 5;

      https.get(currentUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; GitHub-Actions-Data-Sync)' }
      }, (res) => {
        if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
          if (redirectsLeft <= 0) {
            reject(new Error('Muitos redirecionamentos ao baixar gid=' + gid));
            return;
          }
          const nextUrl = res.headers.location.startsWith('http')
            ? res.headers.location
            : new URL(res.headers.location, currentUrl).href;
          console.log('Redirecionando (' + res.statusCode + ')...');
          request(nextUrl, redirectsLeft - 1);
          return;
        }

        if (res.statusCode !== 200) {
          reject(new Error('HTTP ' + res.statusCode + ' ao baixar gid=' + gid));
          return;
        }

        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }).on('error', reject);
    };

    request(url);
  });
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        row.push(field);
        field = '';
      } else if (ch === '\r') {
        // ignore
      } else if (ch === '\n') {
        row.push(field);
        rows.push(row);
        row = [];
        field = '';
      } else {
        field += ch;
      }
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter(r => r.some(c => c.trim() !== ''));
}

function rowsToObjects(rows) {
  if (rows.length < 2) return [];
  const headers = rows[0].map(h => h.trim());
  return rows.slice(1).map(r => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = (r[i] || '').trim();
    });
    return obj;
  });
}

function toBool(val) {
  if (typeof val === 'boolean') return val;
  const v = String(val).trim().toUpperCase();
  return v === 'TRUE' || v === '1' || v === 'SIM' || v === 'YES';
}

function formatPrice(val) {
  const n = parseFloat(String(val).replace(',', '.'));
  if (isNaN(n)) return 0;
  return n;
}

async function main() {
  console.log('Baixando abas da planilha...');

  const [csvConfig, csvCategorias, csvProdutos] = await Promise.all([
    fetchCsv(GID_CONFIG),
    fetchCsv(GID_CATEGORIAS),
    fetchCsv(GID_PRODUTOS),
  ]);

  const configRows = rowsToObjects(parseCsv(csvConfig));
  const categoriasRaw = rowsToObjects(parseCsv(csvCategorias));
  const produtosRaw = rowsToObjects(parseCsv(csvProdutos));

  // Config
  const config = {};
  configRows.forEach(r => {
    if (r.chave) config[r.chave] = r.valor || '';
  });

  const whatsapp = config.WHATSAPP_NUMERO || '5518988092571';

  // Cupom do site
  const cupomSite = {
    ativo: toBool(config.CUPOM_SITE_ATIVO),
    porcentagem: formatPrice(config.CUPOM_SITE_PORCENTAGEM) || 0,
    codigo: (config.CUPOM_SITE_CODIGO || '').trim().toUpperCase(),
    validade: (config.CUPOM_SITE_VALIDADE || '').trim(),
    mensagemTag: config.CUPOM_SITE_MENSAGEM_TAG || 'X% de desconto no fechamento do pedido'
  };

  // Categorias
  const categorias = categoriasRaw
    .filter(r => r.id)
    .map(r => ({
      id: r.id,
      nome: r.nome || '',
      nomeMenu: r.nomeMenu || r.nome || '',
      mostrarNoMenu: toBool(r.mostrarNoMenu),
      cupomAtivo: toBool(r.cupomAtivo),
      cupomPorcentagem: formatPrice(r.cupomPorcentagem) || 0,
      cupomCodigo: (r.cupomCodigo || '').trim().toUpperCase(),
      cupomValidade: (r.cupomValidade || '').trim(),
      cupomMensagemTag: r.cupomMensagemTag || ''
    }));

  const catIds = new Set(categorias.map(c => c.id));

  // Produtos
  const produtos = [];
  const seenIds = new Set();

  for (const r of produtosRaw) {
    if (!r.id) continue;

    if (seenIds.has(r.id)) {
      console.warn('id duplicado ignorado: ' + r.id);
      continue;
    }
    seenIds.add(r.id);

    if (r.categoria && !catIds.has(r.categoria)) {
      console.warn('Produto ' + r.id + ' tem categoria inexistente: "' + r.categoria + '"');
    }

    const videos = (r.videos || '')
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);

    produtos.push({
      id: String(r.id),
      nome: r.nome || '',
      categoria: r.categoria || '',
      preco: formatPrice(r.preco),
      imagem: r.imagem || '',
      videos: videos,
      descricao: {
        resumo: r.resumo || '',
        oQueE: r.oQueE || '',
        composicao: r.composicao || '',
        comoUsar: r.comoUsar || '',
        advertencias: r.advertencias || ''
      },
      destaque: toBool(r.destaque),
      mostrarlancamento: toBool(r.mostrarlancamento),
      mostrarVideo: toBool(r.mostrarVideo),
      textoParcelamento: r.textoParcelamento || '',
      cupomAtivo: toBool(r.cupomAtivo),
      cupomPorcentagem: formatPrice(r.cupomPorcentagem) || 0,
      cupomCodigo: (r.cupomCodigo || '').trim().toUpperCase(),
      cupomValidade: (r.cupomValidade || '').trim(),
      cupomMensagemTag: r.cupomMensagemTag || ''
    });
  }

  console.log(categorias.length + ' categorias | ' + produtos.length + ' produtos');

  // ===================== GERAR data.js =====================
  let js = '';
  js += '/* ============================================================\n';
  js += '   CONFIGURACOES GERAIS\n';
  js += '   ============================================================ */\n';
  js += '// Gerado automaticamente a partir da planilha Google Sheets\n';
  js += 'const WHATSAPP_NUMERO = ' + JSON.stringify(whatsapp) + ';\n\n';
  js += 'const cupomSite = ' + JSON.stringify(cupomSite, null, 2) + ';\n\n';
  js += '/* ============================================================\n';
  js += '   CATEGORIAS\n';
  js += '   ============================================================ */\n';
  js += 'const categorias = [\n';

  categorias.forEach((c, i) => {
    js += '  {\n';
    js += '    id: ' + JSON.stringify(c.id) + ',\n';
    js += '    nome: ' + JSON.stringify(c.nome) + ',\n';
    js += '    nomeMenu: ' + JSON.stringify(c.nomeMenu) + ',\n';
    js += '    mostrarNoMenu: ' + c.mostrarNoMenu + ',\n';
    js += '    cupomAtivo: ' + c.cupomAtivo + ',\n';
    js += '    cupomPorcentagem: ' + c.cupomPorcentagem + ',\n';
    js += '    cupomCodigo: ' + JSON.stringify(c.cupomCodigo) + ',\n';
    js += '    cupomValidade: ' + JSON.stringify(c.cupomValidade) + ',\n';
    js += '    cupomMensagemTag: ' + JSON.stringify(c.cupomMensagemTag) + '\n';
    js += '  }' + (i < categorias.length - 1 ? ',' : '') + '\n';
  });

  js += '];\n\n';
  js += '/* ============================================================\n';
  js += '   PRODUTOS\n';
  js += '   ============================================================ */\n';
  js += 'const produtos = [\n';

  produtos.forEach((p, i) => {
    const videosStr = p.videos.map(function (v) {
      return JSON.stringify(v);
    }).join(',\n      ');

    js += '  {\n';
    js += '    id: ' + JSON.stringify(p.id) + ',\n';
    js += '    nome: ' + JSON.stringify(p.nome) + ',\n';
    js += '    categoria: ' + JSON.stringify(p.categoria) + ',\n';
    js += '    preco: ' + p.preco.toFixed(2) + ',\n';
    js += '    imagem: ' + JSON.stringify(p.imagem) + ',\n';
    js += '    videos: [\n';
    js += '      ' + (videosStr || '') + '\n';
    js += '    ],\n';
    js += '    descricao: {\n';
    js += '      resumo: ' + JSON.stringify(p.descricao.resumo) + ',\n';
    js += '      oQueE: ' + JSON.stringify(p.descricao.oQueE) + ',\n';
    js += '      composicao: ' + JSON.stringify(p.descricao.composicao) + ',\n';
    js += '      comoUsar: ' + JSON.stringify(p.descricao.comoUsar) + ',\n';
    js += '      advertencias: ' + JSON.stringify(p.descricao.advertencias) + '\n';
    js += '    },\n';
    js += '    destaque: ' + p.destaque + ',\n';
    js += '    mostrarlancamento: ' + p.mostrarlancamento + ',\n';
    js += '    mostrarVideo: ' + p.mostrarVideo + ',\n';
    js += '    textoParcelamento: ' + JSON.stringify(p.textoParcelamento) + ',\n';
    js += '    cupomAtivo: ' + p.cupomAtivo + ',\n';
    js += '    cupomPorcentagem: ' + p.cupomPorcentagem + ',\n';
    js += '    cupomCodigo: ' + JSON.stringify(p.cupomCodigo) + ',\n';
    js += '    cupomValidade: ' + JSON.stringify(p.cupomValidade) + ',\n';
    js += '    cupomMensagemTag: ' + JSON.stringify(p.cupomMensagemTag) + '\n';
    js += '  }' + (i < produtos.length - 1 ? ',' : '') + '\n';
  });

  js += '];\n\n';
  js += 'window.produtos = produtos;\n';
  js += 'window.categorias = categorias;\n';
  js += 'window.WHATSAPP_NUMERO = WHATSAPP_NUMERO;\n';
  js += 'window.cupomSite = cupomSite;\n\n';
  js += '/* ============================================================\n';
  js += '   OBSERVACOES IMPORTANTES\n';
  js += '   ============================================================ */\n';
  js += '/*\n';
  js += '- Este arquivo e GERADO AUTOMATICAMENTE pelo GitHub Action.\n';
  js += '- NAO edite manualmente. Altere a planilha Google Sheets.\n';
  js += '*/\n';

  fs.writeFileSync(OUTPUT_PATH, js, 'utf8');
  console.log('Arquivo gerado: ' + OUTPUT_PATH);
}

main().catch(err => {
  console.error('Erro:', err.message);
  process.exit(1);
});

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
  console.error('❌ Variáveis obrigatórias: SHEET_ID, GID_CATEGORIAS, GID_PRODUTOS');
  process.exit(1);
}

function fetchCsv(gid) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;
  
  return new Promise((resolve, reject) => {
    const request = (currentUrl, redirectsLeft = 5) => {
      https.get(currentUrl, { 
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; GitHub-Actions-Data-Sync)' }
      }, (res) => {
        // Segue redirecionamentos (301, 302, 307, 308)
        if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
          if (redirectsLeft <= 0) {
            reject(new Error(`Muitos redirecionamentos ao baixar gid=${gid}`));
            return;
          }
          const nextUrl = res.headers.location.startsWith('http') 
            ? res.headers.location 
            : new URL(res.headers.location, currentUrl).href;
          console.log(`↪️  Redirecionando (${res.statusCode})...`);
          request(nextUrl, redirectsLeft - 1);
          return;
        }

        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} ao baixar gid=${gid}`));
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

/** Parser CSV simples que respeita aspas e quebras de linha dentro de campos */
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

function escapeJsString(str) {
  // Mantida apenas por compatibilidade. Preferimos JSON.stringify.
  return str == null ? '' : String(str);
}

function formatPrice(val) {
  const n = parseFloat(String(val).replace(',', '.'));
  if (isNaN(n)) return 0;
  return n;
}

async function main() {
  console.log('📥 Baixando abas da planilha...');

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

  // Categorias
  const categorias = categoriasRaw
    .filter(r => r.id)
    .map(r => ({
      id: r.id,
      nome: r.nome || '',
      nomeMenu: r.nomeMenu || r.nome || '',
      mostrarNoMenu: toBool(r.mostrarNoMenu),
    }));

  const catIds = new Set(categorias.map(c => c.id));

  // Produtos
  const produtos = [];
  const seenIds = new Set();

  for (const r of produtosRaw) {
    if (!r.id) continue;

    if (seenIds.has(r.id)) {
      console.warn(`⚠️  id duplicado ignorado: ${r.id}`);
      continue;
    }
    seenIds.add(r.id);

    if (r.categoria && !catIds.has(r.categoria)) {
      console.warn(`⚠️  Produto ${r.id} tem categoria inexistente: "${r.categoria}"`);
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
      videos,
      descricao: {
        resumo: r.resumo || '',
        oQueE: r.oQueE || '',
        composicao: r.composicao || '',
        comoUsar: r.comoUsar || '',
        advertencias: r.advertencias || '',
      },
      destaque: toBool(r.destaque),
      mostrarlancamento: toBool(r.mostrarlancamento),
      mostrarVideo: toBool(r.mostrarVideo),
      textoParcelamento: r.textoParcelamento || '',
    });
  }

  console.log(`✅ ${categorias.length} categorias | ${produtos.length} produtos`);

    // Gerar data.js
  let js = `/* ============================================================
   CONFIGURAÇÕES GERAIS
   ============================================================ */
// Número fixo do WhatsApp da farmácia (formato internacional, sem +)
// Gerado automaticamente a partir da planilha Google Sheets
const WHATSAPP_NUMERO = ${JSON.stringify(whatsapp)};

/* ============================================================
   CATEGORIAS
   ============================================================ */
const categorias = [
`;

  categorias.forEach((c, i) => {
    js += `  {
    id: ${JSON.stringify(c.id)},
    nome: ${JSON.stringify(c.nome)},
    nomeMenu: ${JSON.stringify(c.nomeMenu)},
    mostrarNoMenu: ${c.mostrarNoMenu}
  }${i < categorias.length - 1 ? ',' : ''}
`;
  });

  js += `];

/* ============================================================
   PRODUTOS
   ============================================================ */
const produtos = [
`;

  produtos.forEach((p, i) => {
    const videosStr = p.videos.map(v => JSON.stringify(v)).join(',\n      ');

    js += `  {
    id: ${JSON.stringify(p.id)},
    nome: ${JSON.stringify(p.nome)},
    categoria: ${JSON.stringify(p.categoria)},
    preco: ${p.preco.toFixed(2)},
    imagem: ${JSON.stringify(p.imagem)},
    videos: [
      ${videosStr || ''}
    ],
    descricao: {
      resumo: ${JSON.stringify(p.descricao.resumo)},
      oQueE: ${JSON.stringify(p.descricao.oQueE)},
      composicao: ${JSON.stringify(p.descricao.composicao)},
      comoUsar: ${JSON.stringify(p.descricao.comoUsar)},
      advertencias: ${JSON.stringify(p.descricao.advertencias)}
    },
    destaque: ${p.destaque},
    mostrarlancamento: ${p.mostrarlancamento},
    mostrarVideo: ${p.mostrarVideo},
    textoParcelamento: ${JSON.stringify(p.textoParcelamento)}
  }${i < produtos.length - 1 ? ',' : ''}
`;
  });

  js += `];

window.produtos = produtos;
window.categorias = categorias;
window.WHATSAPP_NUMERO = WHATSAPP_NUMERO;

/* ============================================================
   OBSERVAÇÕES IMPORTANTES
   ============================================================ */
/*
- Este arquivo é GERADO AUTOMATICAMENTE pelo GitHub Action.
- NÃO edite manualmente. Altere a planilha Google Sheets.
- Para adicionar uma nova categoria: edite a aba Categorias.
- Para adicionar um novo produto: edite a aba Produtos (id único).
- Depois rode o workflow "Update data.js from Google Sheets".
*/
`;

  fs.writeFileSync(OUTPUT_PATH, js, 'utf8');
  console.log(`📝 Arquivo gerado: ${OUTPUT_PATH}`);
}

main().catch(err => {
  console.error('❌ Erro:', err.message);
  process.exit(1);
});

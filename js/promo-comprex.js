/**
 * Promoção "Compre X, leve +1 por preço Y"
 * Prioridade: Produto > Categoria
 */

/**
 * Resolve a promoção efetiva do produto (produto ou categoria)
 * Retorna null se não houver promoção ativa
 */
function obterPromoCompreXEfetiva(produto) {
  if (!produto) return null;

  // 1. Produto
  if (produto.promoCompreXAtivo) {
    const n = Number(produto.promoCompreXQtd) || 0;
    if (n >= 1) {
      return {
        origem: 'produto',
        qtd: n,
        preco: Number(produto.promoCompreXPreco),
        mensagemTag: produto.promoCompreXMensagemTag || '',
        ocultarTag: !!produto.promoCompreXOcultarTag
      };
    }
  }

  // 2. Categoria
  const categoria = (window.categorias || []).find(c => c.id === produto.categoria);
  if (categoria && categoria.promoCompreXAtivo) {
    const n = Number(categoria.promoCompreXQtd) || 0;
    if (n >= 1) {
      return {
        origem: 'categoria',
        qtd: n,
        preco: Number(categoria.promoCompreXPreco),
        mensagemTag: categoria.promoCompreXMensagemTag || '',
        ocultarTag: !!categoria.promoCompreXOcultarTag
      };
    }
  }

  return null;
}

function produtoTemPromoCompreX(produto) {
  return !!obterPromoCompreXEfetiva(produto);
}

/**
 * Unidades promocionais: floor(qtdPaga / N)
 */
function calcUnidadesPromoCompreX(produto, quantidadePaga) {
  const promo = obterPromoCompreXEfetiva(produto);
  if (!promo) return 0;
  const qtd = Math.max(0, Number(quantidadePaga) || 0);
  return Math.floor(qtd / promo.qtd);
}

/**
 * Preço da linha (cupom NÃO se aplica quando há Compre X)
 */
function calcularLinhaComPromoCompreX(produto, quantidadePaga) {
  const qtd = Math.max(0, Number(quantidadePaga) || 0);
  const precoUnit = Number(produto.preco) || 0;
  const promo = obterPromoCompreXEfetiva(produto);
  const promoUnits = promo ? Math.floor(qtd / promo.qtd) : 0;
  const precoUnitPromo = promo
    ? (isNaN(promo.preco) ? 0.01 : promo.preco)
    : 0;

  const valorPago = qtd * precoUnit;
  const valorPromo = promoUnits * precoUnitPromo;
  const final = valorPago + valorPromo;

  const totalUnidades = qtd + promoUnits;
  const originalSemPromo = totalUnidades * precoUnit;
  const economiaPromo = originalSemPromo - final;

  return {
    quantidadePaga: qtd,
    unidadesPromo: promoUnits,
    totalUnidades: totalUnidades,
    precoUnit: precoUnit,
    precoUnitPromo: precoUnitPromo,
    original: originalSemPromo,
    final: final,
    economiaPromo: economiaPromo > 0 ? economiaPromo : 0,
    temPromo: promoUnits > 0,
    origem: promo ? promo.origem : null
  };
}

function obterMensagemTagPromoCompreX(produto) {
  const promo = obterPromoCompreXEfetiva(produto);
  if (!promo || promo.ocultarTag) return '';

  if (promo.mensagemTag && String(promo.mensagemTag).trim()) {
    return String(promo.mensagemTag).trim();
  }

  const precoFmt = (isNaN(promo.preco) ? 0.01 : promo.preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return `Compre ${promo.qtd}, leve +1 por ${precoFmt}`;
}

function htmlBadgePromoCompreX(produto) {
  const msg = obterMensagemTagPromoCompreX(produto);
  if (!msg) return '';
  return `<span class="badge-promo-comprex">${msg}</span>`;
}

window.obterPromoCompreXEfetiva = obterPromoCompreXEfetiva;
window.produtoTemPromoCompreX = produtoTemPromoCompreX;
window.calcUnidadesPromoCompreX = calcUnidadesPromoCompreX;
window.calcularLinhaComPromoCompreX = calcularLinhaComPromoCompreX;
window.obterMensagemTagPromoCompreX = obterMensagemTagPromoCompreX;
window.htmlBadgePromoCompreX = htmlBadgePromoCompreX;

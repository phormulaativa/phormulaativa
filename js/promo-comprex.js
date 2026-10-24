/**
 * Promoção "Compre X, leve +1 por preço Y"
 * Config por produto: promoCompreXAtivo, promoCompreXQtd, promoCompreXPreco, ...
 */

function produtoTemPromoCompreX(produto) {
  if (!produto || !produto.promoCompreXAtivo) return false;
  const n = Number(produto.promoCompreXQtd) || 0;
  return n >= 1;
}

/**
 * Quantidade de unidades promocionais para uma qtd paga
 * Ex: N=2, qtd=5 → floor(5/2)=2
 */
function calcUnidadesPromoCompreX(produto, quantidadePaga) {
  if (!produtoTemPromoCompreX(produto)) return 0;
  const n = Number(produto.promoCompreXQtd) || 0;
  const qtd = Math.max(0, Number(quantidadePaga) || 0);
  if (n < 1) return 0;
  return Math.floor(qtd / n);
}

/**
 * Preço da linha: unidades pagas * preço + unidades promo * preço promo
 * Cupom NÃO se aplica quando a promo está ativa neste produto.
 */
function calcularLinhaComPromoCompreX(produto, quantidadePaga) {
  const qtd = Math.max(0, Number(quantidadePaga) || 0);
  const precoUnit = Number(produto.preco) || 0;
  const promoUnits = calcUnidadesPromoCompreX(produto, qtd);
  const precoPromo = Number(produto.promoCompreXPreco);
  const precoUnitPromo = isNaN(precoPromo) ? 0.01 : precoPromo;

  const valorPago = qtd * precoUnit;
  const valorPromo = promoUnits * precoUnitPromo;
  const final = valorPago + valorPromo;

  // "Original" = se todas as unidades (pagas + promo) fossem pelo preço cheio
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
    temPromo: promoUnits > 0
  };
}

/**
 * Texto da tag (igual lógica do cupom)
 */
function obterMensagemTagPromoCompreX(produto) {
  if (!produtoTemPromoCompreX(produto)) return '';
  if (produto.promoCompreXOcultarTag) return '';

  if (produto.promoCompreXMensagemTag && String(produto.promoCompreXMensagemTag).trim()) {
    return String(produto.promoCompreXMensagemTag).trim();
  }

  const n = Number(produto.promoCompreXQtd) || 2;
  const preco = Number(produto.promoCompreXPreco);
  const precoFmt = (isNaN(preco) ? 0.01 : preco).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return `Compre ${n}, leve +1 por ${precoFmt}`;
}

/**
 * HTML da badge (vazio se não houver)
 */
function htmlBadgePromoCompreX(produto) {
  const msg = obterMensagemTagPromoCompreX(produto);
  if (!msg) return '';
  return `<span class="badge-promo-comprex">${msg}</span>`;
}

// Expõe no window para app.js / produto.js / cart.js
window.produtoTemPromoCompreX = produtoTemPromoCompreX;
window.calcUnidadesPromoCompreX = calcUnidadesPromoCompreX;
window.calcularLinhaComPromoCompreX = calcularLinhaComPromoCompreX;
window.obterMensagemTagPromoCompreX = obterMensagemTagPromoCompreX;
window.htmlBadgePromoCompreX = htmlBadgePromoCompreX;

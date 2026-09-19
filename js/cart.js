
/**
 * Retorna o cupom válido para um produto seguindo a prioridade:
 * Site > Categoria > Produto
 */
function obterCupomValido(produto) {
  if (!produto) return null;

  const hoje = new Date().toISOString().slice(0, 10);

  // 1. Cupom do Site
  if (window.cupomSite && window.cupomSite.ativo && window.cupomSite.codigo) {
    if (!window.cupomSite.validade || window.cupomSite.validade >= hoje) {
      return {
        tipo: 'site',
        porcentagem: Number(window.cupomSite.porcentagem) || 0,
        codigo: window.cupomSite.codigo,
        mensagem: window.cupomSite.mensagemTag || (window.cupomSite.porcentagem + '% de desconto no fechamento do pedido'),
        ocultarTag: !!window.cupomSite.ocultarTagCupom
      };
    }
  }

  // 2. Cupom da Categoria
  const categoria = (window.categorias || []).find(c => c.id === produto.categoria);
  if (categoria && categoria.cupomAtivo && categoria.cupomCodigo) {
    if (!categoria.cupomValidade || categoria.cupomValidade >= hoje) {
      return {
        tipo: 'categoria',
        porcentagem: Number(categoria.cupomPorcentagem) || 0,
        codigo: categoria.cupomCodigo,
        mensagem: categoria.cupomMensagemTag || (categoria.cupomPorcentagem + '% de desconto no fechamento do pedido'),
        ocultarTag: !!categoria.cupomOcultarTag
      };
    }
  }

  // 3. Cupom do Produto
  if (produto.cupomAtivo && produto.cupomCodigo) {
    if (!produto.cupomValidade || produto.cupomValidade >= hoje) {
      return {
        tipo: 'produto',
        porcentagem: Number(produto.cupomPorcentagem) || 0,
        codigo: produto.cupomCodigo,
        mensagem: produto.cupomMensagemTag || (produto.cupomPorcentagem + '% de desconto no fechamento do pedido'),
        ocultarTag: !!produto.cupomOcultarTag
      };
    }
  }

  return null;
}







/* ============================================================
   CART.JS – Sistema de Carrinho (localStorage)
   ============================================================ */

const CART_KEY = "phormula_cart";

// ======================
// UTILIDADES
// ======================
function formatarPrecoCart(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
  renderCart();
}

// ======================
// ADICIONAR AO CARRINHO
// ======================
function addToCart(produto, quantidade = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === produto.id);

  if (existing) {
    existing.quantidade += quantidade;
  } else {
    cart.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem,
      categoria: produto.categoria,
      quantidade: quantidade
    });
  }

  saveCart(cart);

  // Feedback visual rápido
  showCartFeedback();
}

// ======================
// ATUALIZAR QUANTIDADE
// ======================
function updateCartQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantidade += delta;

  if (item.quantidade <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart(cart);
}

// ======================
// REMOVER ITEM
// ======================
function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
}

// ======================
// BADGE DO ÍCONE
// ======================
function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantidade, 0);

  const badge = document.getElementById("cartBadge");
  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? "flex" : "none";
  }
}

// ======================
// FEEDBACK "ADICIONADO"
// ======================
function showCartFeedback() {
  const feedback = document.getElementById("cartFeedback");
  if (!feedback) return;

  feedback.classList.add("show");
  setTimeout(() => feedback.classList.remove("show"), 1800);
}

// ======================
// RENDERIZAR CARRINHO
// ======================
function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cartItems");
  const emptyMsg = document.getElementById("cartEmpty");
  const totalEl = document.getElementById("cartTotal");
  const footer = document.getElementById("cartFooter");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "";
    if (emptyMsg) emptyMsg.style.display = "block";
    if (footer) footer.style.display = "none";
    cupomAplicado = null;
    return;
  }

  if (emptyMsg) emptyMsg.style.display = "none";
  if (footer) footer.style.display = "block";

  let totalOriginal = 0;
  let totalFinal = 0;

  container.innerHTML = cart.map(item => {
    const produto = (window.produtos || []).find(p => p.id === item.id) || item;
    const calc = calcularPrecoComDesconto(produto, item.quantidade);

    totalOriginal += calc.original;
    totalFinal += calc.final;

    const precoHtml = calc.economia > 0
      ? `<span class="preco-original-riscado">${formatarPrecoCart(calc.original)}</span>
         <span class="preco-com-desconto">${formatarPrecoCart(calc.final)}</span>`
      : `<span class="cart-item-preco">${formatarPrecoCart(calc.original)}</span>`;

    return `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.imagem}" alt="${item.nome}" class="cart-item-img">
        
        <div class="cart-item-info">
          <h4>${item.nome}</h4>
          ${precoHtml}
          
          <div class="cart-item-acoes">
            <div class="cart-qty">
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
              <span>${item.quantidade}</span>
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
            
            <button class="cart-remove" onclick="removeFromCart('${item.id}')" title="Remover">✕</button>
          </div>
          
          <div class="cart-item-subtotal">
            Subtotal: <strong>${formatarPrecoCart(calc.final)}</strong>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Total + economia
  if (totalEl) {
    totalEl.textContent = formatarPrecoCart(totalFinal);
  }

  // Mostra economia
  let economiaEl = document.getElementById('cartEconomia');
  if (!economiaEl) {
    economiaEl = document.createElement('div');
    economiaEl.id = 'cartEconomia';
    economiaEl.className = 'cart-economia';
    const totalLine = document.querySelector('.cart-total-line');
    if (totalLine) totalLine.after(economiaEl);
  }

  const economia = totalOriginal - totalFinal;
  if (economia > 0) {
    economiaEl.textContent = `Você economizou ${formatarPrecoCart(economia)} nesta compra`;
    economiaEl.style.display = 'block';
  } else {
    economiaEl.style.display = 'none';
  }

  renderCartSuggestions();
}






// ======================
// SUGESTÕES - COMPLETE SEU PEDIDO
// ======================


// ======================
// SUGESTÕES - COMPLETE SEU PEDIDO (SLIDER HORIZONTAL)
// ======================
function renderCartSuggestions() {
  const section = document.getElementById("cartSuggestions");
  const track = document.getElementById("cartSuggestionsList");
  if (!section || !track) return;

  const cart = getCart();
  const idsNoCarrinho = cart.map(item => item.id);

  // Produtos em destaque que ainda NÃO estão no carrinho
let sugestoes = (window.produtos || []).filter(p =>
  p.destaque === true && !idsNoCarrinho.includes(p.id)
);

if (sugestoes.length === 0) {
  section.style.display = "none";
  return;
}

// Embaralha a ordem (random)
sugestoes = sugestoes.sort(() => Math.random() - 0.5);

const lista = sugestoes;

  track.innerHTML = lista.map(produto => `
    <div class="cart-suggestion-card" data-id="${produto.id}">
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="cart-suggestion-info">
        <span class="cart-suggestion-nome">${produto.nome}</span>
        <span class="cart-suggestion-preco">${formatarPrecoCart(produto.preco)}</span>
      </div>
      <button class="cart-suggestion-btn" onclick="event.stopPropagation(); addToCartFromSuggestion('${produto.id}')">
        Adicionar
      </button>
    </div>
  `).join("");

// Torna os cards de sugestão clicáveis (abre a página do produto)
  track.querySelectorAll(".cart-suggestion-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Se clicou no botão Adicionar, não faz nada aqui
      if (e.target.closest(".cart-suggestion-btn")) return;

      const id = card.dataset.id;
      if (id) {
        window.location.href = `produto.html?id=${id}`;
      }
    });
  });
   
  section.style.display = "block";

  // Inicializa o slider das sugestões
  initSuggestionsSlider();
}

function addToCartFromSuggestion(id) {
  const produto = (window.produtos || []).find(p => p.id === id);
  if (produto) {
    addToCart(produto, 1);
  }
}

function initSuggestionsSlider() {
  const track = document.getElementById("cartSuggestionsList");
  const btnLeft = document.getElementById("sugArrowLeft");
  const btnRight = document.getElementById("sugArrowRight");

  if (!track) return;

  const scrollAmount = 160; // quanto rola a cada clique

  btnLeft?.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  btnRight?.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}







// ======================
// ABRIR / FECHAR CARRINHO
// ======================
function openCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");
  if (sidebar) sidebar.classList.add("open");
  if (overlay) overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");
  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

// ======================
// FINALIZAR PEDIDO (WHATSAPP)
// ======================
function finalizarPedido() {
  const cart = getCart();
  if (cart.length === 0) return;

  // Solicita dados do cliente antes de abrir o WhatsApp
  abrirModalDadosCliente(function (dadosCliente) {
    enviarPedidoCarrinhoWhatsApp(dadosCliente);
  });
}

function enviarPedidoCarrinhoWhatsApp(dadosCliente) {
  const cart = getCart();
  if (cart.length === 0) return;

  let mensagem = `Olá! Gostaria de fazer um pedido:%0A%0A`;

  // Dados do cliente
  mensagem += formatarDadosClienteWhatsApp(dadosCliente);
  mensagem += `%0A────────────────%0A%0A`;

  let totalOriginal = 0;
  let totalFinal = 0;

  cart.forEach((item, index) => {
    const produto = (window.produtos || []).find(p => p.id === item.id) || item;
    const calc = calcularPrecoComDesconto(produto, item.quantidade);

    totalOriginal += calc.original;
    totalFinal += calc.final;

    const basePath = window.location.pathname.split("/").slice(0, -1).join("/");
    const linkProduto = `${window.location.origin}${basePath}/produto.html?id=${item.id}`;

    const cat = (typeof categorias !== "undefined")
      ? categorias.find(c => c.id === item.categoria)
      : null;
    const nomeCategoria = cat ? cat.nome : item.categoria;

    mensagem += `*${index + 1}. ${item.nome}*%0A`;
    mensagem += `Categoria: ${nomeCategoria}%0A`;
    mensagem += `Quantidade: ${item.quantidade} unidade(s)%0A`;

    if (calc.economia > 0) {
      mensagem += `Valor original: ${formatarPrecoCart(calc.original)}%0A`;
      mensagem += `Valor com desconto: ${formatarPrecoCart(calc.final)}%0A`;
    } else {
      mensagem += `Valor: ${formatarPrecoCart(calc.original)}%0A`;
    }

    mensagem += `Link: ${linkProduto}%0A%0A`;
  });

  mensagem += `────────────────%0A`;

  if (totalOriginal > totalFinal) {
    mensagem += `*Subtotal original: ${formatarPrecoCart(totalOriginal)}*%0A`;
    mensagem += `*Desconto aplicado: ${formatarPrecoCart(totalOriginal - totalFinal)}*%0A`;
    mensagem += `*TOTAL COM DESCONTO: ${formatarPrecoCart(totalFinal)}*%0A`;
    mensagem += `Você economizou ${formatarPrecoCart(totalOriginal - totalFinal)} nesta compra!%0A%0A`;
    if (cupomAplicado) {
      mensagem += `Cupom usado: *${cupomAplicado.codigo}*%0A%0A`;
    }
  } else {
    mensagem += `*TOTAL DO PEDIDO: ${formatarPrecoCart(totalFinal)}*%0A%0A`;
  }

  mensagem += `Aguardo confirmação. Obrigado!`;

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(url, "_blank");
}

// ======================
// INICIALIZAÇÃO
// ======================
document.addEventListener("DOMContentLoaded", () => {
  // Cria a estrutura do carrinho se ainda não existir
  if (!document.getElementById("cartSidebar")) {
    createCartUI();
  }

  // Modal de dados do cliente (compra direta + carrinho)
  ensureModalDadosCliente();

  updateCartBadge();
  renderCart();

  // Eventos
  const btnAplicarCupom = document.getElementById('btnAplicarCupom');
  if (btnAplicarCupom) {
    btnAplicarCupom.addEventListener('click', aplicarCupomCarrinho);
  }

  const cupomInput = document.getElementById('cartCupomInput');
  if (cupomInput) {
    cupomInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') aplicarCupomCarrinho();
    });
  }

  const cartIcon = document.getElementById("cartIcon");
  if (cartIcon) {
    cartIcon.addEventListener("click", openCart);
  }

  const closeBtn = document.getElementById("cartClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCart);
  }

  const overlay = document.getElementById("cartOverlay");
  if (overlay) {
    overlay.addEventListener("click", closeCart);
  }

  const btnFinalizar = document.getElementById("btnFinalizarPedido");
  if (btnFinalizar) {
    btnFinalizar.addEventListener("click", finalizarPedido);
  }
});

// ======================
// CRIA A ESTRUTURA HTML DO CARRINHO
// ======================
function createCartUI() {
  const html = `
    <!-- Overlay -->
    <div id="cartOverlay" class="cart-overlay"></div>

    <!-- Sidebar do Carrinho -->
    <div id="cartSidebar" class="cart-sidebar">
      <div class="cart-header">
        <h3>Seu Carrinho</h3>
        <button id="cartClose" class="cart-close" aria-label="Fechar carrinho">✕</button>
      </div>

      <div id="cartEmpty" class="cart-empty">
        <p>Seu carrinho está vazio</p>
        <small>Adicione produtos para continuar</small>
      </div>

      <div id="cartItems" class="cart-items"></div>

      <!-- NOVA SEÇÃO: Complete seu pedido -->
     <!-- SUGESTÕES - COMPLETE SEU PEDIDO -->
      <div id="cartSuggestions" class="cart-suggestions" style="display: none;">
        <div class="cart-suggestions-header">
          <h4>Complete seu pedido</h4>
          <div class="cart-suggestions-arrows">
            <button class="cart-sug-arrow left" id="sugArrowLeft">‹</button>
            <button class="cart-sug-arrow right" id="sugArrowRight">›</button>
          </div>
        </div>
        <div class="cart-suggestions-viewport">
          <div id="cartSuggestionsList" class="cart-suggestions-track"></div>
        </div>
      </div>

      <div id="cartFooter" class="cart-footer" style="display:none;">

            <!-- Campo de Cupom -->
            <div class="cart-cupom-box">
              <div class="cart-cupom-input-wrap">
                <input type="text" id="cartCupomInput" placeholder="Cupom de desconto" autocomplete="off">
                <button type="button" id="btnAplicarCupom" class="btn-aplicar-cupom">Aplicar</button>
              </div>
              <div id="cartCupomMsg" class="cart-cupom-msg"></div>
            </div>
      
        <div class="cart-total-line">
          <span>Total do pedido:</span>
          <strong id="cartTotal">R$ 0,00</strong>
        </div>
        <button id="btnFinalizarPedido" class="btn-finalizar">
          Finalizar pedido no WhatsApp
        </button>
      </div>
    </div>

    <!-- Feedback "Adicionado" -->
    <div id="cartFeedback" class="cart-feedback">
      Produto adicionado ao carrinho!
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);
}




// ============================================================
// CUPOM NO CARRINHO
// ============================================================
let cupomAplicado = null; // { tipo, porcentagem, codigo, mensagem }

function aplicarCupomCarrinho() {
  const input = document.getElementById('cartCupomInput');
  const msgEl = document.getElementById('cartCupomMsg');
  if (!input || !msgEl) return;

  const codigo = (input.value || '').trim().toUpperCase();
  if (!codigo) {
    msgEl.textContent = 'Digite um cupom.';
    msgEl.className = 'cart-cupom-msg erro';
    return;
  }

  const cart = getCart();
  let encontrado = null;

  // 1. Verifica cupom do site
  if (window.cupomSite && window.cupomSite.ativo && window.cupomSite.codigo === codigo) {
    const hoje = new Date().toISOString().slice(0, 10);
    if (!window.cupomSite.validade || window.cupomSite.validade >= hoje) {
      encontrado = {
        tipo: 'site',
        porcentagem: Number(window.cupomSite.porcentagem) || 0,
        codigo: window.cupomSite.codigo,
        mensagem: window.cupomSite.mensagemTag
      };
    }
  }

  // 2. Se não for site, procura nos produtos do carrinho (respeitando prioridade)
  if (!encontrado) {
    for (const item of cart) {
      const produto = (window.produtos || []).find(p => p.id === item.id);
      if (!produto) continue;

      const cupom = obterCupomValido(produto);
      if (cupom && cupom.codigo === codigo) {
        encontrado = cupom;
        break;
      }
    }
  }

  if (!encontrado) {
    cupomAplicado = null;
    msgEl.textContent = 'Cupom inválido ou expirado.';
    msgEl.className = 'cart-cupom-msg erro';
  } else {
    cupomAplicado = encontrado;
    msgEl.textContent = `Cupom ${codigo} aplicado com sucesso!`;
    msgEl.className = 'cart-cupom-msg sucesso';
  }

  renderCart();
}

function calcularPrecoComDesconto(produto, quantidade) {
  const precoOriginal = produto.preco * quantidade;
  if (!cupomAplicado) return { original: precoOriginal, final: precoOriginal, economia: 0 };

  // Só aplica se o cupom for válido para este produto
  const cupomDoProduto = obterCupomValido(produto);
  if (!cupomDoProduto || cupomDoProduto.codigo !== cupomAplicado.codigo) {
    return { original: precoOriginal, final: precoOriginal, economia: 0 };
  }

  const desconto = precoOriginal * (cupomAplicado.porcentagem / 100);
  const final = precoOriginal - desconto;
  return { original: precoOriginal, final, economia: desconto };
}


/* ============================================================
   MODAL DADOS DO CLIENTE (Nome + Endereço completo com CEP)
   Usado em: Finalizar pedido (carrinho) e Compra direta
   ============================================================ */

const DADOS_CLIENTE_KEY = "phormula_dados_cliente";
let _callbackDadosCliente = null;

function formatarDadosClienteWhatsApp(dados) {
  if (!dados) return "";
  let t = `*Dados para entrega:*%0A`;
  t += `Nome: ${dados.nome}%0A`;
  t += `CEP: ${dados.cep}%0A`;
  t += `Endereço: ${dados.rua}, ${dados.numero}`;
  if (dados.complemento) t += ` - ${dados.complemento}`;
  t += `%0A`;
  t += `Bairro: ${dados.bairro}%0A`;
  t += `Cidade: ${dados.cidade} - ${dados.uf}%0A`;
  return t;
}

function carregarDadosClienteSalvos() {
  try {
    return JSON.parse(localStorage.getItem(DADOS_CLIENTE_KEY)) || null;
  } catch {
    return null;
  }
}

function salvarDadosCliente(dados) {
  try {
    localStorage.setItem(DADOS_CLIENTE_KEY, JSON.stringify(dados));
  } catch (_) {}
}

function ensureModalDadosCliente() {
  if (document.getElementById("modalDadosCliente")) return;

  // Estilos (independentes, não quebram o restante do CSS)
  if (!document.getElementById("styleModalDadosCliente")) {
    const style = document.createElement("style");
    style.id = "styleModalDadosCliente";
    style.textContent = `
      #modalDadosCliente.modal-dados-overlay {
        position: fixed; inset: 0; z-index: 99999;
        background: rgba(0,0,0,.55);
        display: none; align-items: center; justify-content: center;
        padding: 16px; box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
      }
      #modalDadosCliente.modal-dados-overlay.open { display: flex; }
      #modalDadosCliente .modal-dados {
        background: #fff; border-radius: 16px;
        width: 100%; max-width: 440px; max-height: 92vh;
        overflow-y: auto; padding: 22px 20px 18px;
        box-shadow: 0 12px 40px rgba(0,0,0,.25);
        position: relative; font-family: inherit;
      }
      #modalDadosCliente .modal-dados-close {
        position: absolute; top: 12px; right: 14px;
        background: transparent; border: none; font-size: 22px;
        line-height: 1; cursor: pointer; color: #666; padding: 4px 8px;
      }
      #modalDadosCliente .modal-dados h3 {
        margin: 0 28px 6px 0; font-size: 1.2rem; color: #1a1a1a;
      }
      #modalDadosCliente .modal-dados-sub {
        margin: 0 0 16px; font-size: .9rem; color: #666;
      }
      #modalDadosCliente .md-field { margin-bottom: 12px; }
      #modalDadosCliente .md-field label {
        display: block; font-size: .82rem; font-weight: 600;
        color: #333; margin-bottom: 4px;
      }
      #modalDadosCliente .md-field label .req { color: #c1121f; }
      #modalDadosCliente .md-field input,
      #modalDadosCliente .md-field select {
        width: 100%; box-sizing: border-box;
        padding: 11px 12px; border: 1.5px solid #ddd;
        border-radius: 10px; font-size: 16px; /* evita zoom iOS */
        outline: none; transition: border-color .15s;
        background: #fafafa;
      }
      #modalDadosCliente .md-field input:focus,
      #modalDadosCliente .md-field select:focus {
        border-color: #25d366; background: #fff;
      }
      #modalDadosCliente .md-field input.md-erro {
        border-color: #c1121f; background: #fff5f5;
      }
      #modalDadosCliente .md-row {
        display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
      }
      #modalDadosCliente .md-row-3 {
        display: grid; grid-template-columns: 1.4fr 1fr .7fr; gap: 10px;
      }
      #modalDadosCliente .md-msg {
        min-height: 18px; font-size: .85rem; color: #c1121f;
        margin: 4px 0 8px;
      }
      #modalDadosCliente .md-botoes {
        display: flex; flex-direction: column; gap: 8px; margin-top: 8px;
      }
      #modalDadosCliente .btn-md-enviar {
        background: #25d366; color: #fff; border: none;
        border-radius: 12px; padding: 14px 16px; font-size: 1rem;
        font-weight: 700; cursor: pointer; width: 100%;
      }
      #modalDadosCliente .btn-md-enviar:active { opacity: .9; }
      #modalDadosCliente .btn-md-cancelar {
        background: transparent; color: #666; border: none;
        padding: 10px; font-size: .9rem; cursor: pointer;
      }
      @media (max-width: 480px) {
        #modalDadosCliente .modal-dados {
          padding: 18px 14px 14px; border-radius: 14px 14px 0 0;
          max-height: 88vh; margin-top: auto;
        }
        #modalDadosCliente.modal-dados-overlay {
          align-items: flex-end; padding: 0;
        }
        #modalDadosCliente .md-row-3 {
          grid-template-columns: 1fr 1fr;
        }
        #modalDadosCliente .md-row-3 .md-uf { grid-column: 1 / -1; }
      }
    `;
    document.head.appendChild(style);
  }

  const html = `
    <div id="modalDadosCliente" class="modal-dados-overlay" role="dialog" aria-modal="true" aria-labelledby="mdTitulo">
      <div class="modal-dados">
        <button type="button" class="modal-dados-close" id="mdClose" aria-label="Fechar">✕</button>
        <h3 id="mdTitulo">Dados para o pedido</h3>
        <p class="modal-dados-sub">Preencha seus dados para enviarmos o orçamento no WhatsApp.</p>

        <div class="md-field">
          <label for="mdNome">Nome completo <span class="req">*</span></label>
          <input type="text" id="mdNome" autocomplete="name" placeholder="Seu nome completo" maxlength="120">
        </div>

        <div class="md-field">
          <label for="mdCep">CEP <span class="req">*</span></label>
          <input type="text" id="mdCep" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" maxlength="9">
        </div>

        <div class="md-field">
          <label for="mdRua">Rua / Logradouro <span class="req">*</span></label>
          <input type="text" id="mdRua" autocomplete="street-address" placeholder="Nome da rua" maxlength="150">
        </div>

        <div class="md-row">
          <div class="md-field">
            <label for="mdNumero">Número <span class="req">*</span></label>
            <input type="text" id="mdNumero" autocomplete="address-line2" placeholder="Nº" maxlength="20">
          </div>
          <div class="md-field">
            <label for="mdComplemento">Complemento</label>
            <input type="text" id="mdComplemento" placeholder="Apto, bloco..." maxlength="80">
          </div>
        </div>

        <div class="md-field">
          <label for="mdBairro">Bairro <span class="req">*</span></label>
          <input type="text" id="mdBairro" placeholder="Bairro" maxlength="80">
        </div>

        <div class="md-row-3">
          <div class="md-field">
            <label for="mdCidade">Cidade <span class="req">*</span></label>
            <input type="text" id="mdCidade" autocomplete="address-level2" placeholder="Cidade" maxlength="80">
          </div>
          <div class="md-field md-uf">
            <label for="mdUf">UF <span class="req">*</span></label>
            <select id="mdUf">
              <option value="">—</option>
              <option value="AC">AC</option><option value="AL">AL</option><option value="AP">AP</option>
              <option value="AM">AM</option><option value="BA">BA</option><option value="CE">CE</option>
              <option value="DF">DF</option><option value="ES">ES</option><option value="GO">GO</option>
              <option value="MA">MA</option><option value="MT">MT</option><option value="MS">MS</option>
              <option value="MG">MG</option><option value="PA">PA</option><option value="PB">PB</option>
              <option value="PR">PR</option><option value="PE">PE</option><option value="PI">PI</option>
              <option value="RJ">RJ</option><option value="RN">RN</option><option value="RS">RS</option>
              <option value="RO">RO</option><option value="RR">RR</option><option value="SC">SC</option>
              <option value="SP">SP</option><option value="SE">SE</option><option value="TO">TO</option>
            </select>
          </div>
        </div>

        <div class="md-msg" id="mdMsg"></div>

        <div class="md-botoes">
          <button type="button" class="btn-md-enviar" id="mdEnviar">Continuar no WhatsApp</button>
          <button type="button" class="btn-md-cancelar" id="mdCancelar">Cancelar</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", html);

  // Eventos
  document.getElementById("mdClose").addEventListener("click", fecharModalDadosCliente);
  document.getElementById("mdCancelar").addEventListener("click", fecharModalDadosCliente);
  document.getElementById("mdEnviar").addEventListener("click", confirmarDadosCliente);

  document.getElementById("modalDadosCliente").addEventListener("click", (e) => {
    if (e.target.id === "modalDadosCliente") fecharModalDadosCliente();
  });

  // Máscara CEP + ViaCEP
  const cepInput = document.getElementById("mdCep");
  cepInput.addEventListener("input", () => {
    let v = cepInput.value.replace(/\D/g, "").slice(0, 8);
    if (v.length > 5) v = v.slice(0, 5) + "-" + v.slice(5);
    cepInput.value = v;
    if (v.replace(/\D/g, "").length === 8) buscarCepViaCep(v);
  });

  // Enter no último campo envia
  document.getElementById("mdUf").addEventListener("keydown", (e) => {
    if (e.key === "Enter") confirmarDadosCliente();
  });
}

function abrirModalDadosCliente(callback) {
  ensureModalDadosCliente();
  _callbackDadosCliente = typeof callback === "function" ? callback : null;

  const modal = document.getElementById("modalDadosCliente");
  const msg = document.getElementById("mdMsg");
  if (msg) msg.textContent = "";

  // Preenche com dados salvos (UX)
  const salvos = carregarDadosClienteSalvos();
  if (salvos) {
    document.getElementById("mdNome").value = salvos.nome || "";
    document.getElementById("mdCep").value = salvos.cep || "";
    document.getElementById("mdRua").value = salvos.rua || "";
    document.getElementById("mdNumero").value = salvos.numero || "";
    document.getElementById("mdComplemento").value = salvos.complemento || "";
    document.getElementById("mdBairro").value = salvos.bairro || "";
    document.getElementById("mdCidade").value = salvos.cidade || "";
    document.getElementById("mdUf").value = salvos.uf || "";
  }

  // Limpa erros visuais
  modal.querySelectorAll("input.md-erro").forEach((el) => el.classList.remove("md-erro"));

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    const nome = document.getElementById("mdNome");
    if (nome && !nome.value) nome.focus();
  }, 100);
}

function fecharModalDadosCliente() {
  const modal = document.getElementById("modalDadosCliente");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
  _callbackDadosCliente = null;
}

function confirmarDadosCliente() {
  const campos = {
    nome: document.getElementById("mdNome"),
    cep: document.getElementById("mdCep"),
    rua: document.getElementById("mdRua"),
    numero: document.getElementById("mdNumero"),
    complemento: document.getElementById("mdComplemento"),
    bairro: document.getElementById("mdBairro"),
    cidade: document.getElementById("mdCidade"),
    uf: document.getElementById("mdUf")
  };

  const msg = document.getElementById("mdMsg");
  Object.values(campos).forEach((el) => {
    if (el && el.classList) el.classList.remove("md-erro");
  });

  const dados = {
    nome: (campos.nome.value || "").trim(),
    cep: (campos.cep.value || "").trim(),
    rua: (campos.rua.value || "").trim(),
    numero: (campos.numero.value || "").trim(),
    complemento: (campos.complemento.value || "").trim(),
    bairro: (campos.bairro.value || "").trim(),
    cidade: (campos.cidade.value || "").trim(),
    uf: (campos.uf.value || "").trim().toUpperCase()
  };

  const obrigatorios = [
    ["nome", "Nome completo"],
    ["cep", "CEP"],
    ["rua", "Rua / Logradouro"],
    ["numero", "Número"],
    ["bairro", "Bairro"],
    ["cidade", "Cidade"],
    ["uf", "UF"]
  ];

  for (const [key, label] of obrigatorios) {
    if (!dados[key]) {
      if (campos[key]) campos[key].classList.add("md-erro");
      msg.textContent = `Preencha o campo obrigatório: ${label}.`;
      campos[key] && campos[key].focus();
      return;
    }
  }

  const cepNumeros = dados.cep.replace(/\D/g, "");
  if (cepNumeros.length !== 8) {
    campos.cep.classList.add("md-erro");
    msg.textContent = "CEP inválido. Use 8 dígitos.";
    campos.cep.focus();
    return;
  }
  // Formata CEP
  dados.cep = cepNumeros.slice(0, 5) + "-" + cepNumeros.slice(5);

  salvarDadosCliente(dados);

  const cb = _callbackDadosCliente;
  fecharModalDadosCliente();

  if (cb) cb(dados);
}

function buscarCepViaCep(cepFormatado) {
  const cep = String(cepFormatado || "").replace(/\D/g, "");
  if (cep.length !== 8) return;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((r) => r.json())
    .then((data) => {
      if (!data || data.erro) return;
      const rua = document.getElementById("mdRua");
      const bairro = document.getElementById("mdBairro");
      const cidade = document.getElementById("mdCidade");
      const uf = document.getElementById("mdUf");
      if (data.logradouro && rua && !rua.value) rua.value = data.logradouro;
      else if (data.logradouro && rua) rua.value = data.logradouro;
      if (data.bairro && bairro) bairro.value = data.bairro;
      if (data.localidade && cidade) cidade.value = data.localidade;
      if (data.uf && uf) uf.value = data.uf;
      const num = document.getElementById("mdNumero");
      if (num) num.focus();
    })
    .catch(() => {});
}

// Expõe globalmente para app.js e produto.js
window.abrirModalDadosCliente = abrirModalDadosCliente;
window.formatarDadosClienteWhatsApp = formatarDadosClienteWhatsApp;
window.fecharModalDadosCliente = fecharModalDadosCliente;

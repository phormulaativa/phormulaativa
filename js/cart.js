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
    return;
  }

  if (emptyMsg) emptyMsg.style.display = "none";
  if (footer) footer.style.display = "block";

  let totalGeral = 0;

  container.innerHTML = cart.map(item => {
    const subtotal = item.preco * item.quantidade;
    totalGeral += subtotal;

    return `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.imagem}" alt="${item.nome}" class="cart-item-img">
        
        <div class="cart-item-info">
          <h4>${item.nome}</h4>
          <span class="cart-item-preco">${formatarPrecoCart(item.preco)}</span>
          
          <div class="cart-item-acoes">
            <div class="cart-qty">
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
              <span>${item.quantidade}</span>
              <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
            
            <button class="cart-remove" onclick="removeFromCart('${item.id}')" title="Remover">
              ✕
            </button>
          </div>
          
          <div class="cart-item-subtotal">
            Subtotal: <strong>${formatarPrecoCart(subtotal)}</strong>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (totalEl) {
    totalEl.textContent = formatarPrecoCart(totalGeral);
  }


   // Atualiza as sugestões
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
  const sugestoes = (window.produtos || []).filter(p =>
    p.destaque === true && !idsNoCarrinho.includes(p.id)
  );

  if (sugestoes.length === 0) {
    section.style.display = "none";
    return;
  }

  // Limita a 8 sugestões no máximo
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

  let mensagem = `Olá! Gostaria de fazer um pedido:%0A%0A`;
  let totalGeral = 0;

  cart.forEach((item, index) => {
    const subtotal = item.preco * item.quantidade;
    totalGeral += subtotal;

    // Link do produto
    const basePath = window.location.pathname
      .split("/")
      .slice(0, -1)
      .join("/");
    const linkProduto = `${window.location.origin}${basePath}/produto.html?id=${item.id}`;

    // Nome da categoria
    const cat = (typeof categorias !== "undefined")
      ? categorias.find(c => c.id === item.categoria)
      : null;
    const nomeCategoria = cat ? cat.nome : item.categoria;

    mensagem += `*${index + 1}. ${item.nome}*%0A`;
    mensagem += `Categoria: ${nomeCategoria}%0A`;
    mensagem += `Quantidade: ${item.quantidade} unidade(s)%0A`;
    mensagem += `Valor unitário: ${formatarPrecoCart(item.preco)}%0A`;
    mensagem += `Subtotal: ${formatarPrecoCart(subtotal)}%0A`;
    mensagem += `Link: ${linkProduto}%0A%0A`;
  });

  mensagem += `────────────────%0A`;
  mensagem += `*TOTAL DO PEDIDO: ${formatarPrecoCart(totalGeral)}*%0A%0A`;
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

  updateCartBadge();
  renderCart();

  // Eventos
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

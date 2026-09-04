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
   APP.JS – LÓGICA PRINCIPAL DO SITE
   ============================================================ */

// Nomalizar texto

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}


// Elementos principais
const menuCategorias = document.getElementById("menu-categorias");
const produtosContainer = document.getElementById("produtos-container");
const bannerContainer = document.getElementById("banner-container");
const searchInput = document.getElementById("searchInput");
const whatsappFooter = document.getElementById("whatsappFooter");






/* ============================================================
   BANNERS INTERMEDIÁRIOS (entre categorias)
   ============================================================
   Como usar:
   - afterCategory = id da categoria DEPOIS da qual o banner deve aparecer
   - imagens = array de objetos { src, alt }
   
   - 1 imagem  → aparece como card único
   - 2+ imagens → vira slider (setas + dots + rolagem)
   ============================================================ */
const bannersIntermediarios = [
  // Exemplo com várias imagens (slider):
  // {
  //   afterCategory: "emagrecimento",
  //   imagens: [
  //     { src: "assets/ads/banner-emagrecimento-1.jpg", alt: "Promoção 1" },
  //     { src: "assets/ads/banner-emagrecimento-2.jpg", alt: "Promoção 2" },
  //     { src: "assets/ads/banner-emagrecimento-3.jpg", alt: "Promoção 3" }
  //   ]
  // },

  // Exemplo com 1 imagem só:
  // {
  //   afterCategory: "podologia",
  //   imagens: [
  //     { src: "assets/ads/banner-podologia.jpg", alt: "Linha Podologia" }
  //   ]
  // }
];






/* ============================================================
   CRIA BANNER INTERMEDIÁRIO (só imagem, estilo card)
   ============================================================ */
function criarBannerIntermediario(banner) {
  const section = document.createElement("section");
  section.classList.add("categoria-section", "banner-intermediario");

  const container = document.createElement("div");
  container.classList.add("container");

  const card = document.createElement("div");
  card.classList.add("card", "card-banner-only");

  card.innerHTML = `
    <img src="${banner.imagem}" alt="${banner.alt || ''}" loading="lazy">
  `;

  container.appendChild(card);
  section.appendChild(container);

  return section;
}







// ============================================================
// UTILIDADES
// ============================================================

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function slugParaNomeCategoria(slug) {
  const cat = categorias.find(c => c.id === slug);
  return cat ? cat.nome : "";
}

// ============================================================
// BANNER DE DESTAQUES
// ============================================================
// SEM RENDER>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//function renderBanner() {
//  const destaques = produtos.filter(p => p.destaque);

//  destaques.forEach(produto => {
//    const card = criarCardProduto(produto, true);
//    bannerContainer.appendChild(card);
//  });
//}
// FIM SEM RENDER>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function renderBanner() {
  let destaques = produtos.filter(p => p.destaque);

  // Embaralha a ordem dos destaques (random)
  destaques = destaques.sort(() => Math.random() - 0.5);

  destaques.forEach(produto => {
    const card = criarCardProduto(produto, true);
    bannerContainer.appendChild(card);
  });
}



// ============================================================
// RENDERIZAÇÃO DE PRODUTOS POR CATEGORIA
// ============================================================

function renderProdutos(listaProdutos) {
  produtosContainer.innerHTML = "";

  categorias.forEach(cat => {
    
     // renderiza em ordem original
     //const produtosDaCategoria = listaProdutos.filter(p => p.categoria === cat.id);
     //if (produtosDaCategoria.length === 0) return;
     // fim
     
      // Embaralha a ordem dos produtos da categoria (random)
      let produtosDaCategoria = listaProdutos.filter(p => p.categoria === cat.id);
      if (produtosDaCategoria.length === 0) return;
      // Embaralha a ordem dos produtos da categoria (random)
      produtosDaCategoria = produtosDaCategoria.sort(() => Math.random() - 0.5);
      // fim
     

     const section = document.createElement("section");
     section.classList.add("categoria-section");
     section.id = cat.id;

     const container = document.createElement("div");
     container.classList.add("container");

     const titulo = document.createElement("h2");
     titulo.textContent = cat.nome;

     const slider = document.createElement("div");
slider.classList.add("slider");

const arrowLeft = document.createElement("button");
arrowLeft.className = "arrow left";
arrowLeft.innerHTML = "‹";

const arrowRight = document.createElement("button");
arrowRight.className = "arrow right";
arrowRight.innerHTML = "›";

const track = document.createElement("div");
track.classList.add("slider-track");

produtosDaCategoria.forEach(produto => {
  const card = criarCardProduto(produto);
  track.appendChild(card);
});

const dots = document.createElement("div");
dots.classList.add("slider-dots");

slider.appendChild(arrowLeft);
slider.appendChild(track);
slider.appendChild(arrowRight);

container.appendChild(titulo);
container.appendChild(slider);
container.appendChild(dots);
section.appendChild(container);
produtosContainer.appendChild(section);


// ===== BANNER INTERMEDIÁRIO (após esta categoria) =====
const bannersDestaCategoria = bannersIntermediarios.filter(
  b => b.afterCategory === cat.id
);

bannersDestaCategoria.forEach(banner => {
  const bannerSection = criarBannerIntermediario(banner);
  produtosContainer.appendChild(bannerSection);
});    

    
     
  });
}







// ============================================================
// CARD DE PRODUTO
// ============================================================

function criarCardProduto(produto, isBanner = false) {
  let quantidade = 1;

  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `produto-${produto.id}`;

  const cupom = obterCupomValido(produto);
const tagDesconto = (cupom && !cupom.ocultarTag)
  ? `<span class="badge-desconto">${cupom.mensagem}</span>`
  : '';

card.innerHTML = `
  ${produto.mostrarlancamento ? `<span class="badge-lancamento">Lançamento</span>` : ``}
  ${tagDesconto}
  <img src="${produto.imagem}" alt="${produto.nome}">
  
  <h3 class="card-titulo">${produto.nome}</h3>
  
  <span class="preco">${formatarPreco(produto.preco)}</span>
  ${produto.textoParcelamento ? `<span class="texto-parcelamento">${produto.textoParcelamento}</span>` : ``}

  <div class="card-acoes">
    
  <div class="quantidade">
    <button class="btn-menos">-</button>
    <span class="qtd">1</span>
    <button class="btn-mais">+</button>
  </div>

  <button class="btn-comprar">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M12 2a10 10 0 00-8.66 15l-1.32 4.83 4.95-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.12l-.3-.18-2.94.77.78-2.86-.2-.3A8 8 0 1112 20zm4.3-5.2c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.38.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.24 1.04.38 1.4.48.58.18 1.1.16 1.52.1.46-.06 1.43-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
  </svg>
  Comprar
</button>
</div>

<button class="btn-carrinho">
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
  Adicionar ao Carrinho
</button>

  `;

  // Elementos internos
  const btnDetalhes = card.querySelector(".btn-detalhes");
  const descricao = card.querySelector(".descricao");
  const btnMenos = card.querySelector(".btn-menos");
  const btnMais = card.querySelector(".btn-mais");
  const qtdSpan = card.querySelector(".qtd");
  const btnComprar = card.querySelector(".btn-comprar");
   

    // Quantidade
  btnMais.addEventListener("click", () => {
    quantidade++;
    qtdSpan.textContent = quantidade;
  });

  btnMenos.addEventListener("click", () => {
    if (quantidade > 1) {
      quantidade--;
      qtdSpan.textContent = quantidade;
    }
  });



   // ===== CARD CLICÁVEL (abre o produto) =====
card.style.cursor = "pointer";

card.addEventListener("click", (e) => {
  // Se clicou em algum botão de ação, não abre o produto
  if (
    e.target.closest(".btn-menos") ||
    e.target.closest(".btn-mais") ||
    e.target.closest(".btn-comprar") ||
    e.target.closest(".btn-carrinho") ||
    e.target.closest(".quantidade")
  ) {
    return;
  }

  window.location.href = `produto.html?id=${produto.id}`;
});
   

   

  // Comprar via WhatsApp
btnComprar.addEventListener("click", () => {
  const cupom = obterCupomValido(produto);

  if (cupom) {
    abrirModalCupom(produto, quantidade);
  } else {
    const valorUnitario = produto.preco;
    const valorTotal = valorUnitario * quantidade;
    const linkProduto = `${window.location.origin}${window.location.pathname}%23produto-${produto.id}`;

    const mensagem =
      `Olá! Gostaria de fazer um pedido:%0A%0A` +
      `Produto: ${produto.nome}%0A` +
      `Categoria: ${slugParaNomeCategoria(produto.categoria)}%0A` +
      `Quantidade: ${quantidade} unidade(s)%0A` +
      `Valor unitário: ${formatarPreco(valorUnitario)}%0A` +
      `Valor total: ${formatarPreco(valorTotal)}%0A%0A` +
      `Link do produto:%0A${linkProduto}`;

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
    window.open(url, "_blank");
  }
});


// Botão Adicionar ao Carrinho
const btnCarrinho = card.querySelector(".btn-carrinho");
if (btnCarrinho) {
  btnCarrinho.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Se já virou "Ver carrinho", só abre o carrinho
    if (btnCarrinho.classList.contains("btn-ver-carrinho")) {
      if (typeof openCart === "function") openCart();
      return;
    }

    // Primeiro clique: adiciona ao carrinho
    addToCart(produto, quantidade);

    btnCarrinho.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
      Ver carrinho
    `;
    btnCarrinho.classList.add("btn-ver-carrinho");
  });
}

// Ajustes visuais se for banner
if (isBanner) {
  card.style.minWidth = "220px";
}
return card;
}










let produtoComprarAtual = null;
let quantidadeComprarAtual = 1;

function abrirModalCupom(produto, quantidade) {
  produtoComprarAtual = produto;
  quantidadeComprarAtual = quantidade || 1;

  const modal = document.getElementById('modalCupomComprar');
  const input = document.getElementById('inputCupomComprar');
  const msg = document.getElementById('msgCupomComprar');

  if (input) input.value = '';
  if (msg) msg.textContent = '';
  if (modal) modal.style.display = 'flex';
}

function fecharModalCupom() {
  const modal = document.getElementById('modalCupomComprar');
  if (modal) modal.style.display = 'none';
  produtoComprarAtual = null;
}

function comprarSemCupom() {
  if (!produtoComprarAtual) return;
  enviarPedidoWhatsApp(produtoComprarAtual, quantidadeComprarAtual, null);
  fecharModalCupom();
}

function validarCupomComprar() {
  const input = document.getElementById('inputCupomComprar');
  const msg = document.getElementById('msgCupomComprar');
  const codigo = (input.value || '').trim().toUpperCase();

  if (!codigo) {
    msg.textContent = 'Digite o cupom.';
    msg.style.color = '#c1121f';
    return;
  }

  const cupom = obterCupomValido(produtoComprarAtual);
  if (!cupom || cupom.codigo !== codigo) {
    msg.textContent = 'Cupom inválido ou expirado para este produto.';
    msg.style.color = '#c1121f';
    return;
  }

  // Cupom válido
  enviarPedidoWhatsApp(produtoComprarAtual, quantidadeComprarAtual, cupom);
  fecharModalCupom();
}

function enviarPedidoWhatsApp(produto, quantidade, cupom) {
  const valorUnitario = produto.preco;
  const valorTotalOriginal = valorUnitario * quantidade;
  let valorFinal = valorTotalOriginal;
  let economia = 0;

  if (cupom) {
    economia = valorTotalOriginal * (cupom.porcentagem / 100);
    valorFinal = valorTotalOriginal - economia;
  }

  const basePath = window.location.pathname.split("/").slice(0, -1).join("/");
  const linkProduto = `${window.location.origin}${basePath}/produto.html?id=${produto.id}`;

  const cat = (window.categorias || []).find(c => c.id === produto.categoria);
  const nomeCategoria = cat ? cat.nome : produto.categoria;

  let mensagem = `Olá! Gostaria de fazer um pedido:%0A%0A`;
  mensagem += `Produto: ${produto.nome}%0A`;
  mensagem += `Categoria: ${nomeCategoria}%0A`;
  mensagem += `Quantidade: ${quantidade} unidade(s)%0A`;

  if (cupom) {
    mensagem += `Valor original: ${formatarPreco(valorTotalOriginal)}%0A`;
    mensagem += `Valor com desconto: ${formatarPreco(valorFinal)}%0A`;
    mensagem += `Cupom usado: *${cupom.codigo}*%0A`;
    mensagem += `Você economizou ${formatarPreco(economia)} nesta compra!%0A%0A`;
  } else {
    mensagem += `Valor total: ${formatarPreco(valorTotalOriginal)}%0A%0A`;
  }

  mensagem += `Link do produto:%0A${linkProduto}`;

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(url, "_blank");
}






// ============================================================
// FOOTER WHATSAPP
// ============================================================

whatsappFooter.href = `https://wa.me/${WHATSAPP_NUMERO}`;

// ============================================================
// INICIALIZAÇÃO
// ============================================================

renderBanner();
renderProdutos(produtos);

/* ============================================================
   MENU HAMBÚRGUER FLUTUANTE (MOBILE)
   ============================================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav");
const menuOverlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  navMenu.classList.add("active");
});

menuOverlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  
});

/* ============================================================
   FECHAR MENU AO CLICAR EM UMA CATEGORIA (MOBILE)
   ============================================================ */

document.addEventListener("click", function (e) {
  if (e.target.closest(".nav a")) {
    navMenu.classList.remove("active");
    
  }
});

/* ============================================================
   FECHAR MENU AO CLICAR FORA (MENU HAMBÚRGUER)
   ============================================================ */

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".nav");
  const botao = document.getElementById("menuToggle");

  const clicouNoMenu = menu.contains(event.target);
  const clicouNoBotao = botao.contains(event.target);

  if (!clicouNoMenu && !clicouNoBotao) {
    menu.classList.remove("active");
  }
});

// ============================================================
// SLIDER PROFISSIONAL (DESKTOP + MOBILE)
// ============================================================

document.querySelectorAll(".slider").forEach(slider => {
  const track = slider.querySelector(".slider-track");
  const left = slider.querySelector(".arrow.left");
  const right = slider.querySelector(".arrow.right");
  const dots = slider.parentElement.querySelector(".slider-dots");

  if (!track) return;

  const cards = [...track.children];
  const cardWidth = cards[0].offsetWidth + 16;

  const visible =
    window.innerWidth >= 1024 ? Math.min(4, cards.length) : 1;

  const pages = Math.ceil(cards.length / visible);
  let page = 0;


  /* dots */
  if (dots) {
    dots.innerHTML = "";
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dots.appendChild(dot);

      dot.onclick = () => {
        page = i;
        update();
      };
    }
  }

  function update() {
    track.scrollTo({
      left: page * cardWidth * visible,
      behavior: "smooth"
    });

    if (dots) {
      [...dots.children].forEach((d, i) =>
        d.classList.toggle("active", i === page)
      );
    }
  }

  left?.addEventListener("click", () => {
    page = Math.max(0, page - 1);
    update();
  });

  right?.addEventListener("click", () => {
    page = Math.min(pages - 1, page + 1);
    update();
  });

     /* ============================================================
     SINCRONIZA DOTS COM SCROLL NO MOBILE
     ============================================================ */

  if (window.innerWidth < 1024 && dots) {
    track.addEventListener("scroll", () => {
      const scrollLeft = track.scrollLeft;
      const newPage = Math.round(
        scrollLeft / (cardWidth * visible)
      );

      if (newPage !== page) {
        page = Math.min(Math.max(newPage, 0), pages - 1);

        [...dots.children].forEach((d, i) =>
          d.classList.toggle("active", i === page)
        );
      }
    });
  }

   
  update();
});

// ============================================================
// SLIDER DE PROPAGANDA AUTOMÁTICO + DOTS (COM RANDOM REAL)
// ============================================================

function inicializarAds() {
  const adsTrack = document.querySelector(".ads-track");
  const adsImages = document.querySelectorAll(".ads-track img");
  const adsDotsContainer = document.querySelector(".ads-dots");
  const progressBar = document.querySelector(".ads-progress-bar");

  if (!adsTrack || adsImages.length === 0) return;

  let adsIndex = Math.floor(Math.random() * adsImages.length);
  const adsInterval = 8000;

  // cria dots
  adsDotsContainer.innerHTML = "";
  adsImages.forEach((_, i) => {
    const dot = document.createElement("span");
    adsDotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      adsIndex = i;
      atualizarAds();
    });
  });

  const adsDots = adsDotsContainer.querySelectorAll("span");

   function iniciarProgresso() {
  if (!progressBar) return;

  progressBar.style.transition = "none";
  progressBar.style.width = "0%";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      progressBar.style.transition = `width ${adsInterval}ms linear`;
      progressBar.style.width = "100%";
    });
  });
}
  function atualizarAds() {
    adsTrack.style.transform = `translateX(-${adsIndex * 100}%)`;

    adsDots.forEach((dot, i) =>
      dot.classList.toggle("active", i === adsIndex)
    );

     iniciarProgresso(); // 🔥 AQUI a barra começa a crescer
  }

  function trocarSlideAds() {
    adsIndex = (adsIndex + 1) % adsImages.length;
    atualizarAds();
  }

  // 🔑 ESPERA AS IMAGENS CARREGAREM
  let carregadas = 0;

  adsImages.forEach(img => {
    if (img.complete) {
      carregadas++;
    } else {
      img.onload = () => {
        carregadas++;
        if (carregadas === adsImages.length) {
          atualizarAds(); // aplica random corretamente
        }
      };
    }
  });

  if (carregadas === adsImages.length) {
    atualizarAds();
  }

  setInterval(trocarSlideAds, adsInterval);
}

// inicia quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", inicializarAds);






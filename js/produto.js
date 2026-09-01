// ================================
// PÁGINA DE PRODUTO
// ================================

// pega o id da URL
const params = new URLSearchParams(window.location.search);
const produtoId = params.get("id");

// ID usado pelo sistema de avaliações
const produtoIdAtual = produtoId;

// URL do arquivo de avaliações
const REVIEWS_URL = '/js/reviews.json';

// busca o produto
const produto = produtos.find(p => p.id == produtoId);

if (!produto) {
  document.getElementById("produto-topo").innerHTML =
    "<p>Produto não encontrado.</p>";
} else {
  montarProduto(produto);
}

function montarProduto(produto) {

  // ----- TOPO DO PRODUTO -----
  document.getElementById("produto-topo").innerHTML = `


  
    <div class="produto-card">

      <div class="produto-imagem">
      
      ${produto.mostrarlancamento ? `
    <span class="badge-lancamento-produto">LANÇAMENTO</span>
  ` : ""}
        <img src="${produto.imagem}" alt="${produto.nome}">
        ${produto.mostrarVideo && produto.videos?.length ? `
          <button class="produto-video-btn" onclick="abrirVideo('${produto.videos[0]}')">
  <video
    src="${produto.videos[0]}"
    muted
    autoplay
    loop
    playsinline
  ></video>
  <span class="play-indicador">▶</span>
</button>
        ` : ""}
      </div>

     <div class="produto-info">

  <h1>${produto.nome}</h1>

  ${produto.descricao?.resumo ? `
  <p class="produto-resumo">
    ${produto.descricao.resumo}
  </p>
` : ""}

  <p class="produto-preco">
    R$ ${produto.preco.toFixed(2)}
  </p>

  <p class="produto-parcelamento">
    ${produto.textoParcelamento || ""}
  </p>

  <!-- AÇÕES: quantidade + comprar -->
  <div class="produto-acoes">

    <div class="produto-quantidade">
  <div class="produto-quantidade-anel">
    <button onclick="alterarQuantidade(-1)">−</button>
    <span id="quantidade">1</span>
    <button onclick="alterarQuantidade(1)">+</button>
  </div>
  </div>

    
<button class="btn-comprar">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M12 2a10 10 0 00-8.66 15l-1.32 4.83 4.95-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.12l-.3-.18-2.94.77.78-2.86-.2-.3A8 8 0 1112 20zm4.3-5.2c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.02-.38.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.24 1.04.38 1.4.48.58.18 1.1.16 1.52.1.46-.06 1.43-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
  </svg>
  Comprar
</button>


<button class="btn-carrinho">
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
  Adicionar ao Carrinho
</button>

  </div>

</div>



  `;


  // ===== LIGA OS BOTÕES DA PÁGINA DO PRODUTO =====
  const btnComprar = document.querySelector("#produto-topo .btn-comprar");
  const btnCarrinho = document.querySelector("#produto-topo .btn-carrinho");

  if (btnComprar) {
    btnComprar.addEventListener("click", () => {
      comprarProduto();
    });
  }

  if (btnCarrinho) {
    btnCarrinho.addEventListener("click", () => {
      adicionarAoCarrinhoProduto();
    });
  }


  

  // ----- DESCRIÇÃO COMPLETA -----
  document.getElementById("produto-descricao").innerHTML = `
    <section>
      <h2>O que é o produto?</h2>
      <p>${produto.descricao.oQueE}</p>
    </section>

    <section>
      <h2>Composição</h2>
      <p>${produto.descricao.composicao}</p>
    </section>

    <section>
      <h2>Como usar</h2>
      <p>${produto.descricao.comoUsar}</p>
    </section>

    <section>
      <h2>Advertências</h2>
      <p>${produto.descricao.advertencias}</p>
    </section>
  `;

    // ----- PRODUTOS RELACIONADOS -----
  renderProdutosRelacionados(produto);
  
}

// ================================
// MODAL DE VÍDEO
// ================================

function abrirVideo(src) {
  const modal = document.createElement("div");
  modal.className = "video-modal";

  modal.innerHTML = `
    <div class="video-content">
      <button class="video-close" aria-label="Fechar vídeo">✕</button>
      <video controls autoplay>
        <source src="${src}" type="video/mp4">
      </video>
    </div>
  `;

  document.body.appendChild(modal);

  const btnClose = modal.querySelector(".video-close");

  // 🔹 FECHAR PELO X
  btnClose.addEventListener("click", (e) => {
    e.stopPropagation(); // 🔥 impede conflito
    modal.remove();
  });

  // 🔹 FECHAR AO CLICAR FORA
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}



// ================================
// CONTROLE DE QUANTIDADE
// ================================

let quantidadeAtual = 1;

function alterarQuantidade(valor) {
  quantidadeAtual += valor;

  if (quantidadeAtual < 1) {
    quantidadeAtual = 1;
  }

  document.getElementById("quantidade").textContent = quantidadeAtual;
}

// ================================
// COMPRAR PRODUTO (WHATSAPP)
// ================================

function comprarProduto() {

  if (!produto) return;

  const valorUnitario = produto.preco;
  const quantidade = quantidadeAtual;
  const valorTotal = valorUnitario * quantidade;

  const basePath = window.location.pathname
  .split("/")
  .slice(0, -1)
  .join("/");

const linkProduto =
  `${window.location.origin}${basePath}/produto.html?id=${produto.id}`;


  const categoriaObj = categorias.find(
  c => c.id === produto.categoria
);

const nomeCategoria = categoriaObj
  ? categoriaObj.nome
  : produto.categoria;

  const mensagem =
    `Olá! Gostaria de fazer um pedido:%0A%0A` +
    `Produto: ${produto.nome}%0A` +
    `Categoria: ${nomeCategoria}%0A` +
    `Quantidade: ${quantidade} unidade(s)%0A` +
    `Valor unitário: ${formatarPreco(valorUnitario)}%0A` +
    `Valor total: ${formatarPreco(valorTotal)}%0A%0A` +
    `Link do produto:%0A${linkProduto}`;

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(url, "_blank");
}

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}


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


// ================================
// ADICIONAR AO CARRINHO (PÁGINA PRODUTO)
// ================================
function adicionarAoCarrinhoProduto() {
  if (!produto) return;

  if (typeof addToCart === "function") {
    addToCart(produto, quantidadeAtual);
  }

  // Muda o botão para "Ver carrinho" com ícone
  const btn = document.querySelector(".produto-info .btn-carrinho");
  if (btn) {
    btn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
      Ver carrinho
    `;
    btn.classList.add("btn-ver-carrinho");

    btn.onclick = (e) => {
      e.preventDefault();
      if (typeof openCart === "function") openCart();
    };
  }
}





 //================================
// PRODUTOS RELACIONADOS (MESMA CATEGORIA) - IGUAL À HOME
// ================================

function renderProdutosRelacionados(produtoAtual) {
  const section = document.getElementById("produtos-relacionados");
  const track = document.getElementById("relacionados-track");
  const dotsContainer = document.getElementById("relacionados-dots");
  const titulo = document.getElementById("titulo-relacionados");

  if (!section || !track || !produtoAtual) return;

  // Filtra os outros produtos da mesma categoria
  const relacionados = produtos.filter(p =>
    p.categoria === produtoAtual.categoria && p.id !== produtoAtual.id
  );

  if (relacionados.length === 0) {
    section.style.display = "none";
    return;
  }

  // Título com nome da categoria
  const categoriaObj = categorias.find(c => c.id === produtoAtual.categoria);
  if (categoriaObj) {
    titulo.textContent = `Outros produtos de ${categoriaObj.nomeMenu || categoriaObj.nome}`;
  }

  // Limpa
  track.innerHTML = "";
  if (dotsContainer) dotsContainer.innerHTML = "";

  // Cria os cards (mesma estrutura da home)
  relacionados.forEach(produto => {
    const card = criarCardRelacionado(produto);
    track.appendChild(card);
  });

  section.style.display = "block";

  // Inicializa o slider (mesma lógica da home)
  inicializarSliderRelacionados(section);
}

// Cria o card igual ao da home
function criarCardRelacionado(produto) {
  let quantidade = 1;

  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `produto-${produto.id}`;

  card.innerHTML = `
    ${produto.mostrarlancamento ? `<span class="badge-lancamento">Lançamento</span>` : ``}
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

  // Quantidade
  const btnMenos = card.querySelector(".btn-menos");
  const btnMais = card.querySelector(".btn-mais");
  const qtdSpan = card.querySelector(".qtd");
  const btnComprar = card.querySelector(".btn-comprar");
  const btnCarrinho = card.querySelector(".btn-carrinho");

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
    const valorUnitario = produto.preco;
    const valorTotal = valorUnitario * quantidade;

    const basePath = window.location.pathname.split("/").slice(0, -1).join("/");
    const linkProduto = `${window.location.origin}${basePath}/produto.html?id=${produto.id}`;

    const cat = categorias.find(c => c.id === produto.categoria);
    const nomeCategoria = cat ? cat.nome : produto.categoria;

    const mensagem =
      `Olá! Gostaria de fazer um pedido:%0A%0A` +
      `Produto: ${produto.nome}%0A` +
      `Categoria: ${nomeCategoria}%0A` +
      `Quantidade: ${quantidade} unidade(s)%0A` +
      `Valor unitário: ${formatarPreco(valorUnitario)}%0A` +
      `Valor total: ${formatarPreco(valorTotal)}%0A%0A` +
      `Link do produto:%0A${linkProduto}`;

    window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`, "_blank");
  });

  // Inserir no carrinho
  if (btnCarrinho) {
  btnCarrinho.addEventListener("click", () => {
    if (typeof addToCart === "function") {
      addToCart(produto, quantidade);
    }

    
   // Transforma o botão em "Ver carrinho" com ícone
btnCarrinho.innerHTML = `
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
  Ver carrinho
`;
btnCarrinho.classList.add("btn-ver-carrinho");

// Ao clicar, abre o carrinho
btnCarrinho.onclick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (typeof openCart === "function") {
    openCart();
  }
};
  });
}

  return card;
}

// Inicializa o slider exatamente igual à home
function inicializarSliderRelacionados(section) {
  const slider = section.querySelector(".slider");
  if (!slider) return;

  const track = slider.querySelector(".slider-track");
  const left = slider.querySelector(".arrow.left");
  const right = slider.querySelector(".arrow.right");
  const dots = section.querySelector(".slider-dots");

  if (!track) return;

  const cards = [...track.children];
  if (cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth + 16;
  const visible = window.innerWidth >= 1024 ? Math.min(4, cards.length) : 1;
  const pages = Math.ceil(cards.length / visible);
  let page = 0;

  // Dots
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

  // Sincroniza dots com scroll no mobile
  if (window.innerWidth < 1024 && dots) {
    track.addEventListener("scroll", () => {
      const scrollLeft = track.scrollLeft;
      const newPage = Math.round(scrollLeft / (cardWidth * visible));

      if (newPage !== page) {
        page = Math.min(Math.max(newPage, 0), pages - 1);
        [...dots.children].forEach((d, i) =>
          d.classList.toggle("active", i === page)
        );
      }
    });
  }

  update();
}






// ============================================================
// ESCAPE PRDOUTO ID
// ============================================================

function escapeHtmlProduto(texto) {

  const div =
    document.createElement('div');

  div.textContent =
    texto || '';

  return div.innerHTML;

}


// ============================================================
// AVALIAÇÕES DO PRODUTO
// ============================================================

let avaliacoesProdutoAtual = [];

let paginaAvaliacoesAtual = 0;


// ============================================================
// QUANTIDADE DE CARDS VISÍVEIS
// ============================================================

function quantidadeAvaliacoesVisiveis() {

  if (window.innerWidth <= 768) {
    return 1;
  }

  if (window.innerWidth <= 1024) {
    return 2;
  }

  return 3;
}


// ============================================================
// CARREGAR AVALIAÇÕES
// ============================================================

function carregarAvaliacoesProduto() {

  const track =
    document.querySelector(
      '#testimonials .tc-track'
    );

  const dots =
    document.querySelector(
      '#testimonials .tc-dots'
    );

  if (!track || !dots) {
    return;
  }


  fetch(REVIEWS_URL)

    .then(response => {

      if (!response.ok) {

        throw new Error(
          'Não foi possível carregar as avaliações.'
        );

      }

      return response.json();

    })

    .then(avaliacoes => {

      const avaliacoesDoProduto =
        avaliacoes.filter(avaliacao => {

          return String(
            avaliacao.produtoId
          ) === String(
            produtoIdAtual
          );

        });


      avaliacoesProdutoAtual =
        avaliacoesDoProduto;


      paginaAvaliacoesAtual = 0;


      atualizarResumoAvaliacoes(
        avaliacoesDoProduto
      );


      montarCarrosselAvaliacoes(
        avaliacoesDoProduto
      );

    })

    .catch(error => {

      console.error(
        'Erro ao carregar avaliações:',
        error
      );

    });

}


// ============================================================
// RESUMO DAS AVALIAÇÕES
// ============================================================

function atualizarResumoAvaliacoes(
  avaliacoes
) {

  const resumo =
    document.getElementById(
      'avaliacoes-resumo'
    );

  const media =
    document.getElementById(
      'avaliacoes-media'
    );

  const total =
    document.getElementById(
      'avaliacoes-total'
    );


  if (!resumo || !media || !total) {
    return;
  }


  if (!avaliacoes.length) {

    resumo.style.display = 'none';

    return;

  }


  const soma =
    avaliacoes.reduce(
      (total, avaliacao) => {

        return total +
          (Number(avaliacao.nota) || 0);

      },
      0
    );


  const mediaCalculada =
    soma / avaliacoes.length;


  media.textContent =
    mediaCalculada.toFixed(1)
      .replace('.', ',');


  total.textContent =
    avaliacoes.length === 1
      ? '1 avaliação'
      : `${avaliacoes.length} avaliações`;


  resumo.style.display =
    'flex';

}


// ============================================================
// MONTAR CARROSSEL
// ============================================================

function montarCarrosselAvaliacoes(
  avaliacoes
) {

  const track =
    document.querySelector(
      '#testimonials .tc-track'
    );

  const dots =
    document.querySelector(
      '#testimonials .tc-dots'
    );

  const prev =
    document.querySelector(
      '#testimonials .tc-prev'
    );

  const next =
    document.querySelector(
      '#testimonials .tc-next'
    );


  if (!track || !dots) {
    return;
  }


  track.innerHTML = '';
  dots.innerHTML = '';


  // ==========================================================
  // SEM AVALIAÇÕES
  // ==========================================================

  if (!avaliacoes.length) {

    track.innerHTML = `

      <div class="tc-slide active">

        <div class="review-empty">

          <div class="review-empty-icon">
            ☆
          </div>

          <h3 class="review-empty-title">
            Este produto ainda não possui avaliações
          </h3>

          <p class="review-empty-text">
            Seja o primeiro a compartilhar
            sua experiência com este produto.
          </p>

        </div>

      </div>

    `;


    if (prev) {
      prev.style.display = 'none';
    }

    if (next) {
      next.style.display = 'none';
    }


    return;

  }


  // ==========================================================
  // QUANTIDADE VISÍVEL
  // ==========================================================

  const visiveis =
    quantidadeAvaliacoesVisiveis();


  // ==========================================================
  // DIVIDE AS AVALIAÇÕES EM PÁGINAS
  // ==========================================================

  const paginas = [];

  for (
    let i = 0;
    i < avaliacoes.length;
    i += visiveis
  ) {

    paginas.push(
      avaliacoes.slice(
        i,
        i + visiveis
      )
    );

  }


  // ==========================================================
  // CRIA AS PÁGINAS
  // ==========================================================

  paginas.forEach(
    (pagina, paginaIndex) => {

      const slide =
        document.createElement(
          'div'
        );


      slide.className =
        'tc-slide';


      if (
        paginaIndex ===
        paginaAvaliacoesAtual
      ) {

        slide.classList.add(
          'active'
        );

      }


      const paginaGrid =
        document.createElement(
          'div'
        );


      paginaGrid.className =
        'reviews-page';


      // ======================================================
      // CARDS
      // ======================================================

      pagina.forEach(
        avaliacao => {

          const nota =
            Math.max(
              0,
              Math.min(
                5,
                Number(
                  avaliacao.nota
                ) || 0
              )
            );


          const estrelas =
            '★'.repeat(nota) +
            '☆'.repeat(5 - nota);


          const nome =
            avaliacao.nome ||
            'Cliente';


          const comentario =
            avaliacao.comentario ||
            '';


          const card =
            document.createElement(
              'div'
            );


          card.className =
            'review-card';


          card.innerHTML = `

            <div class="review-header">

              <div class="review-avatar">

                ${escapeHtmlProduto(
                  nome
                    .charAt(0)
                    .toUpperCase()
                )}

              </div>


              <div class="review-user">

                <h3>
                  ${escapeHtmlProduto(
                    nome
                  )}
                </h3>

              </div>

            </div>


            <div class="stars">
              ${estrelas}
            </div>


            <p class="review-text">
              "${escapeHtmlProduto(
                comentario
              )}"
            </p>

          `;


          paginaGrid.appendChild(
            card
          );

        }
      );


      slide.appendChild(
        paginaGrid
      );


      track.appendChild(
        slide
      );


      // ======================================================
      // DOT
      // ======================================================

      const dot =
        document.createElement(
          'span'
        );


      dot.className =
        'tc-dot';


      if (
        paginaIndex ===
        paginaAvaliacoesAtual
      ) {

        dot.classList.add(
          'active'
        );

      }


      dot.addEventListener(
        'click',
        () => {

          paginaAvaliacoesAtual =
            paginaIndex;

          atualizarPaginaAvaliacoes();

        }
      );


      dots.appendChild(
        dot
      );

    }
  );


  // ==========================================================
  // MOSTRAR / ESCONDER SETAS
  // ==========================================================

  if (paginas.length <= 1) {

    if (prev) {
      prev.style.display =
        'none';
    }

    if (next) {
      next.style.display =
        'none';
    }

  } else {

    if (prev) {
      prev.style.display =
        'flex';
    }

    if (next) {
      next.style.display =
        'flex';
    }

  }


  // ==========================================================
  // BOTÃO ANTERIOR
  // ==========================================================

  if (prev) {

    prev.onclick = () => {

      paginaAvaliacoesAtual--;

      if (
        paginaAvaliacoesAtual < 0
      ) {

        paginaAvaliacoesAtual =
          paginas.length - 1;

      }


      atualizarPaginaAvaliacoes();

    };

  }


  // ==========================================================
  // BOTÃO PRÓXIMO
  // ==========================================================

  if (next) {

    next.onclick = () => {

      paginaAvaliacoesAtual++;

      if (
        paginaAvaliacoesAtual >=
        paginas.length
      ) {

        paginaAvaliacoesAtual = 0;

      }


      atualizarPaginaAvaliacoes();

    };

  }


}


// ============================================================
// ATUALIZAR PÁGINA DO CARROSSEL
// ============================================================

function atualizarPaginaAvaliacoes() {

  const slides =
    document.querySelectorAll(
      '#testimonials .tc-slide'
    );

  const dots =
    document.querySelectorAll(
      '#testimonials .tc-dot'
    );


  slides.forEach(
    (slide, index) => {

      slide.classList.toggle(
        'active',
        index ===
        paginaAvaliacoesAtual
      );

    }
  );


  dots.forEach(
    (dot, index) => {

      dot.classList.toggle(
        'active',
        index ===
        paginaAvaliacoesAtual
      );

    }
  );

}


// ============================================================
// REAJUSTAR NO REDIMENSIONAMENTO
// ============================================================

let resizeAvaliacoesTimer;


window.addEventListener(
  'resize',
  () => {

    clearTimeout(
      resizeAvaliacoesTimer
    );


    resizeAvaliacoesTimer =
      setTimeout(
        () => {

          if (
            avaliacoesProdutoAtual.length
          ) {

            paginaAvaliacoesAtual =
              0;

            montarCarrosselAvaliacoes(
              avaliacoesProdutoAtual
            );

          }

        },
        250
      );

  }
);


// ============================================================
// BOTÃO DEIXAR AVALIAÇÃO
// ============================================================

function abrirFormularioAvaliacao() {

  // O ID do produto precisa existir
  if (!produtoIdAtual) {
    alert('Não foi possível identificar o produto.');
    return;
  }

  // Mantém o ID explicitamente na URL
  const url =
    'depoimentos.html?page=app&produtoId=' +
    encodeURIComponent(produtoIdAtual);

  window.location.href = url;
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================

document.addEventListener(
  'DOMContentLoaded',
  function() {

    const botao =
      document.getElementById(
        'btn-deixar-avaliacao'
      );


    if (botao) {

      botao.addEventListener(
        'click',
        abrirFormularioAvaliacao
      );

    }


    carregarAvaliacoesProduto();

  }
);





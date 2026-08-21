// ================================
// PÁGINA DE PRODUTO
// ================================

// pega o id da URL
const params = new URLSearchParams(window.location.search);
const produtoId = params.get("id");

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

    <button class="btn-comprar" onclick="comprarProduto()">
  Comprar
</button>


<button class="btn-carrinho" onclick="adicionarAoCarrinhoProduto()">
  Inserir no carrinho
</button>

  </div>

</div>



  `;

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
}










// ================================
// PRODUTOS RELACIONADOS (MESMA CATEGORIA)
// ================================

function renderProdutosRelacionados(produtoAtual) {
  const section = document.getElementById("produtos-relacionados");
  const container = document.getElementById("relacionados-container");
  const titulo = document.getElementById("titulo-relacionados");

  if (!section || !container || !produtoAtual) return;

  // Filtra os outros produtos da mesma categoria
  const relacionados = produtos.filter(p => 
    p.categoria === produtoAtual.categoria && p.id !== produtoAtual.id
  );

  // Se não tiver nenhum outro produto, esconde a seção
  if (relacionados.length === 0) {
    section.style.display = "none";
    return;
  }

  // Atualiza o título com o nome da categoria
  const categoriaObj = categorias.find(c => c.id === produtoAtual.categoria);
  if (categoriaObj) {
    titulo.textContent = `Outros produtos de ${categoriaObj.nomeMenu || categoriaObj.nome}`;
  }

  // Limpa o container
  container.innerHTML = "";

  // Cria os cards
  relacionados.forEach(produto => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `produto-${produto.id}`;

    card.innerHTML = `
      ${produto.mostrarlancamento ? `<span class="badge-lancamento">Lançamento</span>` : ``}
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <a href="produto.html?id=${produto.id}" class="btn-detalhes">Ver produto</a>
      <span class="preco">${formatarPreco(produto.preco)}</span>
      ${produto.textoParcelamento ? `<span class="texto-parcelamento">${produto.textoParcelamento}</span>` : ``}

      <div class="card-acoes">
        <div class="quantidade">
          <button class="btn-menos">-</button>
          <span class="qtd">1</span>
          <button class="btn-mais">+</button>
        </div>
        <button class="btn-comprar">Comprar</button>
      </div>

      <button class="btn-carrinho">Inserir no carrinho</button>
    `;

    // Lógica de quantidade
    let quantidade = 1;
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

    // Botão Comprar (WhatsApp)
    btnComprar.addEventListener("click", () => {
      const valorUnitario = produto.preco;
      const valorTotal = valorUnitario * quantidade;

      const basePath = window.location.pathname.split("/").slice(0, -1).join("/");
      const linkProduto = `${window.location.origin}${basePath}/produto.html?id=${produto.id}`;

      const categoriaObj = categorias.find(c => c.id === produto.categoria);
      const nomeCategoria = categoriaObj ? categoriaObj.nome : produto.categoria;

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
    });

    // Botão Inserir no Carrinho
    if (btnCarrinho) {
      btnCarrinho.addEventListener("click", () => {
        if (typeof addToCart === "function") {
          addToCart(produto, quantidade);
        }
      });
    }

    container.appendChild(card);
  });

  // Mostra a seção
  section.style.display = "block";
}












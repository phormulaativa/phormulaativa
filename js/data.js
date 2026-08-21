/* ============================================================
   CONFIGURAÇÕES GERAIS
   ============================================================ */
// Número fixo do WhatsApp da farmácia (formato internacional, sem +)
// Gerado automaticamente a partir da planilha Google Sheets
const WHATSAPP_NUMERO = "5518997033495";

/* ============================================================
   CATEGORIAS
   ============================================================ */
const categorias = [
  {
    id: "inicio",
    nome: "#",
    nomeMenu: "Início",
    mostrarNoMenu: true
  },
  {
    id: "emagrecimento",
    nome: "Manipulados para emagrecimento",
    nomeMenu: "Emagrecimento",
    mostrarNoMenu: true
  },
  {
    id: "desempenhofisico",
    nome: "Manipulados para desempenho físico",
    nomeMenu: "Desempenho físico",
    mostrarNoMenu: true
  },
  {
    id: "saude",
    nome: "Manipulados para saúde e bem-estar",
    nomeMenu: "Saúde",
    mostrarNoMenu: true
  },
  {
    id: "quedacapilar",
    nome: "Manipulados para queda capilar",
    nomeMenu: "Queda Capilar",
    mostrarNoMenu: false
  },
  {
    id: "libido",
    nome: "Manipulados para libido",
    nomeMenu: "Libido",
    mostrarNoMenu: false
  },
  {
    id: "beleza",
    nome: "Manipulados para beleza",
    nomeMenu: "Beleza",
    mostrarNoMenu: false
  }
];

/* ============================================================
   PRODUTOS
   ============================================================ */
const produtos = [
  {
    id: "1",
    nome: "Termogênico Abelhinha 30 Cápsulas",
    categoria: "emagrecimento",
    preco: 110.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Potencialize a <strong>queima calórica</strong> e facilite o emagrecimento com o Termogênico Abelhinha!",
      oQueE: `O Termogênico Abelhinha é um suplemento especialmente formulado para quem deseja acelerar a queima de gordura e potencializar os resultados dos treinos. Cada cápsula combina ingredientes termogênicos de alta qualidade, cientificamente comprovados para maximizar a queima calórica e promover o emagrecimento: <br>

Goma Guar: Ajuda a promover a sensação de saciedade, reduzindo a ingestão calórica e auxiliando no controle do peso.<br>
Cafeína: Um potente estimulante que acelera o metabolismo, aumenta a energia e melhora o foco, permitindo treinos mais intensos e eficazes.<br>
Chá Verde: Rico em antioxidantes, auxilia na queima de gordura e melhora a saúde geral.<br>
Capsiate: Conhecido por aumentar a termogênese e a queima calórica, mesmo em repouso.<br>
Ioimbina HCL:  Vasodilator, melhora a circulação local adjuvante no tratamento da celulite consequentemente eficaz na redução de gordura localizada.<br>
Picolinato de Cromo: Ajuda a controlar os níveis de glicose no sangue, reduzindo a vontade de comer doces e promovendo o emagrecimento.<br>
<br>
Formulado com uma combinação poderosa de ingredientes naturais, o Termogênico Abelhinha foi desenvolvido para acelerar o metabolismo, promover a queima de gordura e facilitar o processo de emagrecimento. Entre os principais benefícios observados pelos consumidores, destacam-se:<br>
<br>
Aceleração do Metabolismo e Queima de Gordura:<br>

Ingredientes como Cafeína e Capsiate são conhecidos por aumentar a termogênese, ajudando a acelerar o metabolismo e promover a queima de calorias, mesmo em repouso.<br>
<br>
Energia e Foco para Treinos Intensos:<br>

O Chá Verde e a Ioimbina HCL são eficazes em proporcionar energia extra e foco mental, permitindo que você treine com mais intensidade e maximize seus resultados.<br>
<br>
Redução de Apetite e Controle de Peso:
<br>
O Picolinato de Cromo auxilia na regulação dos níveis de glicose no sangue, o que pode ajudar a controlar o apetite e reduzir os desejos por doces, facilitando o controle do peso.<br>`,
      composicao: "Cada 1 cápsula contém:<br>
Goma Guar 250mg, Cafeína, 105mg, Chá Verde 90mg, Capsiate 2mg, Ioimbina HCL 2mg, Picolinato de Cromo 200mcg.",
      comoUsar: "Para resultados eficazes, recomenda-se o uso contínuo com a ingestão de 4 cápsulas ao dia. Siga o passo a passo para maximizar os benefícios: <br>
Uso Diário: Tome 4 cápsulas do Termogênico Abelhinha com água, ajustando o horário de acordo com sua rotina de treinos: <br>
Caso treine no período da tarde: 2 cápsulas pela manhã e 2 cápsulas antes do treino. <br>
Caso treine no período da manhã: 2 cápsulas antes do treino e 2 cápsulas antes do café da manhã. <br>
Para treinos mais intensos: Tomar as 4 cápsulas antes do treino. <br>
Consistência: Use diariamente para garantir uma ação constante na queima de calorias, aceleração do metabolismo e melhora do desempenho físico. <br>
Acompanhe os Resultados: Com o uso contínuo, você começará a perceber melhorias na definição corporal, aumento da energia e foco durante os treinos.<br>",
      advertencias: "A Goma Guar não deve ser utilizada em pacientes com distúrbios esofágicos e/ou com obstrução intestinal. Não é recomendada a ingestão de doses superiores a 420mg de cafeína ao dia. Este produto é contra indicado para pacientes que sofram de úlcera, doenças renais ou cardíacas, não é recomendado seu uso concomitante com anti-hipertensivo, tranquilizantes e antidepressivos. É contra indicado para pessoas que sofram de insônia e hepatopatas. O capsicum pode interferir com inibidores da MAO e com drogas anti-hipertensivas (pelo aumento da secreção catecolaminergica). Também pode aumentar o metabolismo de determinadas drogas a nível hepático, e se tem observado um aumento da atividade das enzimas G6PD e lipoproteína lípase. Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. Imagens meramente ilustrativas. Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC). Proteger da luz, do calor e da umidade. Nestas condições, o produto se manterá próprio para o consumo, respeitando o prazo de validade indicado na embalagem. Manter fora do alcance das crianças. Nunca compre um produto sem orientação de um profissional habilitado. Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. Siga corretamente o modo de usar. Não desaparecendo os sintomas, procure orientação médica. O uso do produto durante o período de amamentação também não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica. SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia."
    },
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 110,00"
  },
  {
    id: "2",
    nome: "Emagrecimento1",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "3",
    nome: "Emagrecimento2",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "4",
    nome: "Emagrecimento3",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "5",
    nome: "Emagrecimento4",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "6",
    nome: "Emagrecimento5",
    categoria: "emagrecimento",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "7",
    nome: "Desempenho Físico",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "8",
    nome: "Desempenho Físico1",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: false,
    mostrarlancamento: true,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "9",
    nome: "Desempenho Físico2",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "10",
    nome: "Desempenho Físico3",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "11",
    nome: "Desempenho Físico4",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "12",
    nome: "Desempenho Físico5",
    categoria: "desempenhofisico",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "13",
    nome: "Saúde",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "14",
    nome: "Saúde1",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "15",
    nome: "Saúde2",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "16",
    nome: "Saúde3",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: true,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  },
  {
    id: "17",
    nome: "Saúde4",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/imgpoteteste.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: "Deseja melhorar o humor e dormir de forma tranquila?",
      oQueE: `O 5-HTP é um precursor da serotonina...`,
      composicao: "5-Hidroxitriptofano 50mg...",
      comoUsar: "Tomar 1 cápsula antes de dormir...",
      advertencias: "Não utilizar sem orientação profissional..."
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 90,00"
  }
];

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

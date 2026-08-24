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
  },
  {
    id: "podologia",
    nome: "Manipulados para podologia",
    nomeMenu: "Podologia",
    mostrarNoMenu: true
  }
];

/* ============================================================
   PRODUTOS
   ============================================================ */
const produtos = [
  
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
  },
  {
    id: "18",
    nome: "Ácido Tricloroacético 90% em solução de 10 mL",
    categoria: "podologia",
    preco: 40.00,
    imagem: "assets/img/AcidoTricloroacetico90emsoluçãode10mL.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Desenvolvido para uso exclusivamente profissional em procedimentos podológicos.</p>",
      oQueE: `<p>O Ácido Tricloroacético 90% é uma solução de alta concentração destinada ao uso profissional em procedimentos podológicos. Sua formulação apresenta Ácido Tricloroacético como componente ativo, associado a veículo em solução de 10 mL, sendo um produto que exige manipulação cuidadosa e aplicação realizada por profissional capacitado.</p> <p>Sua finalidade é atender ao uso profissional em procedimentos podológicos nos quais o Ácido Tricloroacético esteja indicado, sempre de acordo com as orientações do fabricante e os protocolos aplicáveis ao procedimento. Por sua elevada concentração, a utilização requer atenção especial às medidas de segurança.</p> <p>É recomendado para profissionais habilitados e capacitados para a realização de procedimentos podológicos nos quais sua utilização seja apropriada. Não é indicado para uso doméstico ou aplicação por pessoas sem treinamento profissional adequado.</p>`,
      composicao: "<ul> <li>Ácido Tricloroacético — 90%</li> <li>Veículo — 10 mL</li> </ul> <p><strong>Apresentação:</strong> Solução 10 mL.</p>",
      comoUsar: "<p>Utilizar exclusivamente conforme as instruções constantes na embalagem e na rotulagem do produto, seguindo as orientações do fabricante e os protocolos profissionais aplicáveis. A utilização deve ser realizada por profissional habilitado e capacitado, observando rigorosamente as medidas de segurança recomendadas para a manipulação e aplicação do produto.</p>",
      advertencias: "<p>Produto de uso exclusivamente profissional. Devido à alta concentração do Ácido Tricloroacético, sua manipulação e utilização requerem conhecimento técnico, atenção às orientações do fabricante e adoção das medidas de proteção e segurança aplicáveis ao procedimento. Manter fora do alcance de pessoas não autorizadas e utilizar somente conforme as informações fornecidas pelo fabricante e os protocolos profissionais pertinentes.</p> <p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R$ 40,00"
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

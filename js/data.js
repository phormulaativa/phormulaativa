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
    id: "podologia",
    nome: "Manipulados para podologia",
    nomeMenu: "Podologia",
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
    nome: "Ácido Tricloroacético 90% em solução de 10ml",
    categoria: "podologia",
    preco: 40.00,
    imagem: "assets/img/AcidoTricloroacetico90emsoluçãode10mL.png",
    videos: [
      
    ],
    descricao: {
      resumo: "Ácido Tricloroacético 90% em solução de 10ml, desenvolvido para <strong>uso profissional em procedimentos podológicos</strong>, com formulação de alta concentração para utilização conforme as orientações do fabricante e do profissional habilitado.</p>",
      oQueE: `<p>O Ácido Tricloroacético 90% é uma solução de <strong>alta concentração</strong> destinada ao uso profissional em procedimentos podológicos. Sua composição é apresentada de forma objetiva, com 90% de Ácido Tricloroacético e veículo, em uma apresentação prática de 10ml.</p> <p>O produto é indicado para <strong>uso profissional em procedimentos podológicos</strong>, sendo uma opção para profissionais que necessitam utilizar uma solução de Ácido Tricloroacético 90% de acordo com sua finalidade e com as orientações aplicáveis ao procedimento.</p> <p>É destinado a <strong>profissionais habilitados</strong> para sua utilização em procedimentos podológicos, respeitando as orientações presentes na embalagem, na rotulagem e as recomendações do fabricante.</p>`,
      composicao: "<ul> <li>Ácido Tricloroacético — 90%</li> <li>Veículo — 10ml</li> </ul> <p><strong>Apresentação:</strong> Solução 10ml — Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante</strong> presentes na embalagem e na rotulagem. Quando aplicável, sua utilização deverá seguir a orientação de médico ou profissional de saúde habilitado, especialmente em procedimentos que exijam avaliação e conhecimento técnico específico.</p>",
      advertencias: "<p>Produto destinado a <strong>uso profissional</strong>. Leia atentamente as informações fornecidas pelo fabricante na embalagem e na rotulagem antes da utilização. Em caso de dúvidas sobre a utilização adequada, procure orientação de médico ou profissional de saúde habilitado.</p> <p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia."
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 40,00"
  },
  {
    id: "19",
    nome: "Fórmula Antimicose Completa",
    categoria: "podologia",
    preco: 40.00,
    imagem: "assets/img/FormulaAntimicoseCompleta.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A Fórmula Antimicose Completa é uma solução desenvolvida para auxiliar no cuidado e tratamento de fungos e micoses, reunindo diferentes componentes em uma formulação de uso tópico.</p>",
      oQueE: `<p>A <strong>Fórmula Antimicose Completa</strong> é uma solução de uso tópico formulada com ácido undecilênico, terbinafina, clotrimazol e extrato glicólico de própolis.</p><p>É destinada a <strong>auxiliar no tratamento de fungos e micoses</strong>, oferecendo uma formulação que reúne diferentes componentes tradicionalmente utilizados em produtos destinados ao cuidado de alterações fúngicas da pele.</p><p>Pode ser indicada para pessoas que necessitam de um produto de uso tópico para auxiliar no cuidado de áreas afetadas por fungos ou micoses, devendo sua utilização observar as orientações do fabricante ou de um profissional de saúde.</p>`,
      composicao: "<ul> <li>ACIDO UNDECILENICO — 20%</li> <li>TERBINAFINA CLORIDRATO — 2%</li> <li>CLOTRIMAZOL — 1%</li> <li>EXTRATO GLICOLICO PROPOLIS — 5%</li> <li>PROPILENOGLICOL — 10ML</li> </ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional de saúde. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 40,00"
  },
  {
    id: "20",
    nome: "Ácido Nítrico 65%",
    categoria: "podologia",
    preco: 50.00,
    imagem: "assets/img/acidonitrico65.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Ácido Nítrico 65% é uma solução de uso <strong>exclusivamente profissional podológico</strong>, destinada a aplicações realizadas por profissionais devidamente habilitados e conforme orientação técnica.</p>",
      oQueE: `<p>O <strong>Ácido Nítrico 65%</strong> é uma solução formulada à base de ácido nítrico fumegante, destinada ao uso profissional no contexto podológico.</p><p>O produto é destinado ao <strong>uso profissional podológico</strong>, devendo sua aplicação ser realizada de acordo com as orientações técnicas e os procedimentos adequados ao uso do produto.</p><p>É recomendado <strong>exclusivamente para profissionais habilitados</strong> que tenham conhecimento técnico para sua utilização no contexto podológico, observando as orientações do fabricante.</p>`,
      composicao: "<ul> <li>ACIDO NITRICO FUMEGANTE — 65%</li> <li>VEICULO — 10ML</li> </ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Produto destinado a <strong>uso profissional podológico</strong>. Utilize somente conforme as instruções do fabricante e orientação de profissional devidamente habilitado. Não utilize ou aplique o produto fora das condições e procedimentos recomendados pelo fabricante.</p>",
      advertencias: "<p>Produto de uso profissional. Manuseie e utilize somente conforme as orientações do fabricante e os procedimentos técnicos aplicáveis ao uso profissional. Mantenha o produto fora do alcance de crianças e em condições adequadas de armazenamento.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 50,00"
  },
  {
    id: "21",
    nome: "Aloe Vera Reparador",
    categoria: "podologia",
    preco: 50.00,
    imagem: "assets/img/AloeVeraReparador.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Aloe Vera Reparador é uma solução desenvolvida para <strong>auxiliar na hidratação e regeneração da pele</strong>, proporcionando cuidado tópico em uma formulação com extrato de Aloe Vera.</p>",
      oQueE: `<p>O <strong>Aloe Vera Reparador</strong> é uma solução de uso tópico formulada com extrato de Aloe Vera, ATA e veículo, destinada ao cuidado da pele.</p><p>Sua finalidade é <strong>auxiliar na hidratação e regeneração da pele</strong>, contribuindo para os cuidados necessários em áreas que demandam atenção e manutenção da condição da pele.</p><p>Pode ser indicado para pessoas que buscam um produto destinado ao <strong>cuidado e hidratação da pele</strong>, observando sempre as orientações do fabricante ou de um profissional de saúde.</p>`,
      composicao: "<ul> <li>EXTRATO ALOE VERA — 1GR</li> <li>ATA — 6GR</li> <li>VEICULO — 10ML</li> </ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional de saúde. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R\$ 50,00"
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

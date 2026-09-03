/* ============================================================
   CONFIGURACOES GERAIS
   ============================================================ */
// Gerado automaticamente a partir da planilha Google Sheets
const WHATSAPP_NUMERO = "5518997033495";

const cupomSite = {
  "ativo": false,
  "porcentagem": 0,
  "codigo": "",
  "validade": "",
  "mensagemTag": "X% de desconto no fechamento do pedido",
  "ocultarTagCupom": true
};

/* ============================================================
   CATEGORIAS
   ============================================================ */
const categorias = [
  {
    id: "inicio",
    nome: "#",
    nomeMenu: "Início",
    mostrarNoMenu: true,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "podologia",
    nome: "Podologia - Ana Antunes",
    nomeMenu: "Podologia - Ana Antunes",
    mostrarNoMenu: true,
    cupomAtivo: false,
    cupomPorcentagem: 15,
    cupomCodigo: "ANTUNES15",
    cupomValidade: "2026-09-05",
    cupomMensagemTag: "CUPOM ATIVO"
  },
  {
    id: "emagrecimento",
    nome: "Manipulados para emagrecimento",
    nomeMenu: "Emagrecimento",
    mostrarNoMenu: false,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "desempenhofisico",
    nome: "Manipulados para desempenho físico",
    nomeMenu: "Desempenho físico",
    mostrarNoMenu: false,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "saude",
    nome: "Manipulados para saúde e bem-estar",
    nomeMenu: "Saúde",
    mostrarNoMenu: false,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "quedacapilar",
    nome: "Manipulados para queda capilar",
    nomeMenu: "Queda Capilar",
    mostrarNoMenu: false,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "libido",
    nome: "Manipulados para libido",
    nomeMenu: "Libido",
    mostrarNoMenu: false,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "beleza",
    nome: "Manipulados para beleza",
    nomeMenu: "Beleza",
    mostrarNoMenu: false,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "podologia1",
    nome: "Manipulados para podologia",
    nomeMenu: "Podologia",
    mostrarNoMenu: false,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  }
];

/* ============================================================
   PRODUTOS
   ============================================================ */
const produtos = [
  {
    id: "18",
    nome: "Ácido Tricloroacético 90% - Solução 10ml",
    categoria: "podologia",
    preco: 47.00,
    imagem: "assets/img/AcidoTricloroacetico90emsoluçãode10mL.png",
    videos: [
      
    ],
    descricao: {
      resumo: "Ácido Tricloroacético 90%, desenvolvido para <strong>uso profissional em procedimentos podológicos</strong>, com formulação de alta concentração para utilização conforme as orientações do fabricante e do profissional habilitado.</p>",
      oQueE: "<p>O Ácido Tricloroacético 90% é uma solução de <strong>alta concentração</strong> destinada ao uso profissional em procedimentos podológicos. Sua composição é apresentada de forma objetiva, com 90% de Ácido Tricloroacético e veículo, em uma apresentação prática de 10ml.</p> <p>O produto é indicado para <strong>uso profissional em procedimentos podológicos</strong>, sendo uma opção para profissionais que necessitam utilizar uma solução de Ácido Tricloroacético 90% de acordo com sua finalidade e com as orientações aplicáveis ao procedimento.</p> <p>É destinado a <strong>profissionais habilitados</strong> para sua utilização em procedimentos podológicos, respeitando as orientações presentes na embalagem, na rotulagem e as recomendações do fabricante.</p>",
      composicao: "<ul> <li>Ácido Tricloroacético — 90%</li> <li>Veículo — 10ml</li> </ul> <p><strong>Apresentação:</strong> Solução 10ml — Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante</strong> presentes na embalagem e na rotulagem. Quando aplicável, sua utilização deverá seguir a orientação de médico ou profissional de saúde habilitado, especialmente em procedimentos que exijam avaliação e conhecimento técnico específico.</p>",
      advertencias: "<p>Produto destinado a <strong>uso profissional</strong>. Leia atentamente as informações fornecidas pelo fabricante na embalagem e na rotulagem antes da utilização. Em caso de dúvidas sobre a utilização adequada, procure orientação de médico ou profissional de saúde habilitado.</p> <p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia."
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: true,
    cupomPorcentagem: 15,
    cupomCodigo: "PROMO15",
    cupomValidade: "2026-09-05",
    cupomMensagemTag: "CUPOM ATIVO"
  },
  {
    id: "19",
    nome: "Fórmula Antimicose Completa - Solução 10ml",
    categoria: "podologia",
    preco: 47.00,
    imagem: "assets/img/FormulaAntimicoseCompleta.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A Fórmula Antimicose Completa é uma solução desenvolvida para auxiliar no cuidado e tratamento de fungos e micoses, reunindo diferentes componentes em uma formulação de uso tópico.</p>",
      oQueE: "<p>A <strong>Fórmula Antimicose Completa</strong> é uma solução de uso tópico formulada com ácido undecilênico, terbinafina, clotrimazol e extrato glicólico de própolis.</p><p>É destinada a <strong>auxiliar no tratamento de fungos e micoses</strong>, oferecendo uma formulação que reúne diferentes componentes tradicionalmente utilizados em produtos destinados ao cuidado de alterações fúngicas da pele.</p><p>Pode ser indicada para pessoas que necessitam de um produto de uso tópico para auxiliar no cuidado de áreas afetadas por fungos ou micoses, devendo sua utilização observar as orientações do fabricante ou de um profissional de saúde.</p>",
      composicao: "<ul><li>ACIDO UNDECILENICO — 20%</li><li>TERBINAFINA CLORIDRATO — 2%</li><li>CLOTRIMAZOL — 1%</li><li>EXTRATO GLICOLICO PROPOLIS — 5%</li><li>PROPILENOGLICOL — 10ML</li></ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional de saúde. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "21",
    nome: "Aloe Vera Reparador - Solução 10ml",
    categoria: "podologia",
    preco: 57.00,
    imagem: "assets/img/AloeVeraReparador.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Aloe Vera Reparador é uma solução desenvolvida para <strong>auxiliar na hidratação e regeneração da pele</strong>, proporcionando cuidado tópico em uma formulação com extrato de Aloe Vera.</p>",
      oQueE: "<p>O <strong>Aloe Vera Reparador</strong> é uma solução de uso tópico formulada com extrato de Aloe Vera, ATA e veículo, destinada ao cuidado da pele.</p><p>Sua finalidade é <strong>auxiliar na hidratação e regeneração da pele</strong>, contribuindo para os cuidados necessários em áreas que demandam atenção e manutenção da condição da pele.</p><p>Pode ser indicado para pessoas que buscam um produto destinado ao <strong>cuidado e hidratação da pele</strong>, observando sempre as orientações do fabricante ou de um profissional de saúde.</p>",
      composicao: "<ul><li>EXTRATO ALOE VERA — 1GR</li><li>ATA — 6GR</li>\n<li>VEICULO — 10ML</li></ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional de saúde. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "22",
    nome: "Ácido Salicílico 40% - Creme 30g",
    categoria: "podologia",
    preco: 37.00,
    imagem: "assets/img/acidosalicilico40.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Ácido Salicílico 40% é um creme de uso tópico desenvolvido para <strong>auxiliar na remoção de calosidades e verrugas</strong>, oferecendo uma formulação específica para cuidados localizados da pele.</p>",
      oQueE: "<p>O <strong>Ácido Salicílico 40%</strong> é um creme de uso tópico formulado com ácido salicílico em concentração de 40%, associado a uma base cremosa.</p><p>Sua finalidade é <strong>auxiliar na remoção de calosidades e verrugas</strong>, sendo destinado a aplicações localizadas conforme orientação adequada para utilização do produto.</p><p>Pode ser indicado para pessoas que necessitam de um produto destinado ao cuidado de <strong>calosidades e verrugas</strong>, devendo sua utilização seguir as orientações do fabricante ou de um profissional de saúde.</p>",
      composicao: "<ul><li>ACIDO SALICILICO — 40%</li><li>SEM ESSENCIA MG — 0%</li><li>CREME BASE — 30GR</li></ul><p><strong>Apresentação:</strong> Creme 30g - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional de saúde. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "23",
    nome: "Anestésico Tópico - Creme 20g",
    categoria: "podologia",
    preco: 57.00,
    imagem: "assets/img/AnestesicoTopico.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Anestésico Tópico é um creme formulado para <strong>auxiliar no conforto durante procedimentos</strong>, destinado ao uso conforme orientação profissional e indicação adequada.</p>",
      oQueE: "<p>O <strong>Anestésico Tópico</strong> é um creme formulado com lidocaína, benzocaína, epinefrina e base anestésica, destinado ao uso tópico.</p><p>Sua finalidade é <strong>auxiliar no conforto durante procedimentos</strong>, proporcionando uma formulação de aplicação tópica para utilização conforme orientação adequada.</p><p>Pode ser indicado para utilização em procedimentos nos quais o uso de um <strong>anestésico tópico</strong> seja apropriado, devendo sua utilização ser orientada por profissional habilitado.</p>",
      composicao: "<ul> <li>LIDOCAINA — 20%</li><li>BENZOCAINA — 10%</li><li>EPINEFRINA — 0.07%</li><li>BASE ANESTESICA — 20GR</li></ul><p><strong>Apresentação:</strong> Creme anestésico 20g - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante e por profissional habilitado. Em caso de dúvidas sobre a utilização, procure orientação profissional. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "24",
    nome: "Base Fortalecedora - Solução 10ml",
    categoria: "podologia",
    preco: 47.00,
    imagem: "assets/img/BaseFortalecedora.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A Base Fortalecedora é uma solução desenvolvida para <strong>auxiliar no fortalecimento das unhas</strong>, reunindo componentes destinados ao cuidado e à manutenção da estrutura das unhas.</p>",
      oQueE: "<p>A <strong>Base Fortalecedora</strong> é uma solução de uso tópico formulada com base fortalecedora, carbonato de cálcio, queratina líquida, formaldeído e veículo.</p><p>Sua finalidade é <strong>auxiliar no fortalecimento das unhas</strong>, contribuindo para os cuidados relacionados à manutenção e proteção da estrutura das unhas.</p><p>Pode ser indicada para pessoas que buscam um produto destinado ao <strong>cuidado e fortalecimento das unhas</strong>, devendo sua utilização seguir as orientações do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul> <li>BASE FORTALECEDORA — 5%</li><li>CARBONATO DE CALCIO — MG</li><li>QUERATINA LIQUIDA — MG</li><li>FORMALDEIDO — MG</li><li>VEICULO — 10ML</li></ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "25",
    nome: "Fluconazol + Terbinafina - Solução 10ml",
    categoria: "podologia",
    preco: 27.00,
    imagem: "assets/img/FluconazolTerbinafina.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Fluconazol + Terbinafina é uma fórmula antifúngica fortalecida desenvolvida para auxiliar nos cuidados relacionados a alterações causadas por fungos, com uma combinação de componentes em solução de uso tópico.</p>",
      oQueE: "<p>O <strong>Fluconazol + Terbinafina</strong> é uma solução formulada com fluconazol, óleo de melaleuca, óleo de cravo essencial, Trivalin SF e óleo de girassol.</p><p>Sua finalidade é oferecer uma <strong>fórmula antifúngica fortalecida</strong>, destinada a auxiliar nos cuidados relacionados à presença de fungos, conforme a indicação e orientação adequada para utilização do produto.</p><p>Pode ser indicado para pessoas que necessitam de um produto de uso tópico destinado ao <strong>cuidado antifúngico</strong>, devendo sua utilização seguir as orientações do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul> <li>FLUCONAZOL — 0.2%</li> \n<li>OLEO DE MELALEUCA — 4%</li>\n<li>OLEO DE GIRASSOL OZONIZADO — 2%</li>\n<li>TERBINAFINA CLORIDRATO — 0.2% </li><li>VEICULO 10ML — 10ML</li></ul>\n<p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "26",
    nome: "Fluconazol + Trivalin - Solução 10ml",
    categoria: "podologia",
    preco: 27.00,
    imagem: "assets/img/FluconazolTrivalin.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Fluconazol + Trivalin é uma solução desenvolvida para <strong>auxiliar no cuidado antifúngico das unhas</strong>, reunindo diferentes componentes em uma formulação de uso tópico.</p>",
      oQueE: "<p>O <strong>Fluconazol + Trivalin</strong> é uma solução de uso tópico formulada com fluconazol, óleo de melaleuca, óleo de cravo essencial, Trivalin SF e óleo de girassol.</p><p>Sua finalidade é <strong>auxiliar no cuidado antifúngico das unhas</strong>, oferecendo uma formulação destinada ao cuidado tópico relacionado à presença de fungos nas unhas.</p><p>Pode ser indicado para pessoas que necessitam de um produto destinado ao <strong>cuidado antifúngico das unhas</strong>, devendo sua utilização seguir as orientações do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>FLUCONAZOL — 0.2%</li>\n<li>OLEO DE MELALEUCA — 2%</li>\n<li>OLEO DE CRAVO ESSENCIAL — 2%</li>\n<li>TRIVALIN SF — 2%</li>\n<li>OLEO DE GIRASSOL — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "27",
    nome: "Mix Miconazol + Fluconazol - Solução 30ml",
    categoria: "podologia",
    preco: 37.00,
    imagem: "assets/img/MixMiconazolFluconazol.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Mix Miconazol + Fluconazol é uma solução desenvolvida como <strong>combinação antifúngica intensiva</strong>, reunindo diferentes componentes destinados ao cuidado tópico relacionado a fungos.</p>",
      oQueE: "<p>O <strong>Mix Miconazol + Fluconazol</strong> é uma solução de uso tópico formulada com fluconazol, miconazol, ciclopirox olamina, terbinafina cloridrato e óleo de melaleuca.</p><p>Sua finalidade é oferecer uma <strong>combinação antifúngica intensiva</strong>, destinada a auxiliar no cuidado tópico relacionado à presença de fungos, conforme a indicação adequada do produto.</p><p>Pode ser indicado para pessoas que necessitam de uma formulação de uso tópico destinada ao <strong>cuidado antifúngico</strong>, devendo sua utilização seguir as orientações do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>FLUCONAZOL — 2%</li>\n<li>MICONAZOL — 1%</li>\n<li>CICLOPIROX OLAMINA — 1%</li>\n<li>TERBINAFINA CLORIDRATO — 1%</li>\n<li>OLEO DE MELALEUCA — 3%</li>\n<li>VEICULO — 30ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 30ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "28",
    nome: "Ciclopirox Spray - Solução 20ml",
    categoria: "podologia",
    preco: 37.00,
    imagem: "assets/img/CiclopiroxSpray.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Ciclopirox Spray é uma solução alcoólica de uso tópico desenvolvida para <strong>auxiliar no tratamento antifúngico</strong>, reunindo diferentes componentes em uma formulação prática para aplicação localizada.</p>",
      oQueE: "<p>O <strong>Ciclopirox Spray</strong> é uma solução alcoólica de uso tópico formulada com ciclopirox olamina, terbinafina cloridrato, ureia, propilenoglicol e ácido salicílico.</p><p>Sua finalidade é <strong>auxiliar no tratamento antifúngico</strong>, sendo destinada ao cuidado tópico de áreas que necessitam de atenção relacionada à presença de fungos.</p><p>Pode ser indicado para pessoas que necessitam de uma formulação de uso tópico para <strong>cuidado antifúngico</strong>, devendo sua utilização seguir as orientações do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>TERBINAFINA CLORIDRATO — 2%</li>\n<li>UREIA — 10%</li>\n<li>PROPILENOGLICOL — 10%</li>\n<li>ACIDO SALICILICO — 2%</li>\n<li>ALCOOL 70% — 20ML</li>\n</ul><p><strong>Apresentação:</strong> Solução alcoólica 20ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "29",
    nome: "Gel Terbinafina 5% - Gel 20gr",
    categoria: "podologia",
    preco: 37.00,
    imagem: "assets/img/GelTerbinafina.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Gel Terbinafina 5% é um produto de uso tópico desenvolvido para <strong>auxiliar no combate a fungos</strong>, apresentado em uma formulação em gel para aplicação conforme orientação adequada.</p>",
      oQueE: "<p>O <strong>Gel Terbinafina 5%</strong> é uma formulação de uso tópico que contém terbinafina cloridrato, associada ao óleo de girassol ozonizado e gel Carbopol.</p><p>Sua finalidade é <strong>auxiliar no combate a fungos</strong>, sendo destinado ao cuidado tópico de áreas que necessitam de atenção relacionada à presença de fungos.</p><p>Pode ser indicado para pessoas que necessitam de um produto tópico destinado ao <strong>cuidado antifúngico</strong>, devendo sua utilização seguir as orientações do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>OLEO DE GIRASSOL OZONIZADO — 2%</li>\n<li>TERBINAFINA CLORIDRATO — 5%</li>\n<li>GEL CARBOPOL — 20GR</li>\n</ul><p><strong>Apresentação:</strong> Gel 20g - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "30",
    nome: "Caneta para Micose - Solução 10ml - Exclusividade Phormula Ativa",
    categoria: "podologia",
    preco: 47.00,
    imagem: "assets/img/CanetaparaMicose10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A Caneta para Micose é um produto de <strong>EXCLUSIVIDADE PHORMULA ATIVA.</strong>  É uma solução de aplicação tópica desenvolvida para <strong>auxiliar no combate à micose ungueal</strong>, apresentada em formato de caneta para facilitar a aplicação localizada.</p>",
      oQueE: "<p>A <strong>Caneta para Micose - Caneta 10ml</strong> é uma solução de uso tópico formulada com componentes destinados ao cuidado das unhas afetadas por micose.</p><p>Sua finalidade é <strong>auxiliar no combate à micose ungueal</strong>, oferecendo uma formulação destinada ao cuidado tópico das unhas conforme a indicação e orientação adequadas.</p><p>Pode ser indicada para pessoas que necessitam de um produto destinado ao <strong>cuidado antifúngico das unhas</strong>, devendo sua utilização seguir as orientações do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>MICOSE UNHA SOLUCAO — 1%</li>\n<li>FLUCONAZOL — MG</li>\n<li>5-METIL FENOL — MG</li>\n<li>CICLOPIROX OLAMINA — MG</li>\n<li>ACIDO UNDEC-10 ENOICO — MG</li>\n<li>OLEO DE MELALEUCA — MG</li>\n<li>VEICULO — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Caneta 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "31",
    nome: "Fórmula Terbinafina 5% - Solução 10ml",
    categoria: "podologia",
    preco: 37.00,
    imagem: "assets/img/FormulaTerbinafina5.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A Fórmula Terbinafina 5% é uma solução desenvolvida para <strong>auxiliar no tratamento de micoses resistentes</strong>, reunindo diferentes componentes em uma formulação de uso tópico.</p>",
      oQueE: "<p>A <strong>Fórmula Terbinafina 5%</strong> é uma solução de uso tópico formulada com fluconazol, óleo de melaleuca, óleo de girassol ozonizado e terbinafina cloridrato.</p><p>Sua finalidade é <strong>auxiliar no tratamento de micoses resistentes</strong>, oferecendo uma formulação destinada ao cuidado tópico relacionado à presença de fungos.</p><p>Pode ser indicada para pessoas que necessitam de um produto de uso tópico destinado ao <strong>cuidado antifúngico</strong>, especialmente conforme avaliação e orientação de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>FLUCONAZOL — 0.2%</li>\n<li>OLEO DE MELALEUCA — 4%</li>\n<li>OLEO DE GIRASSOL OZONIZADO — 2%</li>\n<li>TERBINAFINA CLORIDRATO — 5%</li>\n<li>VEICULO — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "32",
    nome: "Timol Antifúngico - Solução 10ml",
    categoria: "podologia",
    preco: 57.00,
    imagem: "assets/img/TimolAntifungico10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Solução de uso profissional desenvolvida para o cuidado antifúngico das unhas, reunindo uma fórmula de composição diversificada para auxiliar nos protocolos de tratamento de alterações relacionadas a fungos.</p>",
      oQueE: "<p>O Timol Antifúngico é uma solução de uso profissional formulada com timol e outros componentes de ação antifúngica, destinada ao cuidado das unhas.</p><p>Sua finalidade é <strong>auxiliar no tratamento antifúngico</strong>, integrando diferentes componentes à rotina de cuidados profissionais das unhas, conforme avaliação e orientação adequada.</p><p>É indicado para <strong>uso profissional</strong>, especialmente por profissionais que realizam procedimentos e cuidados relacionados às unhas e que considerem sua utilização apropriada dentro de um protocolo profissional.</p>",
      composicao: "<ul>\n<li>TIMOL — 5%</li>\n<li>FLUCONAZOL — 1%</li>\n<li>TERBINAFINA CLORIDRATO — 1%</li>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>OLEO DE MELALEUCA — 5%</li>\n<li>OLEO DE GIRASSOL OZONIZADO — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> e/ou de acordo com a orientação de um profissional habilitado. A forma de utilização deve respeitar a avaliação do caso e o protocolo profissional adotado, sem estabelecer dose, frequência ou horários diferentes dos recomendados.</p>",
      advertencias: "<p>Produto destinado ao uso conforme orientação profissional. Leia atentamente as informações do produto antes da utilização e siga as recomendações do fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "33",
    nome: "Ungueal Ciclopirox - Solução 10ml",
    categoria: "podologia",
    preco: 37.00,
    imagem: "assets/img/UnguealCiclopirox10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Solução de uso profissional desenvolvida para auxiliar no cuidado e na recuperação das unhas, com uma combinação de componentes destinada aos protocolos de cuidados ungueais.</p>",
      oQueE: "<p>O Ungueal Ciclopirox é uma solução de uso profissional formulada com ciclopirox olamina, ácido undecilênico, ácido láctico, ureia e propilenoglicol.</p><p>Sua finalidade é <strong>auxiliar na recuperação das unhas</strong>, oferecendo uma composição voltada ao cuidado ungueal e à manutenção das condições adequadas das unhas.</p><p>É recomendado para <strong>uso profissional</strong>, especialmente por profissionais que realizam procedimentos e cuidados relacionados às unhas e considerem sua utilização adequada dentro de um protocolo profissional.</p>",
      composicao: "<ul>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>ACIDO UNDECILENICO — 5%</li>\n<li>ACIDO LACTICO — 5%</li>\n<li>UREIA — 15%</li>\n<li>PROPILENOGLICOL — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> e/ou orientação de um profissional habilitado. A forma de utilização deve respeitar a avaliação do caso e o protocolo profissional adotado, sem estabelecer dose, frequência ou horários diferentes dos recomendados.</p>",
      advertencias: "<p>Produto destinado ao uso conforme orientação profissional. Leia atentamente as informações do produto antes da utilização e siga as recomendações do fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "34",
    nome: "Ungueal Nistatina - Solução 10ml",
    categoria: "podologia",
    preco: 37.00,
    imagem: "assets/img/UnguealNistatina10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Solução de uso profissional desenvolvida para auxiliar no cuidado e na recuperação das unhas, reunindo uma composição com diferentes componentes destinados aos protocolos de cuidados ungueais.</p>",
      oQueE: "<p>O Ungueal Nistatina é uma solução de uso profissional formulada com fluconazol, nistatina, ciclopirox olamina e óleo de melaleuca, em veículo adequado à apresentação.</p><p>Sua finalidade é <strong>auxiliar na recuperação das unhas</strong>, integrando uma composição voltada ao cuidado ungueal e ao suporte dos protocolos profissionais.</p><p>É recomendado para <strong>uso profissional</strong>, especialmente por profissionais que realizam procedimentos e cuidados relacionados às unhas e considerem sua utilização adequada conforme a avaliação de cada caso.</p>",
      composicao: "<ul>\n<li>FLUCONAZOL — 2%</li>\n<li>NISTATINA — 100000UI</li>\n<li>CICLOPIROX OLAMINA — 5%</li>\n<li>OLEO DE MELALEUCA — 2%</li>\n<li>VEICULO — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> e/ou orientação de um profissional habilitado. A forma de utilização deve respeitar a avaliação do caso e o protocolo profissional adotado, sem estabelecer dose, frequência ou horários diferentes dos recomendados.</p>",
      advertencias: "<p>Produto destinado ao uso conforme orientação profissional. Leia atentamente as informações do produto antes da utilização e siga as recomendações do fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "35",
    nome: "Ungueal Terbinafina - Solução 10ml",
    categoria: "podologia",
    preco: 37.00,
    imagem: "assets/img/UnguealTerbinafina10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Solução de uso profissional desenvolvida para auxiliar no cuidado e na recuperação das unhas, com uma composição específica para integrar protocolos de cuidados ungueais.</p>",
      oQueE: "<p>O Ungueal Terbinafina é uma solução de uso profissional formulada com terbinafina cloridrato, ciclopirox olamina e ácido salicílico, em veículo de propilenoglicol.</p><p>Sua finalidade é <strong>auxiliar na recuperação das unhas</strong>, oferecendo uma composição direcionada ao cuidado ungueal e ao suporte dos protocolos profissionais.</p><p>É recomendado para <strong>uso profissional</strong>, especialmente por profissionais que realizam procedimentos e cuidados relacionados às unhas e considerem sua utilização adequada conforme a avaliação de cada caso.</p>",
      composicao: "<ul>\n<li>TERBINAFINA CLORIDRATO — 1%</li>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>ACIDO SALICILICO — 2%</li>\n<li>PROPILENOGLICOL — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> e/ou orientação de um profissional habilitado. A forma de utilização deve respeitar a avaliação do caso e o protocolo profissional adotado, sem estabelecer dose, frequência ou horários diferentes dos recomendados.</p>",
      advertencias: "<p>Produto destinado ao uso conforme orientação profissional. Leia atentamente as informações do produto antes da utilização e siga as recomendações do fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "36",
    nome: "Azul de Metileno 1% - Solução 30ml",
    categoria: "podologia",
    preco: 67.00,
    imagem: "assets/img/azul-de-metileno-1-solucao-30ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p><strong>Azul de Metileno 1%</strong> é uma solução de uso oral e tópico apresentada em frasco de 30ml, desenvolvida com ação antimicrobiana conforme a finalidade informada para o produto.</p>",
      oQueE: "<p>O <strong>Azul de Metileno 1%</strong> é uma solução formulada com azul de metileno na concentração indicada, destinada ao uso oral e tópico conforme a apresentação do produto.</p><p>Sua finalidade é proporcionar <strong>ação antimicrobiana</strong>, de acordo com as características e indicações informadas pelo fabricante, sem promessa de cura ou resultados específicos.</p><p>É indicado para pessoas que tenham recebido orientação adequada para utilização da formulação, devendo o uso oral ou tópico observar as <strong>orientações do fabricante ou de profissional habilitado</strong>.</p>",
      composicao: "<ul>\n<li>AZUL DE METILENO — 1%</li>\n<li>SUBLINGUAL 500MCG/GOTA — MG</li>\n<li>VEICULO — 30ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 30ml - USO ORAL / Tópico - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou orientação de profissional habilitado. Não estabeleça dose, frequência, horários ou quantidade de uso sem orientação específica.</p>",
      advertencias: "<p>Utilize o produto de acordo com sua apresentação e finalidade, observando as orientações fornecidas pelo fabricante ou por profissional habilitado. Não altere a forma de utilização recomendada sem orientação adequada.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "37",
    nome: "Ungueal DMSO - Solução 30ml",
    categoria: "podologia",
    preco: 57.00,
    imagem: "assets/img/ungueal-dmso-solucao-30ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Ungueal DMSO é uma solução de uso tópico desenvolvida para <strong>auxiliar no cuidado e na recuperação das unhas</strong>, reunindo diferentes componentes em uma formulação de aplicação local.</p>",
      oQueE: "<p>O Ungueal DMSO é uma solução de uso tópico formulada com miconazol, fluconazol, ciclopirox olamina, terbinafina cloridrato, óleo de melaleuca, ureia, queratina líquida, biotina e DMSO.</p><p>Sua finalidade é <strong>auxiliar no cuidado das unhas</strong>, especialmente em situações nas quais é necessário um cuidado antifúngico associado à manutenção das condições adequadas da estrutura ungueal.</p><p>É indicado para pessoas que buscam um produto de aplicação tópica destinado ao <strong>cuidado das unhas</strong>, devendo sua utilização observar as orientações do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>MICONAZOL — 2%</li>\n<li>FLUCONAZOL — 2%</li>\n<li>CICLOPIROX OLAMINA — 1%</li>\n<li>TERBINAFINA CLORIDRATO — 1%</li>\n<li>OLEO DE MELALEUCA — 2%</li>\n<li>UREIA — 10%</li>\n<li>QUERATINA LIQUIDA — 2%</li>\n<li>BIOTINA — 0.5%</li>\n<li>DMSO — 30ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 30ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não estabeleça dose, frequência ou horários de utilização diferentes daqueles indicados na orientação recebida.</p>",
      advertencias: "<p>Produto destinado ao uso conforme orientação do fabricante. Observe atentamente as instruções de utilização e as informações presentes na embalagem. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "38",
    nome: "Terbinafina 5% - Solução 10ml",
    categoria: "podologia",
    preco: 27.00,
    imagem: "assets/img/terbinafina-5-solucao-10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Terbinafina 5% é uma solução de uso tópico desenvolvida para <strong>auxiliar no cuidado de micoses resistentes</strong>, com formulação concentrada para aplicação local.</p>",
      oQueE: "<p>Terbinafina 5% é uma solução de uso tópico formulada com terbinafina cloridrato a 5%, destinada ao cuidado da pele e das áreas indicadas para sua aplicação.</p><p>Sua finalidade é <strong>auxiliar no tratamento de micoses resistentes</strong>, oferecendo uma opção de aplicação local dentro dos cuidados antifúngicos recomendados.</p><p>Pode ser indicada para pessoas que necessitam de cuidado tópico relacionado a micoses, especialmente quando houver <strong>orientação profissional</strong> para utilização de uma formulação com terbinafina.</p>",
      composicao: "<ul>\n<li>TERBINAFINA CLORIDRATO — 5%</li>\n<li>VEICULO — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não estabeleça dose, frequência ou horários de utilização diferentes daqueles indicados na orientação recebida.</p>",
      advertencias: "<p>Utilize o produto de acordo com as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização ou sobre a persistência dos sintomas, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "39",
    nome: "Ureia 10% + Ácido Salicílico 40% - Creme 30g",
    categoria: "podologia",
    preco: 47.00,
    imagem: "assets/img/ureia-10-acido-salicilico-40-creme-30g.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Creme formulado com <strong>ureia 10% e ácido salicílico 40%</strong>, desenvolvido para auxiliar no cuidado de áreas com calosidades e verrugas.</p>",
      oQueE: "<p>É um creme de uso tópico que combina ácido salicílico e ureia em uma formulação destinada ao cuidado localizado da pele.</p><p>Sua finalidade é <strong>auxiliar na remoção de calosidades e verrugas</strong>, contribuindo para o cuidado das áreas que apresentam essas alterações.</p><p>Pode ser indicado para pessoas que necessitam de cuidado tópico direcionado a calosidades ou verrugas, preferencialmente mediante <strong>orientação profissional</strong>.</p>",
      composicao: "<ul>\n<li>ACIDO SALICILICO — 40%</li>\n<li>UREIA — 10%</li>\n<li>SEM ESSENCIA — MG</li>\n<li>CREME BASE — 30GR</li>\n</ul><p><strong>Apresentação:</strong> Creme 30g - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não estabeleça dose, frequência ou horários de utilização diferentes daqueles indicados na orientação recebida.</p>",
      advertencias: "<p>Utilize o produto de acordo com as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "40",
    nome: "Terbinafina Aprimorada - Solução 10ml",
    categoria: "podologia",
    preco: 32.00,
    imagem: "assets/img/terbinafina-aprimorada-solucao-10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Terbinafina Aprimorada é uma solução de uso tópico desenvolvida para <strong>auxiliar no cuidado de micoses resistentes</strong>, reunindo diferentes componentes em uma formulação de aplicação local.</p>",
      oQueE: "<p>Terbinafina Aprimorada é uma solução de uso tópico formulada com terbinafina cloridrato, ciclopirox olamina, miconazol, fluconazol, ácido salicílico, ureia, óleo de melaleuca e propilenoglicol.</p><p>Sua finalidade é <strong>auxiliar no tratamento de micoses resistentes</strong>, oferecendo uma formulação destinada ao cuidado antifúngico tópico, sem promessa de cura ou resultado garantido.</p><p>Pode ser indicada para pessoas que necessitam de cuidado tópico relacionado a micoses resistentes, especialmente quando houver <strong>orientação de um profissional habilitado</strong> para utilização da formulação.</p>",
      composicao: "<ul>\n<li>TERBINAFINA CLORIDRATO — 1%</li>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>MICONAZOL — 2%</li>\n<li>FLUCONAZOL — 2%</li>\n<li>ACIDO SALICILICO — 3%</li>\n<li>UREIA — 10%</li>\n<li>OLEO DE MELALEUCA ESS — 2%</li>\n<li>PROPILENOGLICOL — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não estabeleça dose, frequência ou horários de utilização diferentes daqueles indicados na orientação recebida.</p>",
      advertencias: "<p>Utilize o produto de acordo com as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização ou sobre a persistência dos sintomas, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "41",
    nome: "Terbinafina Aprimorara Ozonizada - Solução 10ml",
    categoria: "podologia",
    preco: 32.00,
    imagem: "assets/img/terbinafina-aprimorara-ozonizada-solucao-10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Terbinafina Aprimorara Ozonizada é uma solução de uso tópico desenvolvida para <strong>auxiliar no cuidado de micoses resistentes</strong>, combinando ativos antifúngicos e óleo de girassol ozonizado em uma formulação de aplicação local.</p>",
      oQueE: "<p>Terbinafina Aprimorara Ozonizada é uma solução de uso tópico formulada com terbinafina cloridrato, ciclopirox olamina, miconazol, fluconazol, ácido salicílico, ureia, óleo de girassol ozonizado e propilenoglicol.</p><p>Sua finalidade é <strong>auxiliar no tratamento de micoses resistentes</strong>, oferecendo uma formulação destinada ao cuidado antifúngico tópico, sem promessa de cura ou resultado garantido.</p><p>Pode ser indicada para pessoas que necessitam de cuidado tópico relacionado a micoses resistentes, especialmente quando houver <strong>orientação de um profissional habilitado</strong> para utilização da formulação.</p>",
      composicao: "<ul>\n<li>TERBINAFINA CLORIDRATO — 1%</li>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>MICONAZOL — 2%</li>\n<li>FLUCONAZOL — 2%</li>\n<li>ACIDO SALICILICO — 3%</li>\n<li>UREIA — 10%</li>\n<li>OLEO DE GIRASSOL OZONIZADO — 2%</li>\n<li>PROPILENOGLICOL — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não estabeleça dose, frequência ou horários de utilização diferentes daqueles indicados na orientação recebida.</p>",
      advertencias: "<p>Utilize o produto de acordo com as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização ou sobre a persistência dos sintomas, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "42",
    nome: "TRICHOPHYTON - Solução 10ml",
    categoria: "podologia",
    preco: 27.00,
    imagem: "assets/img/trichophyton-solucao-10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>TRICHOPHYTON é uma solução de uso tópico desenvolvida para <strong>auxiliar no tratamento do Trichophyton</strong>, com uma formulação direcionada ao cuidado das áreas afetadas.</p>",
      oQueE: "<p>TRICHOPHYTON é uma solução de uso tópico que reúne ativos selecionados em uma formulação voltada ao cuidado das áreas afetadas por Trichophyton.</p><p>Sua finalidade é <strong>auxiliar no tratamento do Trichophyton</strong>, contribuindo para o cuidado local conforme a indicação e orientação de uso do produto.</p><p>É indicado para pessoas que necessitam de um produto de uso tópico destinado ao <strong>cuidado de áreas afetadas por Trichophyton</strong>, especialmente quando houver orientação profissional para sua utilização.</p>",
      composicao: "<ul>\n<li>TERBINAFINA CLORIDRATO — 1%</li>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>ACIDO SALICILICO — 2%</li>\n<li>PROPILENOGLICOL — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto seguindo <strong>as instruções do fabricante</strong> ou a orientação de um profissional de saúde. Não estabeleça dose, frequência, horários ou quantidade de uso além do que estiver indicado na orientação profissional ou na embalagem do produto.</p>",
      advertencias: "<p>Produto destinado ao uso conforme orientação do fabricante ou profissional de saúde. Utilize corretamente e observe as orientações apresentadas na embalagem. Em caso de dúvidas sobre a utilização do produto, procure orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "43",
    nome: "FUSARIUM - Solução 10ml",
    categoria: "podologia",
    preco: 157.00,
    imagem: "assets/img/fusarium-solucao-10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>FUSARIUM - Solução 10ml é uma solução de uso tópico desenvolvida para <strong>auxiliar no tratamento da alteração de cor associada à micose</strong>, com composição que reúne ativos de ação antifúngica e componentes que auxiliam no cuidado da região afetada.</p>",
      oQueE: "<p>FUSARIUM - Solução 10ml é uma solução de uso tópico formulada com ativos selecionados para o cuidado de áreas afetadas por micose e alterações de coloração relacionadas a essa condição.</p><p>Sua finalidade é <strong>auxiliar no tratamento da alteração de cor na micose</strong>, contribuindo para o cuidado da região afetada conforme orientação adequada para o uso do produto.</p><p>É indicado para pessoas que necessitam de uma solução tópica para auxiliar no cuidado de alterações de cor associadas à micose, devendo seu uso ser realizado de acordo com a orientação do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>AMOROLFINA — 5%</li>\n<li>ACIDO LACTICO — 5%</li>\n<li>UREIA — 15%</li>\n<li>PROPILENOGLICOL — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não utilize dose, frequência ou horário diferentes daqueles recomendados na orientação recebida.</p>",
      advertencias: "<p>Uso conforme orientação do fabricante ou de profissional habilitado. Em caso de dúvidas sobre a utilização do produto, procure orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  },
  {
    id: "44",
    nome: "ASPERGILLUS - Solução 10ml",
    categoria: "podologia",
    preco: 27.00,
    imagem: "assets/img/aspergillus-solucao-10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>ASPERGILLUS - Solução 10ml é uma solução de uso tópico desenvolvida para <strong>auxiliar no tratamento do Aspergillus</strong>, com uma composição que reúne ativos selecionados para o cuidado da região afetada.</p>",
      oQueE: "<p>ASPERGILLUS - Solução 10ml é uma solução de uso tópico formulada com ativos selecionados para auxiliar no cuidado de condições relacionadas ao Aspergillus.</p><p>Sua finalidade é <strong>auxiliar no tratamento do Aspergillus</strong>, contribuindo para o cuidado da região afetada conforme a orientação adequada para utilização do produto.</p><p>É indicado para pessoas que necessitam de uma solução tópica para auxiliar no tratamento do Aspergillus, devendo sua utilização ser realizada conforme orientação do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>TIOCONAZOL — 2%</li>\n<li>ACIDO SALICILICO — 3%</li>\n<li>UREIA — 10%</li>\n<li>VEICULO — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não utilize dose, frequência ou horário diferentes daqueles recomendados na orientação recebida.</p>",
      advertencias: "<p>Utilize o produto conforme orientação do fabricante ou de profissional habilitado. Em caso de dúvidas sobre a utilização do produto, procure orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: ""
  }
];

window.produtos = produtos;
window.categorias = categorias;
window.WHATSAPP_NUMERO = WHATSAPP_NUMERO;
window.cupomSite = cupomSite;

/* ============================================================
   OBSERVACOES IMPORTANTES
   ============================================================ */
/*
- Este arquivo e GERADO AUTOMATICAMENTE pelo GitHub Action.
- NAO edite manualmente. Altere a planilha Google Sheets.
*/

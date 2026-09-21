/* ============================================================
   CONFIGURACOES GERAIS
   ============================================================ */
// Gerado automaticamente a partir da planilha Google Sheets
const WHATSAPP_NUMERO = "5518997033495";

const cupomSite = {
  "ativo": false,
  "porcentagem": 5,
  "codigo": "5OFF",
  "validade": "2026-09-05",
  "mensagemTag": "15%OFF",
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
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "podologia",
    nome: "Podologia - Ana Antunes",
    nomeMenu: "Podologia",
    mostrarNoMenu: true,
    cupomAtivo: true,
    cupomPorcentagem: 15,
    cupomCodigo: "ANTUNES15OFF",
    cupomValidade: "",
    cupomMensagemTag: "ANTUNES15OFF",
    cupomOcultarTag: true
  },
  {
    id: "emagrecimento",
    nome: "Emagrecimento",
    nomeMenu: "Emagrecimento",
    mostrarNoMenu: true,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "desempenhofisico",
    nome: "Desempenho físico e vitalidade",
    nomeMenu: "Desempenho físico & Vitalidade",
    mostrarNoMenu: true,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "quedacapilar",
    nome: "Queda capilar",
    nomeMenu: "Queda Capilar",
    mostrarNoMenu: true,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "beleza",
    nome: "Dermatologia e beleza",
    nomeMenu: "Dermato & Beleza",
    mostrarNoMenu: true,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "saude",
    nome: "Saúde e bem-estar",
    nomeMenu: "Saúde & Bem Estar",
    mostrarNoMenu: true,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "embalagens",
    nome: "Embalagens",
    nomeMenu: "Embalagens",
    mostrarNoMenu: true,
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
      resumo: "<p>Solução de <strong>Ácido Tricloroacético 90%</strong>, destinada ao uso profissional em procedimentos podológicos específicos que necessitam de ação química controlada.</p>",
      oQueE: "<p>O Ácido Tricloroacético 90% é uma solução de uso profissional formulada com alta concentração de ácido tricloroacético, indicada para aplicações específicas em procedimentos podológicos.</p><p>É utilizado em <strong>procedimentos podológicos específicos</strong> que necessitam de ação química controlada, conforme avaliação e indicação profissional.</p><p>É recomendado para <strong>profissionais habilitados</strong> que realizam procedimentos podológicos nos quais a utilização do ácido tricloroacético esteja devidamente indicada.</p>",
      composicao: "<ul>\n<li>Ácido Tricloroacético — 90%</li>\n<li>Veículo — 10ml</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml — Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto exclusivamente conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de profissional habilitado. Não utilize dose, frequência ou horário diferentes daqueles recomendados para o produto.</p>",
      advertencias: "<p>Produto destinado ao <strong>uso profissional</strong>. A utilização deve ser realizada de acordo com a finalidade indicada e mediante avaliação profissional. Em caso de dúvidas sobre a utilização, procure orientação de profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 15,
    cupomCodigo: "PROMO15",
    cupomValidade: "2026-09-05",
    cupomMensagemTag: "CUPOM ATIVO",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
      resumo: "<p>Solução desenvolvida para <strong>uso profissional em protocolos de peeling químico podológico</strong>, combinando Aloe Vera e ATA para auxiliar no cuidado e na hidratação da pele durante o procedimento.</p>",
      oQueE: "<p>O Aloe Vera Reparador é uma solução formulada com extrato de Aloe Vera, ATA e veículo, desenvolvida para utilização profissional em protocolos específicos de peeling químico podológico.</p><p>Sua finalidade é integrar protocolos de <strong>peeling químico podológico</strong>, associando a presença do Aloe Vera, que auxilia na hidratação e no cuidado da pele durante o procedimento, à ação do ATA.</p><p>É indicado para <strong>profissionais habilitados</strong> que realizam protocolos de peeling químico podológico nos quais a utilização da formulação esteja devidamente indicada.</p>",
      composicao: "<ul>\n<li>EXTRATO ALOE VERA — 1GR</li>\n<li>ATA — 6GR</li>\n<li>VEICULO — 10ML</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de profissional habilitado. Não utilize dose, frequência ou horário diferentes daqueles recomendados para o produto.</p>",
      advertencias: "<p>Produto destinado ao <strong>uso profissional em protocolos de peeling químico podológico</strong>. A utilização deve seguir a finalidade indicada pelo fabricante e a orientação de profissional habilitado. Em caso de dúvidas sobre a utilização, procure orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
      resumo: "<p>Creme com <strong>Ácido Salicílico 40%</strong>, desenvolvido para auxiliar na remoção de calosidades, hiperqueratoses e áreas de pele espessada.</p>",
      oQueE: "<p>O Ácido Salicílico 40% é um creme de uso tópico formulado com alta concentração de ácido salicílico, destinado ao cuidado de áreas com <strong>espessamento da pele</strong>.</p><p>Sua finalidade é <strong>auxiliar na remoção de calosidades, hiperqueratoses e áreas de pele espessada</strong>. Também pode ser indicado para verrugas, conforme avaliação profissional.</p><p>É recomendado para pessoas que apresentam <strong>calosidades, hiperqueratoses ou verrugas</strong> e que tenham indicação adequada para utilização do produto, preferencialmente mediante orientação profissional.</p>",
      composicao: "<ul>\n<li>ACIDO SALICILICO — 40%</li>\n<li>SEM ESSENCIA MG — 0%</li>\n<li>CREME BASE — 30GR</li>\n</ul><p><strong>Apresentação:</strong> Creme 30g - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não utilize dose, frequência ou horário diferentes daqueles recomendados para o produto.</p>",
      advertencias: "<p>Uso conforme orientação do fabricante ou profissional. Mantenha o produto adequadamente armazenado e fora do alcance de crianças. Em caso de dúvidas sobre a utilização, procure orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> e/ou orientação de um profissional habilitado. A forma de utilizaç��o deve respeitar a avaliação do caso e o protocolo profissional adotado, sem estabelecer dose, frequência ou horários diferentes dos recomendados.</p>",
      advertencias: "<p>Produto destinado ao uso conforme orientação profissional. Leia atentamente as informações do produto antes da utilização e siga as recomendações do fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "45",
    nome: "Ciclopirox - Solução 20ml",
    categoria: "podologia",
    preco: 37.00,
    imagem: "assets/img/ciclopirox-solucao-20ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Ciclopirox é uma solução alcoólica de uso tópico desenvolvida para <strong>auxiliar no tratamento antifúngico</strong>, reunindo diferentes componentes em uma formulação prática para aplicação localizada.</p>",
      oQueE: "<p>O <strong>Ciclopirox</strong> é uma solução alcoólica de uso tópico formulada com ciclopirox olamina, terbinafina cloridrato, ureia, propilenoglicol e ácido salicílico.</p><p>Sua finalidade é <strong>auxiliar no tratamento antifúngico</strong>, sendo destinada ao cuidado tópico de áreas que necessitam de atenção relacionada à presença de fungos.</p><p>Pode ser indicado para pessoas que necessitam de uma formulação de uso tópico para <strong>cuidado antifúngico</strong>, devendo sua utilização seguir as orientações do fabricante ou de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>CICLOPIROX OLAMINA — 8%</li>\n<li>TERBINAFINA CLORIDRATO — 2%</li>\n<li>UREIA — 10%</li>\n<li>PROPILENOGLICOL — 10%</li>\n<li>ACIDO SALICILICO — 2%</li>\n<li>ALCOOL 70% — 20ML</li>\n</ul><p><strong>Apresentação:</strong> Solução alcoólica 20ml - Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto somente conforme as orientações fornecidas pelo fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional habilitado. Mantenha o produto em condições adequadas de armazenamento e fora do alcance de crianças.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "46",
    nome: "Embalagem Esmalte Quad 10ml",
    categoria: "embalagens",
    preco: 7.00,
    imagem: "assets/img/embalagem-esmalte-quad-10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Embalagem de vidro âmbar de 10ml, com <strong>design diferenciado</strong> e formato tipo esmalte, desenvolvida para acomodar formulações destinadas aos cuidados e tratamentos das unhas das mãos e dos pés.</p>",
      oQueE: "<p>A <strong>Embalagem Esmalte Quad 10ml</strong> é um frasco de vidro na cor âmbar, com apresentação semelhante à de um esmalte, desenvolvido para o acondicionamento de formulações.</p><p>Sua finalidade é proporcionar uma opção prática e adequada para a <strong>acomodação de fórmulas</strong> destinadas aos cuidados e tratamentos das unhas das mãos e dos pés, incluindo formulações para micose, fungos e fortalecimento das unhas.</p><p>É indicada para profissionais e estabelecimentos que necessitam de uma embalagem específica para o acondicionamento de formulações de uso nas unhas, conforme a finalidade e orientação do produto acondicionado.</p>",
      composicao: "<ul>\n<li>Não se aplica ao produto</li>\n</ul><p><strong>Apresentação:</strong> Embalagem de vidro - Capacidade 10ml</p>",
      comoUsar: "<p>Utilize a embalagem para o acondicionamento da formulação conforme sua finalidade. Siga as <strong>instruções do fabricante</strong> e, quando aplicável, a orientação de um profissional habilitado quanto ao preparo, acondicionamento e utilização da formulação.</p>",
      advertencias: "<p>Utilize a embalagem de acordo com sua finalidade e mantenha-a em condições adequadas de conservação. Para informações específicas sobre a formulação acondicionada, siga as orientações do fabricante ou de um profissional habilitado.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "47",
    nome: "Embalagem frasco vidro âmbar spary 30ml",
    categoria: "embalagens",
    preco: 5.00,
    imagem: "assets/img/embalagem-frasco-vidro-ambar-spary-30ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Frasco de vidro âmbar com spray e capacidade de 30ml, desenvolvido para <strong>acondicionamento e aplicação prática</strong> de diferentes preparações líquidas, especialmente produtos de manipulação.</p>",
      oQueE: "<p>É uma embalagem composta por <strong>frasco de vidro âmbar com válvula spray</strong>, com capacidade para 30ml, indicada para o armazenamento e aplicação de preparações líquidas.</p><p>Sua finalidade é proporcionar uma forma prática e adequada de <strong>acondicionar e aplicar produtos líquidos</strong>, podendo ser utilizada em diferentes formulações de manipulação, conforme as características da preparação.</p><p>É recomendado para <strong>farmácias de manipulação, profissionais e fabricantes</strong> que necessitam de uma embalagem compacta com sistema spray para acondicionamento de preparações compatíveis com esse tipo de frasco.</p>",
      composicao: "<ul>\n<li>Não se aplica ao produto</li>\n</ul><p><strong>Apresentação:</strong> Embalagem frasco vidro spray com capacidade de 30ml</p>",
      comoUsar: "<p>Utilize a embalagem de acordo com a finalidade da preparação que será acondicionada. Antes do uso, certifique-se de que o produto é compatível com o material da embalagem e siga as <strong>instruções do fabricante ou a orientação do profissional responsável</strong>.</p>",
      advertencias: "<p>Utilize a embalagem somente para preparações compatíveis com suas características. Mantenha-a adequadamente fechada quando não estiver em uso e siga as orientações de armazenamento e utilização referentes ao produto acondicionado.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "48",
    nome: "Embalagem Conta Gotas Vidro Euro Âmbar 20ml",
    categoria: "embalagens",
    preco: 5.00,
    imagem: "assets/img/embalagem-conta-gotas-vidro-euro-ambar-20ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Embalagem de vidro Euro âmbar de 20ml, com <strong>rosca 18</strong> e sistema conta-gotas, desenvolvida para o acondicionamento prático de diferentes tipos de soluções e preparações líquidas.</p>",
      oQueE: "<p>A <strong>Embalagem Conta Gotas Vidro Euro Âmbar 20ml</strong> é um frasco de vidro na cor âmbar, com rosca 18 e conta-gotas, indicado para o acondicionamento de diferentes formulações.</p><p>Sua finalidade é oferecer uma embalagem prática para armazenar <strong>soluções líquidas ou em glóbulos</strong>, xaropes, homeopatias, florais, entre outras preparações, conforme a necessidade de acondicionamento.</p><p>É recomendada para farmácias de manipulação, profissionais e estabelecimentos que necessitam de uma embalagem adequada para o acondicionamento de preparações líquidas ou em glóbulos, de acordo com a finalidade da formulação.</p>",
      composicao: "<ul>\n<li>Não se Aplica ao produto.</li>\n</ul><p><strong>Apresentação:</strong> Embalagem em Vidro - Capacidade 20ml</p>",
      comoUsar: "<p>Utilize a embalagem para o acondicionamento da formulação conforme sua finalidade. Siga as <strong>instruções do fabricante</strong> e, quando aplicável, a orientação de um profissional habilitado quanto ao acondicionamento e utilização da preparação.</p>",
      advertencias: "<p>Utilize a embalagem de acordo com sua finalidade e mantenha-a em condições adequadas de conservação. Para informações específicas sobre a formulação acondicionada, siga as orientações do fabricante ou de um profissional habilitado.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "49",
    nome: "AKKERMAT 150MG - 30 Cápsulas",
    categoria: "emagrecimento",
    preco: 150.00,
    imagem: "assets/img/akkermat-150mg-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Akkermat® 150mg é um fitocomplexo de capsaicinoides desenvolvido para auxiliar no <strong>controle do apetite, aumento da saciedade e gerenciamento do peso</strong>, com ação termogênica e suporte ao equilíbrio metabólico.</p>",
      oQueE: "<p>Akkermat® 150mg é um fitocomplexo de capsaicinoides, composto por capsaicina, dihidrocapsaicina e nordihidrocapsaicina, extraído dos frutos de <em>Capsicum frutescens</em> e microencapsulado com tecnologia patenteada para melhorar sua biodisponibilidade e diminuir os efeitos gastrointestinais.</p><p>O produto é utilizado como auxiliar no <strong>gerenciamento do peso</strong>, contribuindo para a redução do apetite e para o aumento da sensação de saciedade. Também apresenta ação termogênica e propriedades relacionadas ao suporte do metabolismo e do perfil lipídico.</p><p>É indicado para adultos que buscam <strong>auxílio no controle do apetite e no gerenciamento do peso</strong>, associado a hábitos alimentares equilibrados e à prática de atividades físicas. Seu uso deve respeitar as orientações de utilização e as recomendações de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>AKKERMAT — 150MG</li>\n<li>Excipiente q.s.p 1 cápsula</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula ao dia</strong>, após uma refeição.</p>",
      advertencias: "<p>Não deve ser utilizado por pacientes que apresentam doenças intestinais, úlcera gástrica, cistite crônica e de repetição, hemorroida ou alergia à pimenta. Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade, recomenda-se descontinuar o uso e consultar o médico.</p><p>Não utilize o produto com o prazo de validade vencido. Manter em temperatura ambiente, entre 15 e 30ºC, protegido da luz, do calor e da umidade e fora do alcance das crianças. Mulheres grávidas não devem utilizar o produto sem orientação médica. O uso durante o período de amamentação não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica.</p><p>Siga corretamente o modo de usar e, caso os sintomas não desapareçam, procure orientação médica. Nunca compre ou utilize o produto sem orientação de um profissional habilitado. Imagens meramente ilustrativas.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "50",
    nome: "SWEET BEET BETERRABA 500MG (Extrato da Beterraba) - 30 Cápsulas",
    categoria: "desempenhofisico",
    preco: 40.00,
    imagem: "assets/img/sweet-beet-beterraba-500mg-extrato-da-beterraba-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Sweet Beet 500mg é um suplemento à base de <strong>extrato seco de beterraba</strong>, fonte de nitratos e compostos naturais, desenvolvido para auxiliar na circulação, oxigenação e suporte à saúde cardiovascular.</p>",
      oQueE: "<p>Sweet Beet 500mg é formulado com extrato seco de beterraba, ingrediente naturalmente rico em nitratos, vitaminas e compostos antioxidantes. Sua composição concentra os componentes naturais da beterraba em uma apresentação prática em cápsulas.</p><p>O produto é utilizado como auxiliar no <strong>suporte à circulação e à oxigenação</strong>, contribuindo também para aspectos relacionados à saúde cardiovascular, ao metabolismo e à digestão. Por suas características, pode fazer parte de uma rotina voltada ao bem-estar e à prática de atividades físicas.</p><p>É recomendado para adultos que buscam <strong>suporte à circulação, oxigenação e desempenho físico</strong>, especialmente dentro de uma rotina que inclua alimentação equilibrada e atividade física. Pessoas que utilizam medicamentos para pressão arterial ou que possuem condições específicas de saúde devem consultar um profissional habilitado antes do uso.</p>",
      composicao: "<p><strong>Cada 1 cápsula contém:</strong></p>\n<ul>\n<li>Sweet Beet (Beterraba Extrato Seco) — 500mg</li>\n<li>Excipiente q.s.p 1cápsula</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula ao dia</strong>, preferencialmente com uma refeição, ou conforme orientação profissional.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade, recomenda-se descontinuar o uso e consultar o médico. A beterraba pode ocasionar alteração temporária na coloração da urina ou das fezes, geralmente sem gravidade.</p><p>Pode haver interação com medicamentos para pressão alta, pois os nitratos presentes na beterraba podem potencializar seus efeitos. Nesses casos, consulte o médico antes de utilizar o produto. Não use com o prazo de validade vencido. Manter em temperatura ambiente, entre 15 e 30ºC, protegido da luz, do calor e da umidade e fora do alcance das crianças.</p><p>Mulheres grávidas não devem utilizar o produto sem orientação médica. O uso durante o período de amamentação não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica. Siga corretamente o modo de usar e, caso os sintomas não desapareçam, procure orientação médica. Imagens meramente ilustrativas.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "51",
    nome: "Bloomé 250mg - 30 Cápsulas",
    categoria: "quedacapilar",
    preco: 150.00,
    imagem: "assets/img/bloome-250mg-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Bloomé 250mg é um suplemento oral desenvolvido para o <strong>cuidado e a vitalidade dos cabelos</strong>, com ativos de origem natural que auxiliam na manutenção da saúde do couro cabeludo e no fortalecimento dos fios.</p>",
      oQueE: "<p>Bloomé 250mg é um suplemento oral formulado com ativos naturais de origem asiática, desenvolvido para complementar os cuidados com os cabelos. Sua fórmula reúne extratos de <em>Cudrania tricuspidata</em> e <em>Sargassum fusiforme</em>, associados ao suporte à saúde e à vitalidade capilar.</p><p>O produto é utilizado como auxiliar no <strong>cuidado dos fios e do couro cabeludo</strong>, contribuindo para sua vitalidade e fortalecimento. Seus componentes apresentam propriedades associadas à proteção contra o estresse oxidativo e à manutenção das condições fisiológicas do couro cabeludo.</p><p>É indicado para adultos que apresentam <strong>queda capilar, enfraquecimento dos fios ou alopecia androgenética</strong> e buscam uma opção oral para complementar os cuidados com a saúde capilar. Em casos de alopecia diagnosticada, recomenda-se acompanhamento e orientação de um médico ou dermatologista.</p>",
      composicao: "<ul>\n<li>Bloomé — 250mg</li>\n<li>Excipiente qsp 1 cápsula</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula</strong> após o café da manhã ou almoço.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade, recomenda-se descontinuar o uso e consultar o médico. Não utilize o produto com o prazo de validade vencido.</p><p>Manter em temperatura ambiente, entre 15 e 30ºC, protegido da luz, do calor e da umidade e fora do alcance das crianças. Mulheres grávidas não devem utilizar o produto sem orientação médica. O uso durante o período de amamentação não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica.</p><p>Siga corretamente o modo de usar. Caso os sintomas não desapareçam, procure orientação médica. Nunca compre ou utilize o produto sem orientação de um profissional habilitado. Imagens meramente ilustrativas.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "52",
    nome: "Bloomé 500mg - 30 Cápsulas",
    categoria: "quedacapilar",
    preco: 290.00,
    imagem: "assets/img/bloome-500mg-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Bloomé 500mg é um suplemento oral desenvolvido para o <strong>cuidado e a vitalidade dos cabelos</strong>, com ativos de origem natural que auxiliam na manutenção da saúde do couro cabeludo e no fortalecimento dos fios.</p>",
      oQueE: "<p>Bloomé 500mg é um suplemento oral formulado com ativos naturais de origem asiática, desenvolvido para complementar os cuidados com os cabelos. Sua fórmula reúne extratos de <em>Cudrania tricuspidata</em> e <em>Sargassum fusiforme</em>, associados ao suporte à saúde e à vitalidade capilar.</p><p>O produto é utilizado como auxiliar no <strong>cuidado dos fios e do couro cabeludo</strong>, contribuindo para sua vitalidade e fortalecimento. Seus componentes apresentam propriedades associadas à proteção contra o estresse oxidativo e à manutenção das condições fisiológicas do couro cabeludo.</p><p>É indicado para adultos que apresentam <strong>queda capilar, enfraquecimento dos fios ou alopecia androgenética</strong> e buscam uma opção oral para complementar os cuidados com a saúde capilar. Em casos de alopecia diagnosticada, recomenda-se acompanhamento e orientação de um médico ou dermatologista.</p>",
      composicao: "<p><strong>Cada 1 cápsula contém:</strong></p>\n<ul>\n<li>Bloomé — 500mg</li>\n<li>Excipiente qsp 1 cápsula</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula</strong> após o café da manhã ou almoço.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade, recomenda-se descontinuar o uso e consultar o médico. Não utilize o produto com o prazo de validade vencido.</p><p>Manter em temperatura ambiente, entre 15 e 30ºC, protegido da luz, do calor e da umidade e fora do alcance das crianças. Mulheres grávidas não devem utilizar o produto sem orientação médica. O uso durante o período de amamentação não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica.</p><p>Siga corretamente o modo de usar. Caso os sintomas não desapareçam, procure orientação médica. Nunca compre ou utilize o produto sem orientação de um profissional habilitado. Imagens meramente ilustrativas.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "53",
    nome: "Mitburn Dia Dia 50mg - 60 Cápsulas",
    categoria: "emagrecimento",
    preco: 150.00,
    imagem: "assets/img/mitburn-dia-dia-50mg-60-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Mitburn Dia Dia 50mg é um suplemento desenvolvido para auxiliar no <strong>gerenciamento do peso e do metabolismo energético</strong>, contribuindo para o uso de gordura como fonte de energia e para mais disposição na rotina.</p>",
      oQueE: "<p>Mitburn Dia Dia 50mg é um suplemento formulado com MITBURN e taurina, desenvolvido para complementar uma rotina voltada ao equilíbrio do metabolismo energético e ao gerenciamento da composição corporal.</p><p>O produto é utilizado como auxiliar no <strong>metabolismo energético e no gerenciamento do peso</strong>, contribuindo para processos relacionados ao uso de lipídios como fonte de energia e à termogênese. Sua proposta também contempla suporte à disposição e ao desempenho físico.</p><p>É recomendado para adultos que buscam <strong>auxílio no gerenciamento do peso, metabolismo energético e desempenho físico</strong>, especialmente quando associado a uma alimentação equilibrada e à prática regular de atividades físicas.</p>",
      composicao: "<ul>\n<li>MITBURN — 50MG</li>\n<li>TAURINA-L — 100MG</li>\n<li>Excipiente q.s.p 1 cápsula</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula</strong> após o café da manhã ou antes do treino.</p>",
      advertencias: "<p>Utilize o produto conforme as orientações de uso. Não exceda a recomendação de utilização. Em caso de dúvidas sobre o uso, especialmente na presença de condições de saúde específicas ou utilização de outros produtos, procure orientação de um profissional habilitado.</p><p>Manter o produto adequadamente armazenado e fora do alcance de crianças. Não utilize com o prazo de validade vencido. Imagens meramente ilustrativas.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "54",
    nome: "Menopausa / Climáterio - 30 Cápsulas",
    categoria: "saude",
    preco: 90.00,
    imagem: "assets/img/menopausa-climaterio.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Fórmula desenvolvida para complementar os cuidados relacionados ao <strong>climatério e à menopausa</strong>, reunindo diferentes componentes em uma apresentação prática para a rotina de cuidados com a saúde da mulher.</p>",
      oQueE: "<p>Menopausa / Climatério é uma fórmula composta por diferentes ingredientes, como magnésio, maca peruana, black cohosh, isoflavona, Morus nigra, vitex agnus castus e extratos vegetais, desenvolvida para integrar os cuidados durante essa fase da vida da mulher.</p><p>O produto tem como finalidade <strong>auxiliar nos cuidados relacionados ao climatério e à menopausa</strong>, oferecendo uma composição com diferentes ativos tradicionalmente utilizados nesse contexto. Sua utilização deve fazer parte de uma rotina de cuidados orientada de forma individualizada.</p><p>É destinado a mulheres que estejam vivenciando o <strong>climatério ou a menopausa</strong> e que busquem complementar seus cuidados nessa fase. A indicação e o uso devem considerar as necessidades individuais e, quando necessário, a orientação de um profissional de saúde.</p>",
      composicao: "<ul>\n<li>MAGNESIO — MG</li>\n<li>MACA PERUANA — MG</li>\n<li>BLACK COHOSH — MG</li>\n<li>YAM MEXICANO EXTRACT — MG</li>\n<li>ISOFLAVONA — MG</li>\n<li>MORUS NIGRA — MG</li>\n<li>QUERCETINA DIHIDRATADA — MG</li>\n<li>VITEX AGNUS CASTUS — MG</li>\n<li>RED CLOVER EXTRACT — MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada na embalagem ou na prescrição profissional.</p>",
      advertencias: "<p>Utilize este produto de acordo com as orientações do fabricante. Em caso de dúvidas sobre a utilização, procure orientação de um profissional de saúde. Mantenha o produto fora do alcance de crianças e conserve-o conforme as condições indicadas pelo fabricante.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "55",
    nome: "Verbascosideo +  Eclipta Alba - 30 Cápsulas",
    categoria: "quedacapilar",
    preco: 70.00,
    imagem: "assets/img/verbascosideo-eclipta-alba-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Uma fórmula desenvolvida para os cuidados com a <strong>saúde capilar</strong>, reunindo Verbascosideo e Eclipta Alba em uma composição direcionada ao cuidado dos cabelos e à proteção celular.</p>",
      oQueE: "<p>Verbascosideo + Eclipta Alba é uma fórmula composta por dois ativos, Verbascosideo e Eclipta Alba extrato seco, desenvolvida para integrar uma rotina de cuidados voltada à <strong>saúde capilar</strong> e ao equilíbrio celular.</p><p>Sua finalidade está relacionada principalmente aos <strong>cuidados com a queda capilar</strong> e ao estímulo dos cuidados com os cabelos, além de fornecer componentes associados à ação antioxidante e ao cuidado da pele e do equilíbrio celular.</p><p>É indicado para pessoas que buscam complementar sua rotina de cuidados com os cabelos, especialmente aquelas interessadas em <strong>cuidados capilares e redução da queda</strong>. A utilização deve considerar as necessidades individuais e, quando necessário, contar com orientação de um profissional de saúde.</p>",
      composicao: "<ul>\n<li>VERBASCOSIDEO — 15MG</li>\n<li>ECLIPTA ALBA EXTRATO SECO — 150MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada na embalagem ou na orientação profissional.</p>",
      advertencias: "<p>Utilize este produto de acordo com as orientações do fabricante. Em caso de dúvidas sobre a utilizaç��o, procure orientação de um profissional de saúde. Mantenha o produto fora do alcance de crianças e conserve-o conforme as condições indicadas pelo fabricante.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "56",
    nome: "TESTO BLACK FEMME - 60 Cápsulas",
    categoria: "desempenhofisico",
    preco: 70.00,
    imagem: "assets/img/testo-black-femme-60-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>Testo Black Femme</strong> é uma fórmula em cápsulas desenvolvida para complementar a rotina de suplementação, com foco em vitalidade, desempenho físico e sexual e suporte aos níveis de testosterona.</p>",
      oQueE: "<p>Testo Black Femme é um suplemento em cápsulas composto por Feno Grego, Selenoforce, Maca Peruana, Arginina Cloridrato, Picolinato de Cromo e Ginseng Panax, desenvolvido para integrar uma rotina de cuidados voltada à <strong>energia, vitalidade e desempenho</strong>.</p><p>Sua finalidade está relacionada ao suporte aos níveis de testosterona, ao aumento do fluxo sanguíneo e ao desempenho físico e sexual, conforme a finalidade informada para o produto. Sua utilização deve ser associada a hábitos de vida equilibrados e prática regular de exercícios.</p><p>De acordo com as informações fornecidas, o produto é destinado a <strong>adultos</strong> que buscam complementar sua rotina de suplementação com foco em vitalidade, desempenho físico e sexual e desenvolvimento muscular. Recomenda-se acompanhamento médico antes de iniciar a suplementação.</p>",
      composicao: "<ul>\n<li>FENO GREGO EXTRATO — 125MG</li>\n<li>SELENOFORCE — 12,5MCG</li>\n<li>MACA PERUANA — 150MG</li>\n<li>ARGINA CLORIDRATO — 150MG</li>\n<li>PICOLINATO DE CROMO — 75MCG</li>\n<li>GINSENG PANAX — 100MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Para resultados eficazes, recomenda-se o uso contínuo com a ingestão de <strong>2 cápsulas ao dia</strong>. Siga o passo a passo para maximizar os benefícios.</p><p><strong>Uso diário:</strong> Tomar 2 cápsulas do Testo Black com água, preferencialmente 30 minutos antes do treino, para garantir uma ação constante no aumento dos níveis de testosterona e na melhoria do desempenho físico.</p><p><strong>Rotina de treinamento:</strong> Combine o uso do Testo Black com uma rotina de exercícios regulares para potencializar os efeitos do suplemento e maximizar os ganhos em força e resistência.</p><p><strong>Acompanhe os resultados:</strong> Após algumas semanas de uso contínuo, observe as melhorias na força, resistência e vitalidade geral, acompanhando a evolução do seu desempenho físico e bem-estar.</p>",
      advertencias: "<p>Não deve ser utilizado por mulheres, sendo indicado, conforme as informações fornecidas, para uso exclusivo por homens. Não se deve utilizar Ginseng no curso de enfermidades agudas, trombose coronária, doenças cardíacas severas e hemorragias. Pessoas com hipersensibilidade nervosa, esquizofrenia ou histeria devem ter atenção especial.</p><p>Deverão ser tomados cuidados em caso de hipertensão arterial, terapias estrogênicas e diabetes. Alguns ativos podem interagir com medicamentos ou condições de saúde específicas. A administração de Tadalafil a pacientes em uso de qualquer forma de nitrato orgânico é contraindicada, pois pode potencializar os efeitos hipotensivos dos nitratos. A administração concomitante com antiácidos, como hidróxido de magnésio e hidróxido de alumínio, diminui a absorção de tadalafil.</p><p>Não deve ser usado em pacientes com insuficiência hepática ou renal grave. Tadalafil não é indicado para homens que não apresentam disfunção erétil. Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico.</p><p>Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente, entre 15 e 30ºC, protegido da luz, do calor e da umidade. Manter fora do alcance das crianças. Nunca compre um produto sem orientação de um profissional habilitado. Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. O uso durante o período de amamentação também não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica. Siga corretamente o modo de usar.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "57",
    nome: "TESTO BLACK - 30 Cápsulas",
    categoria: "desempenhofisico",
    preco: 100.00,
    imagem: "assets/img/testo-black-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>Testo Black</strong> é uma fórmula em cápsulas desenvolvida para homens que buscam suporte à <strong>vitalidade, energia e desempenho físico e sexual</strong>, integrando diferentes componentes em uma única apresentação.</p>",
      oQueE: "<p>O <strong>Testo Black</strong> é um produto em cápsulas composto por Epimedium Icariin, Long Jack, Ginseng Coreano e Tadalafil, desenvolvido para homens que buscam uma opção voltada ao suporte da vitalidade, disposição e desempenho.</p><p>Sua finalidade está relacionada ao <strong>suporte à libido, à produção natural de testosterona, à energia, à disposição e ao desempenho físico e sexual</strong>. Entre os componentes da fórmula, o Long Jack (Eurycoma longifolia) é associado ao suporte aos níveis de testosterona, enquanto o Ginseng Coreano é tradicionalmente utilizado como adaptógeno. O Epimedium Icariin é associado ao suporte à libido e ao desempenho sexual.</p><p>O produto é destinado a <strong>homens que buscam maior vitalidade e disposição</strong>, incluindo aqueles interessados em suporte ao desempenho físico, à força, à energia diária e ao desempenho sexual. Mulheres não devem consumir o produto.</p>",
      composicao: "<ul>\n<li>EPIMEDIUM ICARIIN — 200MG</li>\n<li>LONG JACK EXTRATO SECO — 300MG</li>\n<li>GINSENG COREANO — 80MG</li>\n<li>TADALAFIL — 3MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Para resultados eficazes, recomenda-se o uso contínuo com a ingestão de <strong>2 cápsulas ao dia</strong>. Siga o passo a passo para maximizar os benefícios:</p><p><strong>Uso diário:</strong> Tomar 2 cápsulas do Testo Black com água, preferencialmente 30 minutos antes do treino, para garantir uma ação constante no aumento dos níveis de testosterona e na melhoria do desempenho físico.</p><p><strong>Rotina de treinamento:</strong> Combine o uso do Testo Black com uma rotina de exercícios regulares para potencializar os efeitos do suplemento e maximizar os ganhos em força e resistência.</p><p><strong>Acompanhe os resultados:</strong> Após algumas semanas de uso contínuo, observe as melhorias na força, resistência e vitalidade geral, acompanhando a evolução do seu desempenho físico e bem-estar.</p>",
      advertencias: "<p>Este produto contém <strong>Tadalafil 3mg</strong> em sua composição. Por se tratar de um princípio ativo de uso medicinal, seu consumo deve ser realizado somente conforme orientação de profissional de saúde. Não utilize o produto sem avaliação adequada quanto à sua indicação e ao seu uso.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "58",
    nome: "TESTO PRIME MAM - 30 Cápsulas",
    categoria: "desempenhofisico",
    preco: 100.00,
    imagem: "assets/img/testo-prime-mam.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>TESTO PRIME MAM é uma formulação voltada à <strong>performance masculina</strong>, reunindo ativos selecionados para complementar estratégias relacionadas à vitalidade, disposição, libido e desempenho sexual masculino.</p>",
      oQueE: "<p>TESTO PRIME MAM é uma formulação destinada ao público masculino, composta por Epimedium Icariin, Long Jack, Ginseng Coreano e Tadalafil, combinando diferentes componentes em uma apresentação prática de 30 cápsulas.</p><p>Sua finalidade está relacionada à <strong>vitalidade, libido, disposição e desempenho sexual masculino</strong>, oferecendo uma formulação direcionada às necessidades de homens que buscam suporte para sua performance e bem-estar.</p><p>É indicado para <strong>homens adultos</strong> quando houver indicação e orientação adequada de profissional habilitado, especialmente por conter tadalafil em sua composição.</p>",
      composicao: "<ul>\n<li>EPIMEDIUM ICARIIN — 200MG</li>\n<li>LONG JACK EXTRATO SECO — 300MG</li>\n<li>GINSENG COREANO — 80MG</li>\n<li>TADALAFIL — 3MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante ou orientação de profissional habilitado</strong>. Não altere a forma de utilização, dose ou frequência recomendada sem orientação profissional.</p>",
      advertencias: "<p>Uso conforme orientação do fabricante e de profissional habilitado. Por conter tadalafil, sua utilização deve ser realizada com <strong>orientação profissional adequada</strong>. Não utilize de forma diferente da recomendada na prescrição ou orientação recebida.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "59",
    nome: "BLACK GINGER POWER PRE-TREINO- 15 Cápsulas",
    categoria: "desempenhofisico",
    preco: 120.00,
    imagem: "assets/img/black-ginger-power-pre-treino-15-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>BLACK GINGER POWER PRE-TREINO é uma formulação desenvolvida para complementar a rotina de treinos, com foco em <strong>energia, resistência e performance física</strong>, reunindo ativos relacionados ao suporte ao desempenho durante exercícios.</p>",
      oQueE: "<p>BLACK GINGER POWER PRE-TREINO é uma formulação em cápsulas que reúne diferentes ativos selecionados para integrar estratégias voltadas à <strong>performance esportiva</strong>, resistência e capacidade de treinamento.</p><p>Sua finalidade está relacionada ao suporte à <strong>energia, disposição, resistência e desempenho físico</strong> durante a prática de exercícios. A presença de NO3, AAKG e Norvaline também direciona a formulação para o suporte relacionado ao fluxo sanguíneo e à performance durante o treinamento.</p><p>É destinado a <strong>adultos fisicamente ativos</strong> que buscam complementar sua rotina de exercícios com uma formulação direcionada à performance e resistência. Seu uso deve considerar as orientações do fabricante ou de profissional habilitado.</p>",
      composicao: "<ul>\n<li>BLACK GINGER — POWDER</li>\n<li>BLACK GINGER — MG</li>\n<li>PHYTOTESTO — MG</li>\n<li>FURASTANOL (FENOSIDEO) — MG</li>\n<li>PIPERINA — MG</li>\n<li>ENDURFIT — MG</li>\n<li>NO3 — MG</li>\n<li>AAKG — MG</li>\n<li>NORVALINE — MG</li>\n<li>COBRE QUELATO — MG</li>\n<li>ZINCO QUELATO — MG</li>\n<li>MANGANES QUELATO — MG</li>\n<li>FERRO QUELATO — MG</li>\n<li>SELENIO METIONINA — MCG</li>\n<li>COLEUS FORSKOHLII EXTRATO — MG</li>\n<li>EGCG 98% ��� MG</li>\n<li>THIOMUCASE — UTR</li>\n</ul><p><strong>Apresentação:</strong> 15 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante ou orientação de profissional habilitado</strong>. Não altere a dose, frequência ou forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Utilize o produto de acordo com as orientações do fabricante e, quando necessário, com acompanhamento de profissional habilitado. Não exceda a recomendação de uso indicada na embalagem ou orientação recebida.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "60",
    nome: "CLASCOTERONA - ACNE - Creme 15g",
    categoria: "beleza",
    preco: 150.00,
    imagem: "assets/img/clascoterona-acne-creme-15g.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>CLASCOTERONA - ACNE é um medicamento de uso tópico desenvolvido para o <strong>tratamento da acne vulgar</strong>, com clascoterona 1% em uma formulação em creme para aplicação sobre a pele.</p>",
      oQueE: "<p>CLASCOTERONA - ACNE é uma formulação tópica em creme que contém <strong>clascoterona 1%</strong>, ativo direcionado ao tratamento da acne vulgar e desenvolvido para atuar localmente sobre os receptores androgênicos da pele.</p><p>Sua finalidade é auxiliar no <strong>tratamento tópico da acne vulgar</strong>, especialmente nos quadros em que a atividade androgênica da pele participa dos processos relacionados à produção de sebo e à inflamação.</p><p>Pode ser indicado para <strong>pessoas com acne vulgar</strong>, conforme avaliação e prescrição de médico ou outro profissional habilitado, considerando as características individuais da pele e a necessidade de tratamento tópico.</p>",
      composicao: "<ul>\n<li>CLASCOTERONA — 1%</li>\n<li>SKINBIOTICS LACTO B — 2%</li>\n<li>ESSENCIA — 1%</li>\n<li>HYDRA FRESH — 15GR</li>\n</ul><p><strong>Apresentação:</strong> Creme - 15 gramas</p>",
      comoUsar: "<p>Aplicar <strong>conforme orientação médica ou prescrição profissional</strong>. Utilizar exclusivamente sobre a pele, na área indicada, seguindo a quantidade, frequência e duração do tratamento determinadas pelo profissional responsável.</p>",
      advertencias: "<p>Uso tópico. Utilize o produto de acordo com a prescrição médica ou orientação de profissional habilitado. Evite utilizar o produto de forma diferente da recomendada e observe a resposta da pele durante o tratamento.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "61",
    nome: "BACOPA MONNIERI 500mg - 30 Cápsulas",
    categoria: "saude",
    preco: 50.00,
    imagem: "assets/img/bacopa-monnieri-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>Bacopa Monnieri 500 mg</strong> é um suplemento alimentar em cápsulas desenvolvido para complementar a rotina de adultos que buscam suporte à função cognitiva, clareza mental, foco e equilíbrio diante das demandas do dia a dia.</p>",
      oQueE: "<p>O <strong>Bacopa Monnieri</strong> é um suplemento alimentar elaborado a partir da planta tradicionalmente utilizada na medicina ayurvédica. Sua composição contém 500 mg de Bacopa Monnieri por cápsula, oferecendo uma forma prática de incluir esse ingrediente na rotina.</p><p>O produto é destinado a oferecer <strong>suporte à função cognitiva</strong>, especialmente em períodos que exigem atenção, concentração e desempenho mental, como estudos, trabalho intelectual e jornadas prolongadas. Também pode complementar uma rotina voltada ao equilíbrio diante de períodos de maior estresse.</p><p>É destinado a <strong>adultos</strong> que buscam complementar sua rotina com suporte à memória, concentração e clareza mental. Pode ser uma opção para estudantes, profissionais que realizam atividades intelectuais e pessoas que enfrentam períodos de maior demanda mental e estresse cotidiano.</p>",
      composicao: "<ul>\n<li>Bacopa Monnieri — 500 mg</li>\n<li>Excipiente q.s.p 1 cápsula</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula por dia</strong> com água, preferencialmente durante as refeições, conforme orientação profissional.</p>",
      advertencias: "<p>Este produto deve ser utilizado conforme a posologia indicada e a orientação de profissional habilitado. Não altere a quantidade ou a frequência de uso sem orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "62",
    nome: "LONG JACK 200mg - 30 Cápsulas",
    categoria: "desempenhofisico",
    preco: 50.00,
    imagem: "assets/img/long-jack-200mg-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>Long Jack 200mg</strong> é um suplemento alimentar desenvolvido para adultos que buscam suporte à vitalidade, disposição, desempenho físico e sexual, além de contribuir para uma rotina voltada ao equilíbrio e bem-estar.</p>",
      oQueE: "<p>O Long Jack é um suplemento alimentar em cápsulas à base de <strong>extrato seco de Long Jack</strong>, também conhecido como Tongkat Ali. Cada cápsula fornece 200mg do ingrediente, em uma apresentação prática para uso diário.</p><p>Sua finalidade é oferecer suporte aos níveis naturais de testosterona, à <strong>vitalidade e função sexual</strong>, além de auxiliar pessoas que buscam melhorar o desempenho físico e mental e manter uma rotina de maior disposição. Estudos citados na descrição do produto avaliaram seu uso em diferentes contextos relacionados à saúde hormonal, fertilidade, estresse e bem-estar.</p><p>É indicado para <strong>adultos saudáveis</strong> que buscam suporte à vitalidade e aos níveis naturais de testosterona, pessoas interessadas em libido e função sexual e praticantes de atividades físicas que desejam complementar sua rotina em busca de força, resistência e ganho muscular.</p>",
      composicao: "<ul>\n<li>LONG JACK EXTRATO SECO — 200MG</li>\n<li>Excipiente — q.s.p.</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Para resultados eficazes, recomenda-se o uso contínuo, ingerindo <strong>1 cápsula ao dia</strong> com um copo de água. O Long Jack pode ser tomado em dois momentos diferentes, dependendo dos seus objetivos: antes do treino, para otimizar o desempenho físico, ou ao acordar, para começar o dia com mais disposição e energia.</p><p><strong>A consistência é fundamental:</strong> utilize diariamente para manter os efeitos constantes. Com o uso contínuo, acompanhe os resultados relacionados aos níveis de energia, desempenho físico e mental e função sexual.</p>",
      advertencias: "<p>Utilize o produto conforme a posologia indicada. Em caso de dúvidas sobre o uso, recomenda-se buscar orientação de um profissional de saúde.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "63",
    nome: "TREONINA-L 500mg - 60 Cápsulas",
    categoria: "beleza",
    preco: 40.00,
    imagem: "assets/img/treonina-l-500mg-60-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A <strong>TREONINA-L 500mg</strong> fornece L-treonina, um aminoácido essencial que participa da síntese de proteínas e contribui para processos relacionados à produção de colágeno e elastina e ao funcionamento do sistema nervoso central.</p>",
      oQueE: "<p>A <strong>L-Treonina</strong> é um aminoácido essencial que o organismo não produz sozinho, sendo necessário obtê-lo por meio da alimentação ou suplementação. A TREONINA-L 500mg oferece esse aminoácido em cápsulas, de forma prática e direta.</p><p>A treonina está presente na estrutura de diversas proteínas e participa da síntese de glicina e serina, compostos relacionados à produção de <strong>colágeno e elastina</strong>. Também contribui para o balanço proteico geral do organismo e para o funcionamento do sistema nervoso central.</p><p>É indicada para <strong>adultos</strong> que buscam suporte à firmeza da pele e ao equilíbrio do sistema nervoso central, incluindo veganos e vegetarianos que podem apresentar menor ingestão desse aminoácido pela alimentação. Seu uso deve seguir a orientação de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>L-TREONINA — 500MG</li>\n<li>excipiente q.s.p.</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula ao dia</strong>, preferencialmente junto com uma das principais refeições ou conforme orientação de um profissional.</p>",
      advertencias: "<p>Este produto não deve ser utilizado por gestantes, lactantes, crianças ou menores de 18 anos sem orientação médica. O uso durante a amamentação também não é recomendado. Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade, descontinue o uso e consulte um médico.</p><p>Não use o produto com o prazo de validade vencido. Siga corretamente o modo de usar. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade, fora do alcance das crianças. Nunca compre um produto sem orientação de um profissional habilitado. Imagens meramente ilustrativas.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "64",
    nome: "PILL FOOD TUBIRNADO - 90 Cápsulas",
    categoria: "beleza",
    preco: 80.00,
    imagem: "assets/img/pill-food-tubirnado-90-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>PILL FOOD TURBINADO</strong> é um suplemento formulado com vitaminas, proteínas e aminoácidos, desenvolvido para complementar a rotina de cuidados com <strong>cabelos, pele e unhas</strong>.</p>",
      oQueE: "<p>O Pill Food Turbinado é um composto que reúne diferentes nutrientes, vitaminas e aminoácidos, incluindo metionina, cisteína, cistina, complexo B, vitamina E, biotina, silício e outros componentes, em uma apresentação prática de cápsulas.</p><p>Sua finalidade é contribuir para o <strong>fortalecimento dos cabelos</strong>, melhorar a aparência da pele e favorecer unhas mais resistentes. Pode ser utilizado como parte da rotina de autocuidado, especialmente em períodos de estresse, dietas, uso frequente de química nos fios, alterações hormonais e queda capilar temporária.</p><p>É recomendado para <strong>homens e mulheres</strong> que desejam cuidar da saúde e aparência dos cabelos, pele e unhas, inclusive pessoas que utilizam tinturas, alisamentos, descolorações ou progressivas. Pessoas veganas devem consultar um profissional antes do uso, pois a fórmula contém colágeno hidrolisado, geralmente de origem animal.</p>",
      composicao: "<ul>\n<li>PILL FOOD — TURBINADO</li>\n<li>METIONINA — MG</li>\n<li>CISTEINA — MG</li>\n<li>CISTINA-L — MG</li>\n<li>PANTOTENATO DE CALCIO — MG</li>\n<li>COMPLEXO B — MG</li>\n<li>VITAMINA E PO — MG</li>\n<li>SELENIO QUELATO — MG</li>\n<li>ACIDO AMINOBENZOICO — MG</li>\n<li>QUERATINA PO — MG</li>\n<li>BIOTINA — MG</li>\n<li>SILICIO QUELATO — MG</li>\n</ul><p><strong>Apresentação:</strong> 90 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula duas vezes ao dia</strong>, preferencialmente antes do almoço e do jantar.</p>",
      advertencias: "<p>A administração de colágeno hidrolisado em pó não é recomendada para pessoas portadoras de doenças renais e hepáticas, com níveis elevados de ácido úrico ou gota. Pessoas com hipersensibilidade à substância não devem usar o produto. Em caso de hipersensibilidade, recomenda-se descontinuar o uso e consultar o médico.</p><p>Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade, e fora do alcance das crianças. Mulheres grávidas, lactantes e menores de 18 anos não devem utilizar o produto sem orientação médica. Nunca compre um produto sem orientação de um profissional habilitado. Siga corretamente o modo de usar.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "65",
    nome: "PANTOGAR TURBINADO - 60 Cápsulas",
    categoria: "beleza",
    preco: 90.00,
    imagem: "assets/img/pantogar-turbinado-60-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Suporte nutricional para <strong>cabelos e unhas</strong>, com combinação de nutrientes envolvidos na formação e manutenção da queratina, contribuindo para uma rotina de cuidados voltada à saúde e resistência dos fios e unhas.</p>",
      oQueE: "<p>O <strong>Pantogar Turbinado</strong> é uma fórmula composta por nutrientes como aminoácidos, vitaminas, queratina, biotina, silício e ferro, desenvolvida para oferecer <strong>suporte nutricional aos cabelos e unhas</strong>.</p><p>Sua composição é utilizada como complemento nutricional em situações relacionadas a <strong>cabelos fracos, quebradiços ou afinados</strong> e unhas frágeis, além de fornecer nutrientes envolvidos no metabolismo e na formação de estruturas queratinizadas. A biotina, a cisteína e a queratina, por exemplo, estão relacionadas à estrutura dos fios e unhas, enquanto o ferro participa do transporte de oxigênio pelo organismo.</p><p>Pode ser recomendado para adultos que buscam <strong>suporte nutricional para cabelos e unhas</strong>, especialmente quando existe necessidade de complementar a ingestão de determinados nutrientes. A indicação deve considerar as características individuais e, quando necessário, a orientação de um profissional de saúde.</p>",
      composicao: "<ul>\n<li>Pantotenato de cálcio — MG</li>\n<li>Cisteína — MG</li>\n<li>Tiamina cloridrato — MG</li>\n<li>Levedura medicinal — MG</li>\n<li>Queratina pó — MG</li>\n<li>Ácido aminobenzoico — MG</li>\n<li>Biotina — MG</li>\n<li>Silício quelato — MG</li>\n<li>Ferro quelato — MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante</strong> ou de acordo com a orientação de médico, nutricionista ou outro profissional de saúde habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Este produto deve ser utilizado de acordo com sua finalidade e orientação de uso. <strong>Não exceda a recomendação de uso</strong> indicada pelo fabricante ou profissional de saúde. Mantenha fora do alcance de crianças e conserve o produto conforme as orientações de armazenamento da embalagem.</p><p>Em caso de dúvidas sobre a utilização, especialmente durante períodos de gestação, amamentação ou diante de condições específicas de saúde, procure orientação de um profissional de saúde antes do uso.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "66",
    nome: "OLIVE LEAF EXTRACT - 30 Cápsulas",
    categoria: "saude",
    preco: 50.00,
    imagem: "assets/img/olive-leaf-extract-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Suplemento à base de <strong>extrato de folha de oliveira</strong>, padronizado em 10% de hidroxitirosol, desenvolvido para complementar a ingestão de compostos fenólicos e oferecer suporte nutricional com foco na <strong>ação antioxidante</strong>.</p>",
      oQueE: "<p>O <strong>Olive Leaf Extract</strong> é um suplemento alimentar elaborado com extrato de folhas da oliveira (Olea europaea), padronizado para fornecer 10% de hidroxitirosol, um dos principais compostos fenólicos presentes na oliveira.</p><p>Sua composição fornece <strong>compostos fenólicos com atividade antioxidante</strong>, podendo integrar estratégias nutricionais voltadas ao suporte da proteção celular contra o estresse oxidativo e ao consumo adequado de polifenóis. Os compostos da oliveira também são estudados em relação à saúde cardiovascular e a parâmetros metabólicos.</p><p>É indicado para adultos que buscam <strong>suporte nutricional antioxidante</strong> e desejam complementar sua alimentação com compostos fenólicos provenientes do extrato de folha de oliveira. A utilização deve considerar as necessidades individuais e, quando necessário, contar com orientação de um profissional de saúde.</p>",
      composicao: "<ul>\n<li>OLIVE LEAF 10% HIDROXITIROSOL — 300MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante</strong> ou de acordo com a orientação de médico, nutricionista ou outro profissional de saúde habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Este produto deve ser utilizado de acordo com sua finalidade e orientação de uso. <strong>Não exceda a recomendação de uso</strong> indicada pelo fabricante ou profissional de saúde. Mantenha fora do alcance de crianças e conserve o produto conforme as orientações de armazenamento da embalagem.</p><p>Este produto não substitui uma alimentação equilibrada nem tratamentos prescritos por profissionais de saúde. Em caso de dúvidas sobre a utilização, procure orientação de um profissional de saúde.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "67",
    nome: "RED YEAST RICE 300mg - 60 Cápsulas",
    categoria: "saude",
    preco: 60.00,
    imagem: "assets/img/red-yeast-rice-300mg-60-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Suplemento alimentar à base de <strong>arroz vermelho fermentado</strong>, fonte de compostos bioativos tradicionalmente estudados por sua relação com o metabolismo lipídico, especialmente como complemento de uma alimentação equilibrada e de hábitos de vida saudáveis.</p>",
      oQueE: "<p>O <strong>Red Yeast Rice</strong> é um suplemento alimentar elaborado a partir do arroz vermelho fermentado, processo que pode resultar na formação de diferentes compostos bioativos, incluindo monacolinas. É um ingrediente tradicionalmente utilizado e estudado por sua relação com o metabolismo das gorduras.</p><p>Sua finalidade está relacionada ao <strong>suporte ao metabolismo lipídico</strong>, fornecendo compostos provenientes do processo de fermentação do arroz. Os componentes presentes no arroz vermelho fermentado são estudados principalmente em relação ao metabolismo do colesterol, dentro de uma abordagem que também considera alimentação equilibrada e hábitos de vida saudáveis.</p><p>É destinado a adultos que buscam <strong>suporte nutricional para o metabolismo lipídico</strong> e desejam complementar sua rotina com um ingrediente de origem fermentada. A utilização deve considerar as características individuais e, especialmente quando houver uso de medicamentos ou acompanhamento por alterações metabólicas, contar com orientação de um profissional de saúde.</p>",
      composicao: "<ul>\n<li>RED YEAST RICE — 300MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante</strong> ou de acordo com a orientação de médico, nutricionista ou outro profissional de saúde habilitado. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>Este produto deve ser utilizado de acordo com as orientações do fabricante. <strong>Não exceda a recomendação de uso</strong> indicada na embalagem ou por profissional de saúde.</p><p>O arroz vermelho fermentado pode conter monacolinas, cuja quantidade pode variar de acordo com a matéria-prima e o processo de fabricação. Pessoas que utilizam medicamentos ou possuem condições específicas de saúde devem consultar um profissional de saúde antes de utilizar o produto.</p><p>O suplemento não deve ser utilizado para substituir medicamentos, tratamentos prescritos ou uma alimentação equilibrada. Mantenha fora do alcance de crianças e conserve o produto de acordo com as orientações de armazenamento do fabricante.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "68",
    nome: "CYANOTIS VAGA EXTRATO 200mg - 60 Cápsulas",
    categoria: "desempenhofisico",
    preco: 150.00,
    imagem: "assets/img/cyanotis-vaga-extrato-200mg-60-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Suplemento à base de <strong>extrato de Cyanotis vaga</strong>, desenvolvido para integrar estratégias de suplementação esportiva voltadas ao suporte à massa muscular, resistência e desempenho físico.</p>",
      oQueE: "<p>O <strong>Cyanotis Vaga Extrato</strong> é um suplemento à base do extrato da planta Cyanotis vaga, fonte de compostos bioativos como a beta-ecdisterona ou beta-ecdisona. O ingrediente é utilizado em formulações de suplementação alimentar e em diferentes aplicações.</p><p>Sua utilização está associada a estratégias de <strong>suporte ao desempenho físico e à composição corporal</strong>, especialmente em contextos de treinamento e atividade física. O produto pode complementar uma rotina voltada ao desenvolvimento e à manutenção da massa muscular, sem substituir alimentação adequada, treinamento ou acompanhamento profissional.</p><p>É destinado a adultos que praticam atividades físicas e buscam <strong>suporte nutricional para seus objetivos esportivos</strong>, especialmente aqueles relacionados à massa muscular, resistência e desempenho físico. A utilização deve considerar as características individuais e, quando necessário, contar com orientação de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>CYANOTIS VAGA EXTRATO — 200MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula ao dia, 1 hora antes dos exercícios</strong>, ou conforme orientação de profissional habilitado.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade.</p><p>Manter fora do alcance das crianças. Este produto não deve ser utilizado por mulheres grávidas ou durante o período de amamentação sem orientação médica. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica. Siga corretamente o modo de usar. Nunca compre medicamento sem orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "69",
    nome: "Ácido Tricloroacético 60% - Solução 10ml",
    categoria: "podologia",
    preco: 47.00,
    imagem: "assets/img/acido-tricloroacetico-60-solucao-10ml.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Solução de <strong>Ácido Tricloroacético 60%</strong>, destinada ao uso profissional em procedimentos podológicos específicos que necessitam de ação química controlada.</p>",
      oQueE: "<p>O Ácido Tricloroacético 60% é uma solução de uso profissional formulada com alta concentração de ácido tricloroacético, indicada para aplicações específicas em procedimentos podológicos.</p><p>É utilizado em <strong>procedimentos podológicos específicos</strong> que necessitam de ação química controlada, conforme avaliação e indicação profissional.</p><p>É recomendado para <strong>profissionais habilitados</strong> que realizam procedimentos podológicos nos quais a utilização do ácido tricloroacético esteja devidamente indicada.</p>",
      composicao: "<ul>\n<li>Ácido Tricloroacético — 60%</li>\n<li>Veículo — 10ml</li>\n</ul><p><strong>Apresentação:</strong> Solução 10ml — Validade 4 meses</p>",
      comoUsar: "<p>Utilize o produto exclusivamente conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de profissional habilitado. Não utilize dose, frequência ou horário diferentes daqueles recomendados para o produto.</p>",
      advertencias: "<p>Produto destinado ao <strong>uso profissional</strong>. A utilização deve ser realizada de acordo com a finalidade indicada e mediante avaliação profissional. Em caso de dúvidas sobre a utilização, procure orientação de profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "70",
    nome: "TPC COM CLOMIFENO - 60 Cápsulas",
    categoria: "desempenhofisico",
    preco: 200.00,
    imagem: "assets/img/tpc-com-clomifeno-60-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p><strong>TPC com Clomifeno</strong> é uma fórmula desenvolvida para auxiliar na <strong>recuperação e equilíbrio hormonal masculino</strong>, oferecendo suporte à produção natural de testosterona, libido, disposição, próstata e metabolismo.</p>",
      oQueE: "<p>O <strong>TPC com Clomifeno</strong> é uma fórmula composta por ativos selecionados para oferecer suporte ao <strong>equilíbrio hormonal masculino</strong>, especialmente em situações relacionadas à redução da produção natural de testosterona.</p><p>Sua finalidade é <strong>auxiliar na recuperação do equilíbrio hormonal</strong>, contribuindo para o suporte à produção natural de testosterona, à libido e à disposição, além de oferecer componentes voltados ao suporte da próstata, função urinária, fígado e metabolismo.</p><p>Pode ser indicado para <strong>homens que necessitam de suporte à recuperação e ao equilíbrio hormonal</strong>, conforme avaliação e orientação de profissional habilitado. A utilização de seus componentes hormonais deve ser acompanhada por orientação profissional.</p>",
      composicao: "<ul>\n<li>Silimarina — 150MG</li>\n<li>Pygeum Africanum — 80MG</li>\n<li>Indol 3 Carbinol — 30MG</li>\n<li>Urtiga Dioica Extrato Seco — 80MG</li>\n<li>Tribulus Terrestris L. — 200MG</li>\n<li>Metionina — 50MG</li>\n<li>Tamoxifeno Citrato — 10MG</li>\n<li>Clomifeno Cloridrato — 50MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante ou orientação de profissional habilitado</strong>. Não utilize por conta própria nem altere a forma de uso recomendada.</p>",
      advertencias: "<p>Este produto deve ser utilizado de acordo com as orientações do fabricante ou de profissional habilitado. Em caso de dúvidas sobre sua utilização, procure orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "71",
    nome: "BOSWELLIA SERRATA - 30 Cápsulas",
    categoria: "saude",
    preco: 50.00,
    imagem: "assets/img/boswellia-serrata-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p><strong>Boswellia Serrata</strong> é uma fórmula desenvolvida para oferecer suporte ao <strong>conforto e à saúde das articulações</strong>, com foco no bem-estar e na manutenção da mobilidade.</p>",
      oQueE: "<p>A <strong>Boswellia Serrata</strong> é um extrato obtido de uma planta tradicionalmente utilizada na medicina e conhecida por seus componentes associados ao suporte do <strong>equilíbrio da resposta inflamatória</strong> do organismo.</p><p>Sua utilização está relacionada ao suporte à <strong>saúde e ao conforto das articulações</strong>, podendo auxiliar na manutenção da mobilidade e da flexibilidade. Também é estudada por seu potencial de contribuir para o bem-estar em situações relacionadas ao desconforto articular.</p><p>Pode ser indicada para <strong>adultos que buscam suporte para a saúde das articulações, mobilidade e conforto físico</strong>, especialmente quando houver orientação de um profissional habilitado para sua utilização.</p>",
      composicao: "<ul>\n<li>BOSWELLIA SERRATA 30% — 50MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante ou orientação de profissional habilitado</strong>. Não altere a forma de uso recomendada e, em caso de dúvidas, procure orientação profissional.</p>",
      advertencias: "<p>O uso do produto é contraindicado para pessoas com <strong>cálculo biliar, obstrução dos ductos biliares ou úlcera gastroduodenal</strong>, bem como para pessoas com hipersensibilidade à substância. Não deve ser utilizado simultaneamente com anticoagulantes sem orientação profissional.</p><p>Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar um médico. Este produto não deve ser utilizado por mulheres grávidas ou durante o per��odo de amamentação sem orientação médica. Não deve ser utilizado por menores de 18 anos sem orientação médica.</p><p>Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade e fora do alcance das crianças. Nunca compre medicamento sem orientação de um profissional habilitado. Siga corretamente o modo de usar. Imagens meramente ilustrativas.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "72",
    nome: "SILICIO ORGANICO 300mg - 30 Cápsulas",
    categoria: "saude",
    preco: 80.00,
    imagem: "assets/img/silicio-organico-300mg-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p><strong>Silício Orgânico 300 mg</strong> é uma fórmula desenvolvida para oferecer suporte à <strong>saúde da pele, cabelos, unhas, ossos e tecidos conjuntivos</strong>, contribuindo para a manutenção da estrutura e do bem-estar do organismo.</p>",
      oQueE: "<p>O <strong>Silício Orgânico 300 mg</strong> é uma fórmula que fornece silício orgânico, mineral relacionado à estrutura e à manutenção dos tecidos conjuntivos, incluindo componentes como colágeno e elastina.</p><p>Sua utilização está associada ao suporte à <strong>firmeza e elasticidade da pele</strong>, à estrutura e resistência dos cabelos e unhas, além da manutenção dos tecidos conjuntivos e do metabolismo ósseo.</p><p>Pode ser indicado para <strong>adultos que buscam suporte nutricional para a saúde da pele, cabelos, unhas, ossos e tecidos conjuntivos</strong>, especialmente quando houver orientação de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>SILICIO ORGANICO — 300MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante ou orientação de profissional habilitado</strong>. Não altere a forma de uso recomendada e, em caso de dúvidas, procure orientação profissional.</p>",
      advertencias: "<p>Conservar o produto adequadamente e mantê-lo fora do alcance das crianças. Não utilizar em caso de hipersensibilidade a qualquer componente da fórmula. Em caso de dúvidas sobre o uso, procure orientação de um profissional habilitado.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "73",
    nome: "Biosil 520mg - 30 Cápsulas",
    categoria: "beleza",
    preco: 160.00,
    imagem: "assets/img/biosil-520mg-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>Biosil 520mg</strong> é desenvolvido para auxiliar nos cuidados com pele, cabelos, unhas, ossos e articulações, por meio da ativação das vias relacionadas à produção de colágeno.</p>",
      oQueE: "<p>O <strong>Biosil 520mg</strong> é um produto desenvolvido com ácido ortosilícico estabilizado em colina, utilizando a tecnologia ch-OSA™, que proporciona estabilidade e biodisponibilidade ao ingrediente.</p><p>É utilizado como suporte aos cuidados com <strong>pele, cabelos, unhas, ossos e articulações</strong>, estando relacionado à ativação das vias de produção de colágeno. Entre as finalidades descritas pelo fabricante estão auxiliar na elasticidade da pele, fortalecer os fios de cabelo, reduzir a fragilidade das unhas e contribuir para a redução da profundidade das linhas de expressão.</p><p>É indicado para adultos que buscam complementar os cuidados com a <strong>saúde da pele, cabelos, unhas, ossos e articulações</strong>. Pessoas com hipersensibilidade à substância não devem fazer uso do produto.</p>",
      composicao: "<ul>\n<li>BIOSIL — 520MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula ao dia</strong>.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade e fora do alcance das crianças.</p><p>Mulheres grávidas não devem utilizar o produto sem orientação médica. O uso durante o período de amamentação não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica. Nunca compre medicamento sem orientação de um profissional habilitado. Siga corretamente o modo de usar e, caso os sintomas não desapareçam, procure orientação médica.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "74",
    nome: "FOME CONTROL - 30 Cápsulas",
    categoria: "emagrecimento",
    preco: 60.00,
    imagem: "assets/img/fome-control-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>Fome Control</strong> é um suplemento desenvolvido para auxiliar no <strong>controle do apetite</strong>, contribuindo para a sensação de saciedade e para o controle da vontade de consumir doces durante processos de reeducação alimentar.</p>",
      oQueE: "<p>O <strong>Fome Control</strong> é um suplemento alimentar em cápsulas que combina diferentes ativos, como Garcinia Cambogia, Gymnema Silvestre, Vanádio Quelato, Picolinato de Cromo e Psyllium.</p><p>Sua formulação foi desenvolvida para auxiliar na <strong>redução da vontade por doces</strong>, no aumento da saciedade e no controle do apetite, além de contribuir como suporte aos objetivos relacionados ao controle do peso e à redução de gordura corporal.</p><p>É indicado para <strong>homens e mulheres</strong> que estejam buscando apoio durante processos de emagrecimento e reeducação alimentar, especialmente aqueles que desejam controlar o apetite, aumentar a saciedade e diminuir a vontade de consumir doces.</p>",
      composicao: "<ul>\n<li>GARCINIA CAMBOGIA EXTRATO — 400MG</li>\n<li>GYMNEMA SILVESTRE — 200MG</li>\n<li>VANADIO QUELATO — 55MCG</li>\n<li>PICOLINATO DE CROMO — 200MCG</li>\n<li>PSYLLIUM — 300MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 dose (2 cápsulas) ao dia</strong>, com água.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade, e fora do alcance das crianças.</p><p>Nunca compre medicamento sem orientação de um profissional habilitado. Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. O uso do produto durante o período de amamentação também não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica. Siga corretamente o modo de usar e, não desaparecendo os sintomas, procure orientação médica.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "75",
    nome: "FÓRMULA EMAGRECEDORA - 60 Cápsulas",
    categoria: "emagrecimento",
    preco: 95.00,
    imagem: "assets/img/formula-emagrecedora-60-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A <strong>Fórmula Emagrecedora</strong> com combinação de ativos selecionados para oferecer suporte ao <strong>controle do peso, apetite, saciedade e metabolismo energético</strong>, como coadjuvante de uma rotina de alimentação equilibrada e atividade física.</p>",
      oQueE: "<p>A <strong>Fórmula Emagrecedora</strong> é uma combinação de ativos apresentada em cápsulas, reunindo ingredientes como Gymnema, Cinnamomum, café verde, psyllium, Garcinia, gengibre, cafeína, cromo, minerais, aminoácidos e outros componentes.</p><p>Sua composição foi desenvolvida para atuar como <strong>coadjuvante no controle do apetite e da saciedade</strong>, além de oferecer suporte ao metabolismo energético e às estratégias relacionadas ao controle do peso, sempre associada a hábitos alimentares equilibrados e atividade física.</p><p>Pode ser indicada para pessoas que buscam <strong>suporte ao controle do peso</strong> e desejam complementar estratégias de reeducação alimentar. Por conter ativos com ações farmacológicas, incluindo furosemida e ioimbina, sua utilização deve ocorrer exclusivamente conforme prescrição e orientação médica.</p>",
      composicao: "<ul>\n<li>GYMNEMA — 50MG</li>\n<li>CINNAMOMUM — 40MG</li>\n<li>VANADIO — 50MCG</li>\n<li>CAFE VERDE — 10MG</li>\n<li>PHOLIA MAGRA — 10MG</li>\n<li>BIGUANIDA — 100MG</li>\n<li>FEIJAO BRANCO — 10MG</li>\n<li>CITRAMAX — 50MG</li>\n<li>HIBISCUS — 20MG</li>\n<li>PSYLLIUM — 30MG</li>\n<li>FUROSEMIDE — 5MG</li>\n<li>SELENIO — 30MCG</li>\n<li>ZINCO — 5MG</li>\n<li>MAGNESIO — 5MG</li>\n<li>CROMO — 100MCG</li>\n<li>ARGININA — 10MG</li>\n<li>VALINA — 15MG</li>\n<li>THEANIN — 20MG</li>\n<li>YOIMBINA — 1MG</li>\n<li>CAFEINA — 30MG</li>\n<li>VITAMINA D — 800UI</li>\n<li>GARCINIA — 50MG</li>\n<li>GENGIBRE — 20MG</li>\n<li>BAUHINIA — 80MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Utilizar conforme as <strong>instruções do fabricante ou orientação de profissional habilitado</strong>, respeitando a dose, frequência e indicação individualizadas. Não utilizar posologia diferente da prescrita.</p>",
      advertencias: "<p>Por conter diversos ativos com ações farmacológicas, incluindo furosemida e ioimbina, o uso deste produto deve ser feito <strong>exclusivamente conforme prescrição e orientação médica</strong>, respeitando a dose e a indicação individual. Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico.</p><p>Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade, e fora do alcance das crianças. Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. O uso do produto durante o período de amamentação também não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica. Siga corretamente o modo de usar e, não desaparecendo os sintomas, procure orientação médica.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "76",
    nome: "Circulação - Retenção Líquido - 60 Cápsulas",
    categoria: "saude",
    preco: 70.00,
    imagem: "assets/img/circulacao-retencao-liquido-60-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>Circulação - Retenção Líquido</strong> é uma fórmula desenvolvida para oferecer suporte à <strong>circulação periférica</strong>, ao conforto das pernas e ao equilíbrio da retenção de líquidos, complementando uma rotina de cuidados com a saúde.</p>",
      oQueE: "<p>O <strong>Circulação - Retenção Líquido</strong> é uma fórmula em cápsulas que combina Castanha da Índia, Rutina, Ginkgo Biloba, Vitamina B12 e Hamamelis Virginica, reunindo ativos selecionados para o suporte aos cuidados relacionados à circulação.</p><p>Sua composição oferece suporte à <strong>circulação sanguínea periférica</strong> e ao equilíbrio da retenção de líquidos, podendo contribuir para o conforto das pernas e para a sensação de bem-estar no dia a dia.</p><p>É uma opção para pessoas que buscam complementar os <strong>cuidados com a circulação e o equilíbrio hídrico</strong> do organismo, sempre associada a hábitos saudáveis e à orientação de profissional habilitado quando necessário.</p>",
      composicao: "<ul>\n<li>CASTANHA DA INDIA EXTRACT — 200MG</li>\n<li>RUTINA — 150MG</li>\n<li>GINKGO BILOBA EXTRATO 24% — 60MG</li>\n<li>VITAMINA B12 — 1000MCG</li>\n<li>HAMAMELIS VIRGINICA EXTRACT PO — 100MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Utilizar conforme as <strong>instruções do fabricante ou orientação de profissional habilitado</strong>, respeitando a dose, a frequência e a indicação recomendadas. Não utilizar posologia diferente da orientada.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade a qualquer componente da fórmula não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar um profissional de saúde. Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente, protegido da luz, do calor e da umidade, e fora do alcance das crianças.</p><p>Mulheres grávidas, pessoas em período de amamentação e menores de 18 anos devem utilizar o produto somente mediante orientação de profissional habilitado. Siga corretamente as orientações de uso. Não desaparecendo os sintomas, procure orientação médica.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "77",
    nome: "RHODIOLA ANSILESS - 30 Cápsulas",
    categoria: "saude",
    preco: 60.00,
    imagem: "assets/img/rhodiola-ansiless-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>RHODIOLA ANSILESS</strong> combina dois ativos selecionados para oferecer suporte ao <strong>equilíbrio emocional, adaptação ao estresse e bem-estar mental</strong>, contribuindo para uma rotina com maior disposição e equilíbrio.</p>",
      oQueE: "<p>O <strong>RHODIOLA ANSILESS</strong> é uma fórmula em cápsulas que combina Rhodiola Rosea e Ansiless, dois ativos com propostas complementares voltadas ao suporte ao equilíbrio emocional e à resposta do organismo ao estresse.</p><p>Sua composição foi desenvolvida para auxiliar na <strong>adaptação ao estresse</strong>, no equilíbrio emocional e no bem-estar mental, podendo também oferecer suporte à disposição, concentração e resistência à fadiga relacionada ao estresse.</p><p>É uma opção para pessoas que enfrentam <strong>rotinas intensas, estresse ou cansaço mental</strong> e buscam complementar os cuidados relacionados ao equilíbrio emocional e ao bem-estar, sempre considerando a orientação de profissional habilitado.</p>",
      composicao: "<ul>\n<li>RHODIOLA ROSEA — 300MG</li>\n<li>ANSILESS — 100MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilizar conforme as <strong>instruções do fabricante ou orientação de profissional habilitado</strong>, respeitando a dose, a frequência e a indicação recomendadas. Não utilizar posologia diferente da orientada.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade a qualquer componente da fórmula não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar um profissional de saúde. Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente, protegido da luz, do calor e da umidade, e fora do alcance das crianças.</p><p>Mulheres grávidas, pessoas em período de amamentação e menores de 18 anos devem utilizar o produto somente mediante orientação de profissional habilitado. Siga corretamente as orientações de uso. Não desaparecendo os sintomas, procure orientação médica.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "78",
    nome: "VITAMINA D3 + VITAMINA K2 MK-7 - 30 Cápsulas",
    categoria: "saude",
    preco: 50.00,
    imagem: "assets/img/vitamina-d3-vitamina-k2-mk-7-30-capsulas.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Uma combinação de <strong>Vitamina D3 e Vitamina K2 MK-7</strong> que atua de forma complementar no organismo, oferecendo suporte à saúde óssea, ao metabolismo do cálcio e ao funcionamento adequado do sistema imunológico.</p>",
      oQueE: "<p>A <strong>Vitamina D3 + Vitamina K2 MK-7</strong> reúne duas vitaminas importantes para o organismo em uma fórmula prática, desenvolvida para complementar a ingestão desses nutrientes.</p><p>A Vitamina D3 contribui para a <strong>absorção e utilização do cálcio</strong>, participando da manutenção da saúde óssea e do funcionamento adequado do sistema imunológico. A Vitamina K2, na forma MK-7, participa do metabolismo do cálcio e contribui para a manutenção da saúde dos ossos e dos vasos sanguíneos.</p><p>Pode ser indicada para adultos que necessitem complementar a ingestão dessas vitaminas, especialmente quando houver orientação de um <strong>profissional de saúde</strong> para sua utilização.</p>",
      composicao: "<ul>\n<li>VITAMINA D3 — 10000UI</li>\n<li>VITAMINA K2-MK7 — 200MCG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de uso recomendada sem orientação profissional.</p>",
      advertencias: "<p>Este produto deve ser utilizado conforme as orientações do fabricante. Em caso de dúvidas sobre a utilização, procure a orientação de um profissional de saúde.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "79",
    nome: "RHODIOLA 400mg - 30 Cápsulas",
    categoria: "saude",
    preco: 50.00,
    imagem: "assets/img/rhodiola-400mg-30-capsulas-mu2kj7l3.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A <strong>Rhodiola Rosea 400mg</strong> é uma fórmula desenvolvida para complementar a rotina de quem busca suporte ao <strong>bem-estar físico e mental</strong>, especialmente em períodos de estresse, cansaço e alta demanda de concentração.</p>",
      oQueE: "<p>A <strong>Rhodiola Rosea 400mg</strong> é um suplemento em cápsulas que fornece 400mg de Rhodiola Rosea por cápsula, um ingrediente tradicionalmente utilizado como suporte à resistência física e mental.</p><p>Sua utilização está associada ao suporte ao <strong>desempenho mental</strong>, concentração, atenção e resistência diante de períodos de estresse físico e psicológico, além de apresentar ação antioxidante e contribuir para a sensação de bem-estar.</p><p>Pode ser indicada para adultos que buscam suporte à rotina de <strong>trabalho, estudos ou atividade física</strong>, especialmente em períodos de maior demanda física ou mental. A utilização deve considerar a orientação de um profissional de saúde quando necessário.</p>",
      composicao: "<ul>\n<li>RHODIOLA ROSEA — 400MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula diariamente</strong>.</p>",
      advertencias: "<p>Seu uso é contraindicado em casos de excitação por ter efeito ativador de antidepressivo. Não deve ser utilizado por indivíduos com transtorno bipolar ou por pessoas com hipersensibilidade à substância. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico.</p><p>Não utilizar com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade e fora do alcance das crianças. Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. O uso durante o período de amamentação não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica.</p><p>Siga corretamente o modo de usar. Nunca compre medicamento sem orientação de um profissional habilitado. Imagens meramente ilustrativas.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "80",
    nome: "Própolis 500mg - 60 Cápsulas",
    categoria: "saude",
    preco: 50.00,
    imagem: "assets/img/propolis-500mg-60-capsulas-mu2ksrgu.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A <strong>Própolis 500mg</strong> é uma fórmula desenvolvida para complementar a rotina de cuidados com o organismo, oferecendo suporte às <strong>defesas naturais</strong> e à proteção antioxidante.</p>",
      oQueE: "<p>A <strong>Própolis 500mg</strong> é um suplemento em cápsulas à base de extrato de própolis verde, uma substância resinosa produzida pelas abelhas a partir de materiais vegetais.</p><p>O produto fornece <strong>500mg de extrato de própolis verde</strong> e é utilizado como suporte antioxidante e ao funcionamento adequado do sistema imunológico, além de contribuir para a manutenção do bem-estar geral.</p><p>Pode ser indicada para adultos que buscam complementar a rotina de cuidados com a saúde e o aporte de compostos presentes na própolis, especialmente aqueles interessados em <strong>suporte antioxidante e imunológico</strong>. A utilização deve considerar a orientação de um profissional de saúde quando necessário.</p>",
      composicao: "<ul>\n<li>PROPOLIS VERDE EXTRATO — 500MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 ou 2 cápsulas ao dia</strong> ou conforme a orientação profissional.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade, recomenda-se descontinuar o uso e consultar o médico.</p><p>Não utilizar com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade e fora do alcance das crianças. Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. O uso durante o período de amamentação não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica.</p><p>Siga corretamente o modo de usar. Nunca compre medicamento sem orientação de um profissional habilitado. Imagens meramente ilustrativas.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "81",
    nome: "GANHO DE MASSA - 60 Cápsulas",
    categoria: "desempenhofisico",
    preco: 95.00,
    imagem: "assets/img/ganho-de-massa-60-capsulas-mu2l6bz0.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>A fórmula <strong>Ganho de Massa</strong> reúne ativos, aminoácido, vitaminas e nutrientes que podem contribuir para o <strong>suporte nutricional e aumento do apetite</strong>, auxiliando a rotina de pessoas que buscam favorecer uma maior ingestão alimentar.</p>",
      oQueE: "<p><strong>Ganho de Massa</strong> é uma fórmula composta por ciproheptadina, buclisina, L-lisina, vitaminas do complexo B, vitamina C e L-carnitina, reunindo diferentes componentes em cápsulas para suporte nutricional.</p><p>A fórmula está relacionada principalmente ao <strong>suporte ao apetite e à ingestão alimentar</strong>. Seus componentes também participam de diferentes processos metabólicos do organismo. O ganho de massa corporal, entretanto, depende de fatores como alimentação adequada, ingestão suficiente de proteínas e calorias, atividade física e condições individuais.</p><p>Pode ser considerada para <strong>adultos com dificuldade de manter uma ingestão alimentar adequada</strong> ou que apresentem necessidade de suporte nutricional, desde que a utilização da fórmula seja avaliada e orientada por um profissional habilitado.</p>",
      composicao: "<ul>\n<li>CIPROHEPTADINE CLORIDRATO — MG</li>\n<li>L-LISINA — MG</li>\n<li>VITAMINA B12 — MG</li>\n<li>BUCLISINA CLORIDRATO — MG</li>\n<li>VITAMINA B1 — MG</li>\n<li>VITAMINA C REVESTIDA — MG</li>\n<li>DL CARNITINA — MG</li>\n<li>VITAMINA B6 — MG</li>\n<li>VITAMINA B2 — MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Utilizar conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não estabeleça ou altere dose, frequência ou horários de utilização sem orientação profissional.</p>",
      advertencias: "<p>Devido à presença de ciproheptadina e buclisina na fórmula, pode ocorrer <strong>sonolência e redução da atenção</strong>. Avalie a utilização com um profissional habilitado, especialmente em caso de uso de outros medicamentos, gestação, amamentação, idade avançada ou condições de saúde específicas.</p><p>Não utilize sem orientação de um profissional habilitado. Siga corretamente as orientações de uso e mantenha o produto fora do alcance de crianças. Em caso de dúvidas ou ocorrência de sintomas indesejados, procure orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "82",
    nome: "Gamma Oryzanol 300mg - 30 Cápsulas",
    categoria: "desempenhofisico",
    preco: 50.00,
    imagem: "assets/img/gamma-oryzanol-300mg-30-capsulas-mu3y364k.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p><strong>Gamma Oryzanol 300mg</strong> é uma fórmula em cápsulas desenvolvida para complementar a rotina de pessoas que buscam suporte à <strong>performance física, força muscular, energia e bem-estar</strong>.</p>",
      oQueE: "<p>O Gamma Oryzanol é um composto conhecido como óleo de arroz, tendo entre seus componentes o ácido ferúlico. Sua fórmula foi desenvolvida para oferecer uma suplementação prática, concentrada e adequada à rotina de adultos.</p><p>É utilizado como suporte à <strong>performance física e muscular</strong>, podendo contribuir para objetivos relacionados à força, energia durante os treinos, recuperação após exercícios e manutenção de uma libido saudável, conforme as características atribuídas ao ingrediente.</p><p>É destinado a <strong>adultos</strong> que buscam complementar sua rotina de treinamento e cuidados pessoais com uma fórmula de Gamma Oryzanol. Seu uso deve seguir a posologia indicada e, quando necessário, a orientação de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>GAMMA ORYZANOL — 300MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 Dose (2 Capsulas) ao deitar.</strong></p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. Imagens meramente ilustrativas. Não use o produto com o prazo de validade vencido.</p><p>Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade. Manter fora do alcance das crianças. Nunca compre medicamento sem orientação de um profissional habilitado.</p><p>Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. O uso durante o período de amamentação também não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica. Siga corretamente o modo de usar. Não desaparecendo os sintomas, procure orientação médica.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "83",
    nome: "Pomegranate Extrato De Romã 450mg - 30 Cápsulas",
    categoria: "saude",
    preco: 45.00,
    imagem: "assets/img/pomegranate-extrato-de-roma-450mg-30-capsulas-mu3ybn0e.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p><strong>Pomegranate Extrato de Romã 450mg</strong> é uma fórmula em cápsulas desenvolvida para complementar a rotina de cuidados com a saúde, com destaque para seu <strong>potencial antioxidante</strong> e suporte ao bem-estar cardiovascular.</p>",
      oQueE: "<p>O Pomegranate é um extrato de romã que concentra compostos naturalmente presentes na fruta, como elagitaninos e punicalaginas. É utilizado como suplemento para complementar uma rotina de cuidados e manutenção do bem-estar.</p><p>Sua utilização está associada ao <strong>suporte antioxidante</strong> e a benefícios relacionados à saúde cardiovascular, além de ser estudada por seu potencial de auxiliar na proteção do organismo e da pele. Seu uso não substitui tratamentos médicos ou acompanhamento profissional.</p><p>É indicado para <strong>adultos</strong> que buscam complementar sua rotina de cuidados com uma fonte de extrato de romã. Pessoas que estejam realizando tratamentos ou que apresentem condições de saúde devem buscar orientação de um profissional habilitado antes de utilizar o produto.</p>",
      composicao: "<ul>\n<li>POMEGRANATE — 450MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula 2 vezes ao dia.</strong></p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. Imagens meramente ilustrativas. Não use o produto com o prazo de validade vencido.</p><p>Manter em temperatura ambiente (15 a 30ºC). Proteger da luz, do calor e da umidade. Nestas condições, o produto se manterá próprio para o consumo, respeitando o prazo de validade indicado na embalagem. Manter fora do alcance das crianças.</p><p>Nunca compre medicamento sem orientação de um profissional habilitado. Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. Siga corretamente o modo de usar. Não desaparecendo os sintomas, procure orientação médica. O uso do produto durante o período de amamentação também não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "84",
    nome: "PROSTATA HIPERPLASIA - 30 Cápsulas",
    categoria: "saude",
    preco: 70.00,
    imagem: "assets/img/prostata-hiperplasia-30-capsulas-mu3yiad2.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p><strong>PROSTATA HIPERPLASIA</strong> é uma fórmula composta por extratos vegetais e compostos nutricionais selecionados para oferecer <strong>suporte à saúde da próstata e do trato urinário masculino</strong>, como complemento à rotina de cuidados do homem adulto.</p>",
      oQueE: "<p>PROSTATA HIPERPLASIA reúne Saw Palmetto, Licopeno, Mucuna, Pygeum africanum, Urtiga dioica e Cavalinha em uma fórmula desenvolvida para complementar os cuidados relacionados à <strong>saúde prostática e ao bem-estar urinário masculino</strong>.</p><p>Sua finalidade é oferecer suporte complementar à saúde da próstata e do trato urinário, especialmente em homens que apresentam sintomas urinários associados à hiperplasia prostática benigna (HPB), como aumento da frequência urinária, necessidade de urinar durante a noite, dificuldade para iniciar a micção ou redução do fluxo urinário. O licopeno também fornece suporte antioxidante.</p><p>É destinado principalmente a <strong>homens adultos</strong> que desejam complementar os cuidados com a saúde prostática. A fórmula não substitui avaliação, diagnóstico ou tratamento médico, especialmente quando existem sintomas persistentes ou alterações urinárias que necessitem de investigação profissional.</p>",
      composicao: "<ul>\n<li>SAW PALMETO EXTRATO — 150MG</li>\n<li>LYCOPENE EXTRACT — 2MG</li>\n<li>MUCUNA EXTRATO SECO — 40MG</li>\n<li>PYGEUM AFRICANUM — 100MG</li>\n<li>URTIGA DIOICA EXTRATO SECO — 200MG</li>\n<li>CAVALINHA — 50MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilizar conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de um profissional habilitado. Não estabelecer dose, frequência ou horário de uso sem orientação específica.</p>",
      advertencias: "<p>O produto deve ser utilizado de forma responsável e não substitui avaliação ou tratamento médico. Em caso de sintomas persistentes, alterações urinárias importantes, sangue na urina, dor, febre ou dificuldade significativa para urinar, procure orientação médica. Mantenha o produto fora do alcance das crianças e utilize conforme as orientações do fabricante.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "85",
    nome: "Ácido Alfa Lipóico 250mg - 60 Cápsulas",
    categoria: "saude",
    preco: 80.00,
    imagem: "assets/img/acido-alfa-lipoico-250mg-60-capsulas-mu3yqwfq.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p><strong>Ácido Alfa Lipóico 250mg</strong> é uma fórmula antioxidante desenvolvida para complementar a rotina de cuidados com o organismo, oferecendo suporte ao <strong>metabolismo energético</strong> e à proteção contra o estresse oxidativo.</p>",
      oQueE: "<p>O Ácido Alfa Lipóico é um composto com ação antioxidante que participa de processos relacionados à produção de energia nas células. Sua fórmula em cápsulas oferece uma maneira prática de complementar a ingestão desse composto.</p><p>Sua principal finalidade é oferecer <strong>suporte antioxidante e metabólico</strong>, contribuindo para a neutralização de radicais livres e para processos relacionados ao metabolismo energético. Também é estudado em contextos relacionados à sensibilidade à insulina e à resposta inflamatória.</p><p>É indicado para <strong>adultos</strong> que desejam complementar sua rotina de cuidados com suporte antioxidante e metabólico. Pessoas que estejam em tratamento de condições de saúde, especialmente relacionadas ao metabolismo, devem utilizar o produto com orientação de um profissional habilitado.</p>",
      composicao: "<ul>\n<li>ACIDO ALFA LIPOICO — 250MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Tomar de <strong>1 cápsula a 2 cápsulas ao dia</strong>, ingerindo a cápsula com água.</p><p>Como opção de uso, tomar 1 cápsula após o almoço. Ou então, tomar 1 cápsula após o almoço e 1 cápsula após o jantar.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. Imagens meramente ilustrativas. Não use o produto com o prazo de validade vencido.</p><p>Manter em temperatura ambiente (15 a 30ºC). Proteger da luz, do calor e da umidade. Nestas condições, o produto se manterá próprio para o consumo, respeitando o prazo de validade indicado na embalagem. Manter fora do alcance das crianças.</p><p>Nunca compre um produto sem orientação de um profissional habilitado. Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. Siga corretamente o modo de usar. Não desaparecendo os sintomas, procure orientação médica. O uso do produto durante o período de amamentação também não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "86",
    nome: "Peg 4000 (Polietilenoglicol) - 350 gramas",
    categoria: "saude",
    preco: 50.00,
    imagem: "assets/img/peg-4000-polietilenoglicol-350-gramas-mu45582h.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O PEG 4000 (Polietilenoglicol) é um <strong>laxativo osmótico</strong> utilizado como auxiliar no tratamento da constipação intestinal, favorecendo o aumento da quantidade de água no intestino e contribuindo para a melhora da consistência das fezes.</p>",
      oQueE: "<p>O PEG 4000 é um polietilenoglicol de peso molecular aproximado de 4.000 Daltons, um polímero <strong>minimamente absorvido pelo organismo</strong> que atua por osmose no intestino. Sem eletrólitos, apresenta-se como uma substância insípida e inodora.</p><p>É utilizado como <strong>laxativo osmótico</strong> para auxiliar no tratamento da constipação intestinal crônica, aumentando a quantidade de água presente no intestino e, consequentemente, o volume e a consistência das fezes, favorecendo o funcionamento intestinal.</p><p>Pode ser indicado para pessoas com constipação intestinal, conforme orientação de um <strong>profissional habilitado</strong>. O uso por menores de 18 anos, gestantes e durante o período de amamentação deve seguir orientação médica.</p>",
      composicao: "<ul>\n<li>Polietilenoglicol — 4000</li>\n<li>Sem — Eletrólitos</li>\n</ul><p><strong>Apresentação:</strong> 350 Gramas</p>",
      comoUsar: "<p>Utilize o produto exclusivamente conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de profissional habilitado. Não utilize dose, frequência ou horário diferentes daqueles recomendados para o produto.</p>",
      advertencias: "<p>Pessoas com hipersensibilidade à substância não devem fazer uso do produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade e fora do alcance das crianças. Nunca compre medicamento sem orientação de um profissional habilitado. Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. Siga corretamente o modo de usar. O uso do produto durante o período de amamentação também não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "87",
    nome: "Ácido Folínico 5mg - 30 Cápsulas",
    categoria: "saude",
    preco: 50.00,
    imagem: "assets/img/acido-folinico-5mg-30-capsulas-mu7053a1.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>Ácido Folínico 5mg</strong> é uma apresentação de folinato, uma forma ativa relacionada ao folato (vitamina B9), destinada a situações específicas em que sua utilização seja indicada por profissional de saúde.</p>",
      oQueE: "<p>O Ácido Folínico 5mg é um produto à base de <strong>ácido folínico (folinato)</strong>, uma forma ativa do folato, nutriente envolvido em processos importantes do organismo, incluindo a formação e renovação das células.</p><p>O ácido folínico pode ser utilizado em situações específicas relacionadas ao metabolismo do folato e à formação das células sanguíneas, além de fazer parte de determinados protocolos terapêuticos sob orientação profissional.</p><p>É indicado para pessoas que tenham <strong>indicação específica para utilização de ácido folínico</strong>, conforme avaliação e orientação de médico ou outro profissional de saúde habilitado. A necessidade de uso deve considerar as condições individuais de cada pessoa.</p>",
      composicao: "<ul>\n<li>ACIDO FOLINICO — 5MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada sem orientação profissional.</p>",
      advertencias: "<p>O uso de ácido folínico deve ser realizado de forma responsável e, quando necessário, sob orientação de profissional de saúde. Não utilize o produto para substituir tratamentos prescritos ou para corrigir condições de saúde sem avaliação adequada. Em caso de dúvidas sobre a necessidade de utilização, procure orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "88",
    nome: "Ácido Úrico Gota - 10 Cápsulas",
    categoria: "saude",
    preco: 30.00,
    imagem: "assets/img/acido-urico-gota-10-capsulas-mu70eg5z.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>Ácido Úrico Gota</strong> é uma fórmula composta por ativos com diferentes funções no manejo da gota e da hiperuricemia, reunindo componentes destinados ao controle da <strong>dor e inflamação</strong> e ao controle dos níveis de ácido úrico.</p>",
      oQueE: "<p>O Ácido Úrico Gota é uma fórmula composta por <strong>cetoprofeno, colchicina, indometacina, benzobromarona, alopurinol e famotidina</strong>, reunindo ativos com diferentes mecanismos de ação relacionados ao controle da inflamação e do ácido úrico.</p><p>Sua finalidade está relacionada ao <strong>manejo da gota e da hiperuricemia</strong>. Cetoprofeno, indometacina e colchicina atuam principalmente no controle da dor e dos processos inflamatórios associados às crises, enquanto alopurinol e benzobromarona atuam no controle do ácido úrico por mecanismos distintos.</p><p>É destinado a pessoas com <strong>indicação específica para utilização dessa combinação</strong>, conforme avaliação e prescrição de médico ou profissional de saúde habilitado. A necessidade, duração e forma de utilização devem ser determinadas individualmente.</p>",
      composicao: "<ul>\n<li>CETOPROFENO — 100MG</li>\n<li>COLCHICINA — 0.3MG</li>\n<li>INDOMETACINA — 50MG</li>\n<li>BENZOBROMARONA — 100MG</li>\n<li>ALOPURINOL — 100MG</li>\n<li>FAMOTIDINA — 20MG</li>\n</ul><p><strong>Apresentação:</strong> 10 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante e a orientação do profissional de saúde responsável pela prescrição</strong>. Não altere a dose, frequência ou duração do tratamento por conta própria.</p>",
      advertencias: "<p>Este produto contém medicamentos de ação farmacológica e deve ser utilizado <strong>sob orientação e acompanhamento profissional</strong>. A associação de cetoprofeno e indometacina requer atenção, pois ambos são anti-inflamatórios e sua utilização simultânea pode aumentar a possibilidade de efeitos adversos. Não utilize por conta própria nem associe outros medicamentos sem orientação profissional.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "89",
    nome: "30 + SUPLEMENTO - 30 Cápsulas",
    categoria: "saude",
    preco: 50.00,
    imagem: "assets/img/30-suplemento-30-capsulas-mu70mefe.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>30+ Suplemento</strong> combina vitaminas, minerais, colágeno e coenzima Q10 em uma fórmula desenvolvida para oferecer <strong>suporte nutricional ao organismo adulto</strong>, contribuindo para funções relacionadas à energia, imunidade, músculos, ossos e tecidos.</p>",
      oQueE: "<p>O 30+ Suplemento é uma combinação de nutrientes que reúne <strong>magnésio, vitamina C, coenzima Q10, colágeno hidrolisado, vitamina D e zinco</strong> em cápsulas, proporcionando uma composição nutricional diversificada para o público adulto.</p><p>Sua finalidade é complementar a alimentação com nutrientes envolvidos em diferentes funções do organismo, incluindo <strong>metabolismo energético, funcionamento muscular, sistema imunológico, manutenção dos ossos e formação de colágeno</strong>.</p><p>É indicado para adultos que buscam <strong>complementação nutricional</strong> por meio de uma fórmula que reúne diferentes vitaminas, minerais e outros componentes nutricionais. A necessidade de suplementação deve considerar a alimentação, as condições individuais e a orientação de um profissional de saúde quando necessário.</p>",
      composicao: "<ul>\n<li>MAGNESIO DIMALATO — MG</li>\n<li>VITAMINA C REVESTIDA — MG</li>\n<li>COENZIMA Q 10 PO — MG</li>\n<li>COLAGENO HIDROLISADO PO — MG</li>\n<li>VIT D — UI</li>\n<li>ZINCO QUELATO — MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada.</p>",
      advertencias: "<p>Este produto é destinado à <strong>suplementação nutricional</strong> e não substitui uma alimentação equilibrada. Utilize conforme as orientações do fabricante. Em caso de dúvidas sobre a utilização, especialmente quando houver uso de outros produtos ou medicamentos, procure orientação de um profissional de saúde.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "90",
    nome: "3M Magnésio - 60 Cápsulas",
    categoria: "saude",
    preco: 70.00,
    imagem: "assets/img/3m-magnesio-60-capsulas-mu70u2hq.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O <strong>3M Magnésio</strong> combina três formas de magnésio em uma única fórmula, oferecendo uma opção de <strong>suplementação nutricional</strong> para complementar a ingestão desse mineral essencial.</p>",
      oQueE: "<p>O 3M Magnésio é um suplemento alimentar em cápsulas que reúne <strong>magnésio dimalato, magnésio glicina e magnésio treonato</strong>, três formas de magnésio presentes na composição.</p><p>O magnésio participa de diversas funções do organismo, incluindo <strong>funcionamento muscular e neuromuscular, metabolismo energético e funcionamento do sistema nervoso</strong>. A combinação de diferentes formas oferece uma composição diversificada para a suplementação desse mineral.</p><p>É indicado para adultos que desejam <strong>complementar a ingestão de magnésio</strong> por meio de uma fórmula que reúne diferentes formas desse mineral. A necessidade de suplementação deve considerar a alimentação e as condições individuais de cada pessoa.</p>",
      composicao: "<ul>\n<li>MAGNESIO DIMALATO — 150MG</li>\n<li>MAGNESIO GLICINA — 150MG</li>\n<li>MAGNESIO TREONATE — 150MG</li>\n</ul><p><strong>Apresentação:</strong> 60 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto <strong>conforme as instruções do fabricante</strong> ou de acordo com a orientação de um profissional de saúde. Não altere a forma de utilização recomendada.</p>",
      advertencias: "<p>Este produto é destinado à <strong>suplementação nutricional</strong> e não substitui uma alimentação equilibrada. Utilize conforme as orientações do fabricante. Em caso de dúvidas sobre a utilização ou sobre a necessidade de suplementação, procure orientação de um profissional de saúde.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "91",
    nome: "Pill Food Turbinado - 90 Cápsulas",
    categoria: "beleza",
    preco: 80.00,
    imagem: "assets/img/pill-food-turbinado-90-capsulas-mu8hdwsn.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p><strong>Pill Food Turbinado</strong> é um suplemento com vitaminas, proteínas e aminoácidos, desenvolvido para complementar a rotina de cuidados com <strong>cabelos, pele e unhas</strong>, contribuindo para seu fortalecimento e aparência saudável.</p>",
      oQueE: "<p>O <strong>Pill Food Turbinado</strong> é um composto formulado com vitaminas, proteínas e aminoácidos essenciais, desenvolvido para complementar os cuidados diários com cabelos, unhas e pele.</p><p>Seu uso contínuo colabora para o <strong>fortalecimento dos fios</strong>, melhora da aparência da pele e maior resistência das unhas. A fórmula conta ainda com <strong>Silício</strong> e <strong>MSM</strong>, componentes presentes na composição do produto.</p><p>É indicado para <strong>homens e mulheres</strong> que desejam cuidar dos cabelos, pele e unhas, especialmente em períodos de estresse, dietas restritivas, uso frequente de químicas nos cabelos, alterações hormonais ou após períodos de queda capilar temporária. Pessoas veganas devem consultar um profissional antes do uso, pois a fórmula contém colágeno hidrolisado, geralmente de origem animal.</p>",
      composicao: "<ul>\n<li>Metionina — MG</li>\n<li>Cisteína — MG</li>\n<li>Cistina-L — MG</li>\n<li>Pantotenato de Cálcio — MG</li>\n<li>Complexo B — MG</li>\n<li>Vitamina E Pó — MG</li>\n<li>Selênio Quelato — MG</li>\n<li>Ácido Aminobenzoico — MG</li>\n<li>Queratina Pó — MG</li>\n<li>Biotina — MG</li>\n<li>Silício Quelato — MG</li>\n</ul><p><strong>Apresentação:</strong> 90 Cápsulas</p>",
      comoUsar: "<p>Tomar <strong>1 cápsula duas vezes ao dia</strong>, preferencialmente antes do almoço e do jantar.</p>",
      advertencias: "<p>A administração de colágeno hidrolisado em pó não é recomendada para pessoas portadoras de doenças renais e hepáticas, com níveis elevados de ácido úrico ou gota. Pessoas com hipersensibilidade à substância não devem usar o produto. Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico.</p><p>Não use o produto com o prazo de validade vencido. Manter em temperatura ambiente (15 a 30ºC), protegido da luz, do calor e da umidade. Manter fora do alcance das crianças.</p><p>Este produto não deve ser utilizado por mulheres grávidas sem orientação médica. O uso durante o período de amamentação também não é recomendado. Este produto não deve ser utilizado por menores de 18 anos sem orientação médica. Siga corretamente o modo de usar. Nunca compre um produto sem orientação de um profissional habilitado. Não desaparecendo os sintomas, procure orientação médica.</p><p>Imagens meramente ilustrativas. Nestas condições de armazenamento, o produto se manterá próprio para o consumo, respeitando o prazo de validade indicado na embalagem.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "92",
    nome: "50 + SUPLEMENTO - 30 Cápsulas",
    categoria: "saude",
    preco: 100.00,
    imagem: "assets/img/50-suplemento-30-capsulas-mub07yb0.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Fórmula desenvolvida especialmente para adultos 50+, reunindo nutrientes e extratos vegetais que auxiliam no <strong>metabolismo, equilíbrio antioxidante, saúde cardiovascular e manutenção da pele e dos tecidos</strong>.</p>",
      oQueE: "<p>O 50 + SUPLEMENTO é uma fórmula nutricional que combina sete componentes selecionados para complementar a rotina de cuidados e nutrição de adultos a partir dos 50 anos.</p><p>Sua composição reúne ingredientes associados ao <strong>metabolismo energético e celular</strong>, à proteção antioxidante, ao funcionamento muscular, à saúde vascular e à manutenção da elasticidade e hidratação da pele.</p><p>É destinado principalmente a <strong>adultos 50+</strong> que buscam complementar sua alimentação com uma combinação de nutrientes e extratos vegetais, dentro de uma rotina equilibrada e hábitos de vida saudáveis.</p>",
      composicao: "<ul>\n<li>INOSITOL — 100MG</li>\n<li>CURCUMA LONGA L. — 150MG</li>\n<li>BERBERINA — 100MG</li>\n<li>VERISOL — 200MG</li>\n<li>MAGNESIO DIMALATO — 100MG</li>\n<li>GYNOSTEMMA PENTAPHYLLUM — 100MG</li>\n<li>HESPERIDINA — 50MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de médico, nutricionista ou outro profissional habilitado. Não altere a forma de uso recomendada.</p>",
      advertencias: "<p>Este produto deve ser utilizado como complemento à alimentação e aos hábitos saudáveis. Os efeitos podem variar de pessoa para pessoa, de acordo com características individuais, alimentação e rotina. <strong>Suplementos não substituem uma alimentação equilibrada nem tratamentos prescritos por profissionais de saúde.</strong></p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "93",
    nome: "5M MAGNÉSIO - 30 Cápsulas",
    categoria: "saude",
    preco: 60.00,
    imagem: "assets/img/5m-magnesio-30-capsulas-mub0f2ia.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O 5M MAGNÉSIO reúne diferentes formas de magnésio em uma única fórmula, contribuindo para o <strong>funcionamento muscular, neurológico e metabolismo energético</strong>.</p>",
      oQueE: "<p>O 5M MAGNÉSIO é um suplemento alimentar que combina diferentes formas de magnésio, oferecendo uma composição diversificada para complementar a ingestão desse mineral.</p><p>O magnésio participa de diversas funções do organismo, contribuindo para o <strong>funcionamento muscular e neurológico</strong>, o metabolismo energético e a manutenção do equilíbrio do organismo.</p><p>É indicado para adultos que buscam complementar a ingestão de magnésio, especialmente quando houver necessidade nutricional identificada, sempre considerando uma alimentação equilibrada e, quando necessário, <strong>orientação de um profissional de saúde</strong>.</p>",
      composicao: "<ul>\n<li>MAGNESIO TAURATO — MG</li>\n<li>OXIDO DE MAGNESIO — MG</li>\n<li>DIMALATO DE MAGNESIO — MG</li>\n<li>BISGLICINATO DE MAGNESIO — MG</li>\n<li>CLORETO DE MAGNESIO PO — MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de médico, nutricionista ou outro profissional habilitado. Não altere a forma de uso recomendada.</p>",
      advertencias: "<p>Este produto deve ser utilizado como complemento à alimentação e aos hábitos saudáveis. Os benefícios podem variar de acordo com as necessidades individuais e a quantidade de magnésio efetivamente fornecida pela fórmula. <strong>Não substitua uma alimentação equilibrada nem tratamentos orientados por profissionais de saúde.</strong></p><p>As quantidades individuais das diferentes formas de magnésio não foram informadas na composição apresentada. Por isso, não é possível determinar a quantidade de magnésio elementar fornecida pelo produto.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "94",
    nome: "8:1 RETINOL - 30 Cápsulas",
    categoria: "beleza",
    preco: 80.00,
    imagem: "assets/img/8-1-retinol-30-capsulas-mub0ljfi.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Fórmula desenvolvida para complementar a rotina de cuidados com a <strong>pele, tecidos conjuntivos e proteção antioxidante</strong>, reunindo retinol, vitaminas, colágeno, ácido hialurônico e silício orgânico.</p>",
      oQueE: "<p>O 8:1 RETINOL é um suplemento alimentar que combina diferentes nutrientes e compostos utilizados em fórmulas voltadas à manutenção da pele e dos tecidos, incluindo retinol, vitaminas C, E e K2-MK7, Verisol®, ácido hialurônico, trans-resveratrol e silício orgânico.</p><p>Sua composição fornece nutrientes relacionados à <strong>manutenção da pele, formação de colágeno e proteção das células contra o estresse oxidativo</strong>, além de componentes associados à hidratação e à manutenção dos tecidos conjuntivos.</p><p>É indicado para adultos que desejam complementar a ingestão de nutrientes associados à <strong>saúde da pele e dos tecidos</strong>, considerando as necessidades individuais, uma alimentação equilibrada e orientação de profissional de saúde quando necessário.</p>",
      composicao: "<ul>\n<li>RETINOL PO — MG</li>\n<li>VIT K2-MK7 — MCG</li>\n<li>TRANS RESVERATROL EXTRATO — MG</li>\n<li>VERISOL — MG</li>\n<li>VIT C REVESTIDA — MG</li>\n<li>VIT E — MG</li>\n<li>ACIDO HIALURONICO PO — MG</li>\n<li>SILICIO ORGANICO — MG</li>\n</ul><p><strong>Apresentação:</strong> 30 Cápsulas</p>",
      comoUsar: "<p>Utilize o produto conforme as <strong>instruções do fabricante</strong> ou de acordo com a orientação de médico, nutricionista ou outro profissional habilitado. Não altere a forma de uso recomendada.</p>",
      advertencias: "<p>Este produto deve ser utilizado como complemento à alimentação e aos hábitos saudáveis. Os resultados podem variar de acordo com as necessidades individuais e as concentrações dos componentes presentes na fórmula. <strong>Suplementos não substituem uma alimentação equilibrada nem tratamentos orientados por profissionais de saúde.</strong></p><p>As quantidades individuais dos componentes não foram informadas na composição apresentada. Portanto, a avaliação da adequação nutricional da fórmula depende das concentrações efetivamente presentes em cada cápsula.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
  },
  {
    id: "95",
    nome: "Abelhinha Termogênico - 120 Cápsulas",
    categoria: "emagrecimento",
    preco: 100.00,
    imagem: "assets/img/abelhinha-termogenico-120-capsulas-mub0t1ia.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>Suplemento termogênico desenvolvido para adultos saudáveis que buscam complementar sua rotina de treinos com ingredientes associados ao <strong>metabolismo energético, termogênese, disposição e controle do apetite</strong>.</p>",
      oQueE: "<p>O Abelhinha Termogênico é um suplemento alimentar em cápsulas que combina goma guar, cafeína, extrato de chá verde, capsiate, ioimbina e picolinato de cromo em uma fórmula voltada à suplementação de pessoas que praticam atividades físicas.</p><p>Sua composição reúne ingredientes associados à <strong>termogênese, energia, foco e controle do apetite</strong>, podendo complementar uma rotina que inclua alimentação equilibrada e prática regular de exercícios físicos.</p><p>É destinado a <strong>adultos saudáveis</strong> que buscam complementar seus esforços relacionados ao controle do peso, disposição para os treinos e rotina de atividade física, considerando suas necessidades individuais e orientação profissional quando necessário.</p>",
      composicao: "<ul>\n<li>GOMA GUAR — 250MG</li>\n<li>CAFEINA — 105MG</li>\n<li>CHA VERDE EXTRATO SECO — 90MG</li>\n<li>CAPSIATE — 2MG</li>\n<li>IOIMBINA CLORIDRATO — 2MG</li>\n<li>PICOLINATO DE CROMO — 200MCG</li>\n</ul><p><strong>Apresentação:</strong> 120 Cápsulas</p>",
      comoUsar: "<p>Para resultados eficazes, recomenda-se o uso contínuo com a ingestão de <strong>4 cápsulas ao dia</strong>. Siga o passo a passo para maximizar os benefícios:</p><p><strong>Uso Diário:</strong> Tome 4 cápsulas do Termogênico Abelhinha com água, ajustando o horário de acordo com sua rotina de treinos.</p><p><strong>Caso treine no período da tarde:</strong> 2 cápsulas pela manhã e 2 cápsulas antes do treino.</p><p><strong>Caso treine no período da manhã:</strong> 2 cápsulas antes do treino e 2 cápsulas antes do café da manhã.</p><p><strong>Para treinos mais intensos:</strong> Tomar as 4 cápsulas antes do treino.</p><p><strong>Consistência:</strong> Use diariamente para garantir uma ação constante na queima de calorias, aceleração do metabolismo e melhora do desempenho físico.</p><p><strong>Acompanhe os Resultados:</strong> Com o uso contínuo, você começará a perceber melhorias na definição corporal, aumento da energia e foco durante os treinos.</p>",
      advertencias: "<p>Este produto deve ser utilizado conforme a orientação de uso indicada e não substitui uma alimentação equilibrada nem a prática de hábitos saudáveis. <strong>O uso deve considerar as necessidades individuais e a orientação de um profissional de saúde quando necessário.</strong></p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "🎟️ Cupom válido no carrinho. 💳 Consulte parcelamento no checkout",
    cupomAtivo: false,
    cupomPorcentagem: 0,
    cupomCodigo: "",
    cupomValidade: "",
    cupomMensagemTag: "",
    cupomOcultarTag: false
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

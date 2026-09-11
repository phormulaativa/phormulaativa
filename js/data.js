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
    nome: "Manipulados para emagrecimento",
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
    id: "quedacapilar",
    nome: "Manipulados para queda capilar",
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
    nome: "Manipulados para dermatologia e beleza",
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
    id: "desempenhofisico",
    nome: "Manipulados para desempenho físico e vitalidade",
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
    id: "saude",
    nome: "Manipulados para saúde e bem-estar",
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
      composicao: "<ul>\n<li>BLACK GINGER — POWDER</li>\n<li>BLACK GINGER — MG</li>\n<li>PHYTOTESTO — MG</li>\n<li>FURASTANOL (FENOSIDEO) — MG</li>\n<li>PIPERINA — MG</li>\n<li>ENDURFIT — MG</li>\n<li>NO3 — MG</li>\n<li>AAKG — MG</li>\n<li>NORVALINE — MG</li>\n<li>COBRE QUELATO — MG</li>\n<li>ZINCO QUELATO — MG</li>\n<li>MANGANES QUELATO — MG</li>\n<li>FERRO QUELATO — MG</li>\n<li>SELENIO METIONINA — MCG</li>\n<li>COLEUS FORSKOHLII EXTRATO — MG</li>\n<li>EGCG 98% — MG</li>\n<li>THIOMUCASE — UTR</li>\n</ul><p><strong>Apresentação:</strong> 15 Cápsulas</p>",
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

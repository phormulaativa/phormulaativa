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
    mostrarNoMenu: false
  },
  {
    id: "desempenhofisico",
    nome: "Manipulados para desempenho físico",
    nomeMenu: "Desempenho físico",
    mostrarNoMenu: false
  },
  {
    id: "saude",
    nome: "Manipulados para saúde e bem-estar",
    nomeMenu: "Saúde",
    mostrarNoMenu: false
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
    id: "18",
    nome: "Ácido Tricloroacético 90% - Solução 10ml",
    categoria: "podologia",
    preco: 40.00,
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
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R$ 40,00"
  },
  {
    id: "19",
    nome: "Fórmula Antimicose Completa - Solução 10ml",
    categoria: "podologia",
    preco: 40.00,
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
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R$ 40,00"
  },
  {
    id: "20",
    nome: "Ácido Nítrico 65% - Solução 10ml",
    categoria: "podologia",
    preco: 50.00,
    imagem: "assets/img/acidonitrico65.png",
    videos: [
      
    ],
    descricao: {
      resumo: "<p>O Ácido Nítrico 65% é uma solução de uso <strong>exclusivamente profissional podológico</strong>, destinada a aplicações realizadas por profissionais devidamente habilitados e conforme orientação técnica.</p>",
      oQueE: "<p>O <strong>Ácido Nítrico 65%</strong> é uma solução formulada à base de ácido nítrico fumegante, destinada ao uso profissional no contexto podológico.</p><p>O produto é destinado ao <strong>uso profissional podológico</strong>, devendo sua aplicação ser realizada de acordo com as orientações técnicas e os procedimentos adequados ao uso do produto.</p><p>É recomendado <strong>exclusivamente para profissionais habilitados</strong> que tenham conhecimento técnico para sua utilização no contexto podológico, observando as orientações do fabricante.</p>",
      composicao: "<ul><li>ACIDO NITRICO FUMEGANTE — 65%</li><li>VEICULO — 10ML</li></ul><p><strong>Apresentação:</strong> Solução 10ml - Validade 4 meses</p>",
      comoUsar: "<p>Produto destinado a <strong>uso profissional podológico</strong>. Utilize somente conforme as instruções do fabricante e orientação de profissional devidamente habilitado. Não utilize ou aplique o produto fora das condições e procedimentos recomendados pelo fabricante.</p>",
      advertencias: "<p>Produto de uso profissional. Manuseie e utilize somente conforme as orientações do fabricante e os procedimentos técnicos aplicáveis ao uso profissional. Mantenha o produto fora do alcance de crianças e em condições adequadas de armazenamento.</p><p>SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO. Os resultados e indicações referentes ao uso desse produto foram avaliados e comprovados pelo fabricante deste insumo farmacêutico. Não garantimos os resultados descritos, estes variam de pessoa para pessoa dependendo de diversos fatores como alimentação, prática de exercícios físicos, presença de outras patologias, bem como, o uso correto do produto conforme descrito na posologia.</p>"
    },
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R$ 50,00"
  },
  {
    id: "21",
    nome: "Aloe Vera Reparador - Solução 10ml",
    categoria: "podologia",
    preco: 50.00,
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
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R$ 50,00"
  },
  {
    id: "22",
    nome: "Ácido Salicílico 40% - Creme 30g",
    categoria: "podologia",
    preco: 30.00,
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
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R$ 30,00"
  },
  {
    id: "23",
    nome: "Anestésico Tópico - Creme 20g",
    categoria: "podologia",
    preco: 50.00,
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
    textoParcelamento: "ou 1x de R$ 50,00"
  },
  {
    id: "24",
    nome: "Base Fortalecedora - Solução 10ml",
    categoria: "podologia",
    preco: 40.00,
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
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1 x de R$ 40,00"
  },
  {
    id: "25",
    nome: "Fluconazol + Terbinafina - Solução 10ml",
    categoria: "podologia",
    preco: 20.00,
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
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1x de R$ 20,00"
  },
  {
    id: "26",
    nome: "Fluconazol + Trivalin - Solução 10ml",
    categoria: "podologia",
    preco: 20.00,
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
    destaque: true,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: "ou 1 x de R$ 20,00"
  },
  {
    id: "27",
    nome: "Mix Miconazol + Fluconazol - Solução 30ml",
    categoria: "podologia",
    preco: 30.00,
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
    textoParcelamento: "ou 1x de R$ 30,00"
  },
  {
    id: "28",
    nome: "Ciclopirox Spray - Solução 20ml",
    categoria: "podologia",
    preco: 30.00,
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
    textoParcelamento: "ou 1x de R$ 30,00"
  },
  {
    id: "29",
    nome: "Gel Terbinafina 5%",
    categoria: "podologia",
    preco: 30.00,
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
    textoParcelamento: "ou 1x de R$ 30,00"
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

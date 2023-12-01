const validGeral = {
  //HORA
  addhora: {
    min: 5,
    max: 5,
    caractereNpermitido: ["Number", "caractereEspecial"],
    pattern: [
      /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, // Válido: Formato HH:mm
      "Hora válida",
      "Hora inválida",
    ],
  },
  // DURACAO
  addduracao: {
    min: 1,
    max: 500,
    pattern: [".*", "duração valida", "duração invalida"],
  },
  //NUMERO LINHA
  numero_linha: {
    min: 1,
    max: 4,
    caractereNpermitido: ["Nletra", "NcaractereEspecial", "Nacentuacao"],
    pattern: ["^(\\d{1,4})$", "numero valido", "numero invalido"],
    btnoff: "required",
  },
  // BAIRRO DESTINO
  bairroDestino: {
    min: 3,
    max: 20,
    caractereNpermitido: ["Nnumber", "NcaractereEspecial"],
    pattern: [
      "(^[a-zA-ZÀ-ÿ0-9\\s'\\-]{3,20}$)",
      "bairro valido",
      "bairro invalido",
    ],
    btnoff: "required",
  },
  // BAIRRO ORIGEM
  bairroOrigem: {
    min: 3,
    max: 20,
    caractereNpermitido: ["Nnumber", "NcaractereEspecial"],
    pattern: [
      "(^[a-zA-ZÀ-ÿ0-9\\s'\\-]{3,20}$)",
      "bairro valido",
      "bairro invalido",
    ],
    btnoff: "required",
  },
  // NOME
  nome: {
    max: 50,
    min: 3,
    caractereNpermitido: [],
    pattern: [".*", "nome valido", "nome invalido"],
    btnoff: "required",
  },
  // NASC
  nascimento: {
    caractereNpermitido: [],
    pattern: [".*", "nascimento valido", "nascimento invalido"],
    btnoff: "required",
  },
  // CNH
  cnh: {
    min: 11,
    max: 11,
    caractereNpermitido: [],
    pattern: [".*", "cnh valido", "cnh invalido"],
    btnoff: "required",
  },
  // CPF
  cpf: {
    max: 14,
    min: 14,
    caractereNpermitido: ["Nletra", "Nacentuacao"],
    pattern: [
      "(\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2,5})",
      // "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}",
      "cpf valido",
      "cpf invalido",
    ],
    autopontuar: [/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4", /[.-]/g, ""],
    customErro: [
      [
        /(\d{3}\.\d{3}\.\d{3}-\d{3,6})/,
        "não existe cpf com mais de 11 numeros",
      ],
    ],
    btnoff: "required",
  },

  // EMAIL
  email: {
    max: 64,
    min: 10,
    pattern: [
      "^[a-zA-Z0-9\\._+\\-]+@[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,6}$",
      "email valido",
      "email invalido",
    ],
    btnoff: "required",
  },
  // SENHA
  senha: {
    max: 50,
    min: 8,
    caractereNpermitido: ["NcaractereEspecial", "Nacentuacao"],
    pattern: [
      "^[a-zA-Z0-9\\sáéíóúâêîôûàèìòùãõäëïöüçãõẽĩũâêîôûũṹỹḿẽĩỹẽẽỹẽỹã´`~^]{8,50}$",
      "senha valida",
      "senha invalido",
    ],
    btnoff: "required",
  },

  // FOTO
  foto: {
    min: 0,
    max: 200,
    btnoff: "required",
    pattern: [".*", "foto valida", "insira uma foto"],
  },
  //
};

const validEdit = {
    nome: {...validGeral.nome, ...{btnoff: null}},
    nascimento: {...validGeral.nascimento, ...{btnoff: null}},
    cnh: {...validGeral.cnh, ...{btnoff: null}},
    foto: {...validGeral.foto, ...{btnoff: null}},
    cpf: {...validGeral.cpf, ...{btnoff: null}},
    senha: {...validGeral.senha, ...{btnoff: null}},
    email: {...validGeral.email, ...{btnoff: null}},
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// validações de forms

const linhasHorariosListaVALID = {
  addHora2: validGeral.addhora,
  addduracao2: validGeral.addduracao,
  addHora1: validGeral.addhora,
  addduracao1: validGeral.addduracao,
};

const linhasHorariosEditVALID = {
  addHora2Edit: validGeral.addhora,
  addduracao2Edit: validGeral.addduracao,
  addHora1Edit: validGeral.addhora,
  addduracao1Edit: validGeral.addduracao,
};

const linhasInicioCreate = {
  numero_linha: validGeral.numero_linha,
  bairroDestino: validGeral.bairroDestino,
  bairroOrigem: validGeral.bairroOrigem,
};

const linhasInicioEdit = {
  numero_linha: validGeral.numero_linha,
  bairroDestino: validGeral.bairroDestino,
  bairroOrigem: validGeral.bairroOrigem,
};

const motoristasVALID = {
  nome: validGeral.nome,
  nascimento: validGeral.nascimento,
  cnh: validGeral.cnh,
  foto: validGeral.foto,
  cpf: validGeral.cpf,
  senha: validGeral.senha,
  email: validGeral.email,
};

const motoristasEdit_VALID = {
  nome: validEdit.nome,
  nascimento: validEdit.nascimento,
  cnh: validEdit.cnh,
  foto: validEdit.foto,
  cpf: validEdit.cpf,
  senha: validEdit.senha,
  email: validEdit.email,
};

const atendenteVALID = {
  nome: validGeral.nome,
  // foto: validGeral.foto,
  nascimento: validGeral.nascimento,
  email: validGeral.email,
  senha: validGeral.senha,
  cpf: validGeral.cpf,
};

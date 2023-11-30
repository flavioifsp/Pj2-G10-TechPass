const validGeral = {
  //
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
  addduracao: {
    min: 1,
    max: 500,
    pattern: [".*", "duração valida", "duração invalida"],
  },
  //
  numero_linha: {
    min: 1,
    max: 4,
    caractereNpermitido: ["Nletra", "NcaractereEspecial", "Nacentuacao"],
    pattern: ["^(\\d{1,4})$", "numero valido", "numero invalido"],
    btnoff: "required",
  },
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
  nome: {
    max: 50,
    min: 3,
    caractereNpermitido: [],
    pattern: [".*", "nome valido", "nome invalido"],
    btnoff: "required",
  },
  nascimento: {
    caractereNpermitido: [],
    pattern: [".*", "nascimento valido", "nascimento invalido"],
    btnoff: "required",
  },
  cnh: {
    min: 11,
    max: 11,
    caractereNpermitido: [],
    pattern: [".*", "cnh valido", "cnh invalido"],
    btnoff: "required",
  },
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

  username: {
    max: 90,
    min: 3,
    caractereNpermitido: ["NcaractereEspecial"],
    pattern: ["[a-zA-Z\\s_\\-\\d]{2,90}", "apelido valido", "apelido invalido"],
    btnoff: "required",
  },
  email: {
    max: 64,
    pattern: [
      "^[a-zA-Z0-9\\._+\\-]+@[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,6}$",
      "email valido",
      "email invalido",
    ],
    btnoff: "required",
  },

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
  //
};

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
  // foto: validGeral.foto,
  cpf: validGeral.cpf,
  senha: validGeral.senha,
  email: validGeral.email,
};

const atendenteVALID = {
  nome: validGeral.nome,
  // foto: validGeral.foto,
  nascimento: validGeral.nascimento,
  email: validGeral.email,
  senha: validGeral.senha,
  cpf: validGeral.cpf
};

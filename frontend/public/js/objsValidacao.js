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



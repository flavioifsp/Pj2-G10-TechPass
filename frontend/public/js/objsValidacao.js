const linhasHorariosListaVALID = {
  addHora2: {
    min: 5,
    max: 5,
    caractereNpermitido: ["Number", "caractereEspecial"],
    pattern: [
      /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, // Válido: Formato HH:mm
      "Hora válida",
      "Hora inválida",
    ],
  },
  addduracao2: {
    min: 1,
    max: 500,
    pattern: [".*", "duração valida", "duração invalida"],
  },
  addHora1: {
    min: 5,
    max: 5,
    caractereNpermitido: ["Number", "caractereEspecial"],
    pattern: [
      /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, // Válido: Formato HH:mm
      "Hora válida",
      "Hora inválida",
    ],
  },
  addduracao1: {
    min: 1,
    max: 500,
    pattern: [".*", "duração valida", "duração invalida"],
  },
};

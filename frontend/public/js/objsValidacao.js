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
    max: "2024-12-31",
    min: "1900-01-01",
    pattern: ["", "nascimento valido", "nascimento invalido"],
    btnoff: "required"
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
  username: {
    max: 90,
    min: 3,
    caractereNpermitido: ["NcaractereEspecial"],
    pattern: ["[a-zA-Z\\s_\\-\\d]{2,90}", "apelido valido", "apelido invalido"],
    btnoff: "required",
  },

  // FOTO
  foto: {
    min: 0,
    max: 500,
    btnoff: "required",
    pattern: [".*", "foto valida", "insira uma foto"],
  },
  // LOCAL DE TRABALHO
  local_de_trabalho_id: {
    min: 0,
    max: 500,
    btnoff: "required",
    pattern: [".*", "loja valida", "escolha uma loja"],
  },
  // TURNO
  turno: {
    min: 0,
    max: 500,
    btnoff: "required",
    pattern: [".*", "turno valido", "escolha um turno"],
  },
  // TELEFONE
  telefone: {
    min: 0,
    max: 500,
    btnoff: "required",
    pattern: [".*", "telefone valido", "telefone invalido"],
  },
  endereco: {
    min: 0,
    max: 500,
    btnoff: "required",
    pattern: [".*", "endereco valido", "endereco invalido"],
  },
  valor: {
    min: 0,
    max: 5000,
    btnoff: "required",
    pattern: [".*", "valor valido", "valor invalido"],
  },
  cepInput: {
    min: 9,
    max: 9,
    caractereNpermitido: ["Nletra", "Nacentuacao"],
    autopontuar: [/([\d]{6})([\d]{2})/, "$1-$2"],
    pattern: ["(\\d{6}-\\d{2})", "cep valido", "cep invalido"],
    customEvento: [
      async (value) => {
        try {
          informacoesdaAPI = (
            await axios.get(
              `https://brasilapi.com.br/api/cep/v2/${value}`,
              getCookie()
            )
          ).data;

          formsValidacaoEdit.inputs((input) => {
            for (const info in informacoesdaAPI) {
              if (Object.hasOwnProperty.call(informacoesdaAPI, info)) {
                if (input.name == info) {
                  input.value = informacoesdaAPI[info];
                  input.focus();
                  input.blur();
                }
              }
            }
          });
        } catch (error) {
          console.log(error);
          if (error.response.status == 404) return "insira um CEP que exista";
        }
      },
    ],
    btnoff: "required",
  },
  cep: {
    min: 9,
    max: 9,
    caractereNpermitido: ["Nletra", "Nacentuacao"],
    autopontuar: [/([\d]{6})([\d]{2})/, "$1-$2"],
    pattern: ["(\\d{6}-\\d{2})", "cep valido", "cep invalido"],
    
    btnoff: "required",
  },
  street: {
    min: 3,
    max: 255,
    btnoff: "required",
    caractereNpermitido: ["Nnumber", "NcaractereEspecial"],
    pattern: [".*", "Rua valido", "Rua invalida"],
  },

  neighborhood: {
    min: 3,
    max: 255,
    btnoff: "required",
    caractereNpermitido: ["Nnumber", "NcaractereEspecial"],
    pattern: [".*", "Bairro valido", "Bairro invalido"],
  },

  city: {
    min: 3,
    max: 255,
    btnoff: "required",
    caractereNpermitido: ["Nnumber", "NcaractereEspecial"],
    pattern: [".*", "Cidade valida", "Cidade invalida"],
  },

  state: {
    min: 2,
    max: 2,
    btnoff: "required",
    caractereNpermitido: ["Nnumber", "NcaractereEspecial"],
    pattern: [".*", "Estado valido", "Estado invalido"],
  },
};

const validEdit = {};
for (const key in validGeral) {
  if (Object.hasOwnProperty.call(validGeral, key)) {
    const element = validGeral[key];

    validEdit[key] = { ...element, btnoff: null };
  }
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

const atendenteVALID_1 = {
  nome: validGeral.nome,
  nascimento: validGeral.nascimento,
  email: validGeral.email,
  senha: validGeral.senha,
  cpf: validGeral.cpf,
};
const atendenteVALID_2 = {
  foto: validGeral.foto,
  endereco: validGeral.endereco,
  // endereco: validGeral.endereco,
  turno: validGeral.turno,
  local_de_trabalho_id: validGeral.local_de_trabalho_id,
  telefone: validGeral.telefone,
};

const atendenteEDIT = {
  nome: validEdit.nome,
  nascimento: validEdit.nascimento,
  email: validEdit.email,
  senha: validEdit.senha,
  cpf: validEdit.cpf,
  foto: validEdit.foto,
  endereco: validEdit.endereco,
  turno: validEdit.turno,
  local_de_trabalho_id: validEdit.local_de_trabalho_id,
  telefone: validEdit.telefone,
};

const loginVALID = {
  email: validGeral.email,
  senha: validGeral.senha,
};

const recargaVALID = {
  cpf: validGeral.cpf,
  valor: validGeral.valor,
};

const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

const menu = {
  inicio: {
    header: "inicio",
    items: {
      "/": {
        icon: "bar-chart-square tf-icons bx bx-bar-chart-square",
        nome: "Dasboard",
      },
    },
  },
  funcionarios: {
    header: "Funcionarios",
    items: {
      atendente: {
        icon: "bx bxs-user-detail",
        nome: "Atendentes",
      },
      motorista: {
        icon: "bx bx-id-card",
        nome: "Motoristas",
      },
    },
  },
  clientes: {
    header: "Clientes",
    items: {
      passageiros: {
        icon: "bx bxs-group",
        nome: "Passageiros",
      },
    },
  },
  gestao: {
    header: "Gestão",
    items: {
      lojas: {
        icon: "bx bxs-store-alt",
        nome: "Lojas",
      },
      card: {
        icon: "bx bxs-id-card",
        nome: "Cartões",
      },
    },
  },
  linhasRotas: {
    header: "Linhas/rotas",
    items: {
      linhas: {
        icon: "transfer tf-transfer bx bx-transfer",
        nome: "Linhas",
      },
      onibus: {
        icon: "bx bx-bus",
        nome: "Ônibus",
      },
      pontoDeOnibus: {
        icon: "bx bx-location-plus",
        nome: "Pontos De Ônibus",
      },
    },
  },
};

function verificarAutoridade(pagina) {
  return async (req, res, next) => {
    try {
      const permi = {
        atendente: ["/", "passageiros"],
        adm: [
          "/",
          "atendente",
          "motorista",
          "onibus",
          "card",
          "linhas",
          "lojas",
          "pontoDeOnibus",
          "passageiros",
        ],
        motorista: ["/", "passageiros"],
      };

      let autorizados = "";
      for (const key in permi) {
        if (Object.hasOwnProperty.call(permi, key)) {
          for (const elem of permi[key]) {
            if (elem === pagina) {
              autorizados += key + "&";
            }
          }
        }
      }

      const { data } = await axios.get(
        "http://localhost:9000/api/userADM/confirmar/?" +
          autorizados.replace(/&$/, ""),
        {
          headers: req.headers,
        }
      );

      const menuF = {};
      for (const key in menu) {
        if (Object.hasOwnProperty.call(menu, key)) {
          const area = menu[key].items;
          for (const key2 in area) {
            if (Object.hasOwnProperty.call(area, key2)) {
              const items = area[key2];
              if (key2 === pagina) {
                items.active = "active";
              }

              console.log(permi[data.tipo].includes(key2), key2);
              if (permi[data.tipo].includes(key2)) {
                if (menuF[key]) {
                  menuF[key].items[key2] = items;
                } else {
                  menuF[key] = { ...menu[key], items: { [key2]: items } };
                }
              }
            }
          }
        }
      }

      console.log(menuF.clientes);

      req.token = { ...data, menu: menuF };

      next();
    } catch (error) {
      const { response } = error;

      if (error.response === undefined) {
        console.log(error);
      } else if (response.status === 403) {
        res.status(response.status).redirect("/adm/login");
      } else if (response.status === 401) {
        res.status(response.status).redirect("/adm/");
      }
    }
  };
}

//
// ROTAS
//

router.get("/login", async (req, res) => {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?atendente&motorista&adm",
      {
        headers: req.headers,
      }
    );

    res.redirect("/adm/");
  } catch ({ response }) {
    res.render("adm/pages/loginADM.ejs", {
      layout: false,
    });
  }
});

router.get("/", verificarAutoridade("/"), async (req, res, next) => {
  res.render("adm/pages/index.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    token: req.token,
  });
});

router.get(
  "/atendente",
  verificarAutoridade("atendente"),
  async (req, res, next) => {
    try {
      const allAtendentes = (
        await axios.get("http://localhost:9000/api/userADM/atendentes", {
          headers: req.headers,
        })
      ).data;

      res.render("adm/pages/Atendentes.ejs", {
        layout: "adm/layouts/layout-index.ejs",
        allAtendentes: allAtendentes || [],
        token: req.token,
      });
    } catch (error) {}
  }
);

router.get(
  "/motorista",
  verificarAutoridade("motorista"),
  async (req, res, next) => {
    try {
      const allMotorista = (
        await axios.get("http://localhost:9000/api/userADM/motoristas", {
          headers: req.headers,
        })
      ).data;

      res.render("adm/pages/Motorista.ejs", {
        layout: "adm/layouts/layout-index.ejs",
        allMotorista: allMotorista || [],
        token: req.token,
      });
    } catch (error) {}
  }
);

router.get(
  "/pontoDeOnibus",
  verificarAutoridade("pontoDeOnibus"),
  async (req, res, next) => {
    try {
      const pontos = (
        await axios.get("http://localhost:9000/api/linhas/bus-stop", {
          headers: req.headers,
        })
      ).data;

      res.render("adm/pages/cadastroPontoDeOnibus.ejs", {
        layout: "adm/layouts/layout-index.ejs",
        pontos: pontos || [],
        token: req.token,
      });
    } catch (error) {}
  }
);

router.get(
  "/passageiros",
  verificarAutoridade("passageiros"),
  async (req, res, next) => {
    try {
      const allPassageiros = (
        await axios.get("http://localhost:9000/api/adm/passageiros", {
          headers: req.headers,
        })
      ).data;
      res.render("adm/pages/cadastroPassageiro.ejs", {
        layout: "adm/layouts/layout-index.ejs",
        allPassageiros: allPassageiros || [],
        token: req.token,
      });
    } catch (error) {}
  }
);

router.get("/onibus", verificarAutoridade("onibus"), async (req, res, next) => {
  try {
    const onibusAll = (
      await axios.get("http://localhost:9000/api/onibus", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/cadastroOnibus.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      onibusAll: onibusAll || [],
      token: req.token,
    });
  } catch (error) {}
});

router.get("/card", verificarAutoridade("card"), async (req, res, next) => {
  try {
    const allcard = (
      await axios.get("http://localhost:9000/api/adm/card", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/cartoes.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      allcard: allcard || [],
      token: req.token,
    });
  } catch (error) {}
});

router.get("/linhas", verificarAutoridade("linhas"), async (req, res, next) => {
  try {
    const linhas = (
      await axios.get("http://localhost:9000/api/linhas", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/linhas.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      linhas: linhas || [],
      token: req.token,
    });
  } catch (error) {}
});

router.get("/lojas", verificarAutoridade("lojas"), async (req, res, next) => {
  try {
    const allLojas = (
      await axios.get("http://localhost:9000/api/adm/lojas", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/cadastroLojas.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      allLojas: allLojas || [],
      token: req.token,
    });
  } catch (error) {}
});

module.exports = router;

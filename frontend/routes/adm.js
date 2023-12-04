const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

const catchSuperUser = (error, res) => {
  if (typeof error.response.inicio == "undefined") {
    res.redirect("/adm/login");
  } else {
    res.redirect("/adm/");
  }
};

/* GET home page. */

router.get("/", async function (req, res, next) {
  res.render("adm/pages/index.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuDashboard",
  });
});

router.get("/login", async function (req, res, next) {
  if (req.cookies.token || req.headers["authorization"]) {
    return res.redirect("/adm/");
  }
  res.render("adm/pages/loginADM.ejs", {
    layout: false,
  });
});

router.get("/atendente", async function (req, res, next) {
  try {
    const allAtendentes = (
      await axios.get("http://localhost:9000/api/userADM/atendentes", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/Atendentes.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuAtendente",
      allAtendentes: allAtendentes || [],
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/motorista", async function (req, res, next) {
  try {
    const allMotorista = (
      await axios.get("http://localhost:9000/api/userADM/motoristas", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/Motorista.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuMotorista",
      allMotorista: allMotorista || [],
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/pontoDeOnibus", async function (req, res, next) {
  try {
    const pontos = (
      await axios.get("http://localhost:9000/api/linhas/bus-stop", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/cadastroPontoDeOnibus.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuPontoDeOnibus",
      pontos: pontos || [],
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/passageiros", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/adm/passageiros",
      {
        headers: req.headers,
      }
    );
    res.render("adm/pages/cadastroPassageiro.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuPassageiros",
      allPassageiros: data || [],
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/onibus", async function (req, res, next) {
  try {
    // {
    //   headers: req.headers,
    // }

    res.render("adm/pages/cadastroOnibus.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuOnibus",
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/cartoes", async function (req, res, next) {
  try {
    const allcartoes = (
      await axios.get("http://localhost:9000/api/adm/cartoes", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/cartoes.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuCartoes",
      allcartoes: allcartoes || [],
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/linhas", async function (req, res, next) {
  try {
    const linhas = (
      await axios.get("http://localhost:9000/api/linhas", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/linhas.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuLinhas",
      linhas: linhas || [],
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/lojas", async function (req, res, next) {
  try {
    const { data } = await axios.get("http://localhost:9000/api/adm/lojas", {
      headers: req.headers,
    });

    res.render("adm/pages/cadastroLojas.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuLojas",
      allLojas: data || [],
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

module.exports = router;

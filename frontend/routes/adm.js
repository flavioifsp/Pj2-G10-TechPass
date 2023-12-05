const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

const catchSuperUser = (error, res) => {
  res.redirect("/adm/login");
};

router.get("/login", async function (req, res, next) {
  // if (req.cookies.token || req.headers["authorization"]) {
  //   res.redirect("/adm/");
  // } else {
  res.render("adm/pages/loginADM.ejs", {
    layout: false,
  });
  // }
});

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?motorista&atendente",
      {
        headers: req.headers,
      }
    );

    res.render("adm/pages/index.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuDashboard",
      token: data,
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/atendente", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?motorista&atendente",
      {
        headers: req.headers,
      }
    );

    const allAtendentes = (
      await axios.get("http://localhost:9000/api/userADM/atendentes", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/Atendentes.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuAtendente",
      allAtendentes: allAtendentes || [],
      token: data,
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/motorista", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?motorista&atendente",
      {
        headers: req.headers,
      }
    );

    const allMotorista = (
      await axios.get("http://localhost:9000/api/userADM/motoristas", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/Motorista.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuMotorista",
      allMotorista: allMotorista || [],
      token: data,
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/pontoDeOnibus", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?motorista&atendente",
      {
        headers: req.headers,
      }
    );

    const pontos = (
      await axios.get("http://localhost:9000/api/linhas/bus-stop", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/cadastroPontoDeOnibus.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuPontoDeOnibus",
      pontos: pontos || [],
      token: data,
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/passageiros", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?motorista&atendente",
      {
        headers: req.headers,
      }
    );

    const allPassageiros = (
      await axios.get("http://localhost:9000/api/adm/passageiros", {
        headers: req.headers,
      })
    ).data;
    res.render("adm/pages/cadastroPassageiro.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuPassageiros",
      allPassageiros: allPassageiros || [],
      token: data,
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/onibus", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?motorista&atendente",
      {
        headers: req.headers,
      }
    );

    const onibusAll = (
      await axios.get("http://localhost:9000/api/onibus", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/cadastroOnibus.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuOnibus",
      onibusAll: onibusAll || [],
      token: data,
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/card", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?motorista&atendente",
      {
        headers: req.headers,
      }
    );

    const allcard = (
      await axios.get("http://localhost:9000/api/adm/card", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/cartoes.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menucard",
      allcard: allcard || [],
      token: data,
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/linhas", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?motorista&atendente",
      {
        headers: req.headers,
      }
    );

    const linhas = (
      await axios.get("http://localhost:9000/api/linhas", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/linhas.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuLinhas",
      linhas: linhas || [],
      token: data,
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

router.get("/lojas", async function (req, res, next) {
  try {
    const { data } = await axios.get(
      "http://localhost:9000/api/userADM/confirmar/?motorista&atendente",
      {
        headers: req.headers,
      }
    );

    const allLojas = (
      await axios.get("http://localhost:9000/api/adm/lojas", {
        headers: req.headers,
      })
    ).data;

    res.render("adm/pages/cadastroLojas.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuLojas",
      allLojas: allLojas || [],
      token: data,
    });
  } catch (error) {
    catchSuperUser(error, res);
  }
});

module.exports = router;

const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("adm/pages/index.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuDashboard",
  });
});

router.get("/atendente", async function (req, res, next) {
  res.render("adm/pages/cadastroAtendente.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuAtendente",
  });
});

router.get("/motorista", async function (req, res, next) {
  res.render("adm/pages/cadastroMotorista.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuMotorista",
  });
});

router.get("/pontoDeOnibus", async function (req, res, next) {
  let pontos;

  try {
    pontos = (await axios.get("http://localhost:9000/api/linhas/bus-stop")).data;
  } catch (error) {
    pontos = null;
  }

  console.log(pontos)
  res.render("adm/pages/cadastroPontoDeOnibus.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuPontoDeOnibus",
    pontos
  });
});

router.get("/passageiros", async function (req, res, next) {
  res.render("adm/pages/cadastroPassageiro.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuPassageiros",
  });
});

router.get("/linhas", async function (req, res, next) {
  res.render("adm/pages/linhas.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuLinhas",
  });
});

router.get("/lojas", async function (req, res, next) {
  res.render("adm/pages/cadastroLojas.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuLojas",
  });
});

module.exports = router;

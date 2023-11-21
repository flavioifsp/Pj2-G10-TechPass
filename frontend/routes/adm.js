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
  let allAtendentes;
  try {
    allAtendentes = (
      await axios.get("http://localhost:9000/api/userADM/atendentes")
    ).data;
  } catch (error) {
    allAtendentes = [];
  }

  res.render("adm/pages/Atendentes.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuAtendente",
    allAtendentes,
  });
});

router.get("/motorista", async function (req, res, next) {
  let allMotorista;
  try {
    allMotorista = (
      await axios.get("http://localhost:9000/api/userADM/motoristas")
    ).data;
  } catch (error) {
    allMotorista = [];
  }

  res.render("adm/pages/Motorista.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuMotorista",
    allMotorista
  });
});

router.get("/pontoDeOnibus", async function (req, res, next) {
  let pontos;

  try {
    pontos = (await axios.get("http://localhost:9000/api/linhas/bus-stop"))
      .data;
  } catch (error) {
    pontos = null;
  }

  res.render("adm/pages/cadastroPontoDeOnibus.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuPontoDeOnibus",
    pontos,
  });
});

router.get("/passageiros", async function (req, res, next) {
  res.render("adm/pages/cadastroPassageiro.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuPassageiros",
  });
});

router.get("/onibus", async function (req, res, next) {
  res.render("adm/pages/cadastroOnibus.ejs", {
    layout: "adm/layouts/layout-index.ejs",
  });
});

router.get("/linhas", async function (req, res, next) {
  res.render("adm/pages/linhas.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuLinhas",
  });
});

router.get("/lojas", async function (req, res, next) {
  try {
    const { data } = await axios.get("http://localhost:9000/api/adm/lojas");
    // console.log(data); busca todos os jsons
    res.render("adm/pages/cadastroLojas.ejs", {
      layout: "adm/layouts/layout-index.ejs",
      cont: "#menuLojas",
      allLojas: data,
    });
  } catch (error) {
    res.status();
  }
});

module.exports = router;

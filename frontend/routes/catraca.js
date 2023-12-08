const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/?", async function (req, res, next) {


  res.render("catraca/pages/inicio.ejs", {
    layout: "catraca/layouts/layoutCatraca.ejs",
    iconimg: "../../images/inicioCatraca.svg",
    corback: `rgb(31,45,170)`,
    title: "Catraca inicio",
    linha: req.query.linha
  });
});

// erro
router.get("/erro", function (req, res, next) {
  res.render("catraca/pages/erro.ejs", {
    layout: "catraca/layouts/layoutCatraca.ejs",
    iconimg: "../../images/aviso.png",
    corback: "#E2E45C",
    title: "Catraca erro",
  });
});

// sucesso
router.get("/success/?", function (req, res, next) {


  res.render("catraca/pages/success.ejs", {
    layout: "catraca/layouts/layoutCatraca.ejs",
    iconimg: "../../images/ok.png",
    corback: "#73D271",
    title: "Catraca sucesso",
    ...req.query
  });
});

// saldo insuficiente
router.get("/saldoOff/?", function (req, res, next) {

  res.render("catraca/pages/saldoOff.ejs", {
    layout: "catraca/layouts/layoutCatraca.ejs",
    iconimg: "../../images/insuficiente.png",
    corback: "#df4a29",
    title: "saldo insuficiente",
    ...req.query
  });
});

module.exports = router;

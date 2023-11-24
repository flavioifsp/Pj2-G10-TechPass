const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    
  } catch (error) {}


  res.render("catraca/pages/inicio.ejs", { layout: false });
});


// router.get("/inicio", async function (req, res, next) {
//   try {
   
//   } catch (error) {}


//   res.render("catraca/pages/incio.ejs", { layout: false });
// });

// erro
router.get("/erro", function (req, res, next) {
  res.render("catraca/pages/erro.ejs", {
    layout: "catraca/layouts/layoutCatraca.ejs",
    iconimg: "../images/aviso.png",
    corback: "#E2E45C",
    title: "Catraca erro",
  });
});

// sucesso
router.get("/success", function (req, res, next) {
  const nome = "leopaia";
  const SaldoRestante = "11,12";
  const SaldoGasto = "3";

  // idoso
  // const modalidade = "I"
  // estudante
  // const modalidade = "E"

  // pcd (ex: cadeirante)
  const modalidade = "P";

  res.render("catraca/pages/success.ejs", {
    layout: "catraca/layouts/layoutCatraca.ejs",
    iconimg: "../images/ok.png",
    corback: "#73D271",
    title: "Catraca sucesso",
    nome,
    SaldoRestante,
    SaldoGasto,
    modalidade,
  });
});

// saldo insuficiente
router.get("/saldoOff", function (req, res, next) {
  const saldo = 2;
  const tarifa = 3;

  res.render("catraca/pages/saldoOff.ejs", {
    layout: "catraca/layouts/layoutCatraca.ejs",
    iconimg: "../images/insuficiente.png",
    corback: "#df4a29",
    title: "saldo insuficiente",
  });
});

module.exports = router;

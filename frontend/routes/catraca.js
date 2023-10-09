var express = require('express');
var router = express.Router();

/* GET home page. */
router.get( '/', function(req, res, next) {
  res.render( 'catraca/pages/CatracaIndex.ejs', {layout: false});
});

// sucesso
router.get( '/success', function(req, res, next) {
  const nome = "leopaia"
  const SaldoRestante = "11,12"
  const SaldoGasto = "3"

  // idoso
  // const modalidade = "I"
  // estudante
  // const modalidade = "E"

  // pcd (ex: cadeirante)
  const modalidade = "P"

  res.render( 'catraca/pages/success.ejs', {layout: "catraca/layouts/layoutCatraca.ejs", iconimg: "../images/ok.png", corback: "#73D271", title: "sucesso", nome, SaldoRestante, SaldoGasto, modalidade})
})



module.exports = router;


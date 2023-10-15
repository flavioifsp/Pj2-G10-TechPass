const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {

    const { data: { tarifa }, status } = (await axios.get(" http://localhost:9000/api/catraca/tarifa"))
    
    console.log(status)
    console.log(tarifa)

    res.render('catraca/pages/CatracaIndex.ejs', { layout: false, tarifa });
  } catch (error) {
    const msg = "o servidor nâo está respondendo"
    res.render('erro.ejs', { layout: false, statuscode: 500, msg});
  }

});




// erro
router.get('/erro', function (req, res, next) {
  res.render('catraca/pages/erro.ejs', {
    layout: "catraca/layouts/layoutCatraca.ejs",
    iconimg: "../images/aviso.png", corback: "#E2E45C", title: "Catraca erro"
  });
});



// sucesso
router.get('/success', function (req, res, next) {
  const nome = "leopaia"
  const SaldoRestante = "11,12"
  const SaldoGasto = "3"

  // idoso
  // const modalidade = "I"
  // estudante
  // const modalidade = "E"

  // pcd (ex: cadeirante)
  const modalidade = "P"


  res.render('catraca/pages/success.ejs', {
    layout: "catraca/layouts/layoutCatraca.ejs", iconimg: "../images/ok.png",
    corback: "#73D271", title: "Catraca sucesso", nome, SaldoRestante, SaldoGasto, modalidade
  })
})


// saldo insuficiente
router.get('/saldoOff', function (req, res, next) {
  const saldo = 2
  const tarifa = 3

  res.render('catraca/pages/saldoOff.ejs', {
    layout: "catraca/layouts/layoutCatraca.ejs",
    iconimg: "../images/insuficiente.png", corback: "#df4a29", title: "saldo insuficiente"
  });
});



module.exports = router;




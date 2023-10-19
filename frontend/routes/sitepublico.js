var express = require('express');
var router = express.Router();
const axiosGet = require('../js/req_get_axios')

/* GET home page. */
router.get('/',async function (req, res, next) {
  const {er, data} = await axiosGet("http://localhost:9000/api/linhas/allLinhas")

  res.render('site_publico/pages/index', {
    title: 'Tech Pass',
    layout: 'site_publico/layouts/layout_index.ejs',
    data,
    er
  });
});





/* GET rotas e linhas. */
router.get('/rotas&linhas', async function (req, res, next) {
  const {er, data} = await axiosGet("http://localhost:9000/api/linhas/allLinhas")
  
  res.render('site_publico/pages/rotas&linhas', {
    title: 'Rotas e Linhas',
    layout: 'site_publico/layouts/layout_index.ejs',
    linhas: data,
    er
  });
});







/* GET login. */
router.get('/login', function (req, res, next) {
  res.render('site_publico/pages/login', { title: 'Entrar', layout: 'site_publico/layouts/layout_auth.ejs', er: null });
});



/* GET cadastrar. */
router.get('/cadastrar', function (req, res, next) {
  res.render('site_publico/pages/cadastrar', { title: 'cadastrar', layout: 'site_publico/layouts/layout_auth.ejs', er: null });
});




module.exports = router;



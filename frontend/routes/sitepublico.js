var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get( '/', function(req, res, next) {
  res.render( 'site_publico/pages/index' , { title: 'Tech Pass', layout: 'site_publico/layouts/layout_index.ejs' });
 });


 
/* GET rotas e linhas. */
router.get( '/rotas&linhas', async function(req, res, next) {
   this.er
   this.data 

  try{ 
    const {data} = await axios.get("http://localhost:9000/api/linhas/allLinhas")
    this.data = data
  } catch(er){this.er = er}
  

  res.render( 'site_publico/pages/rotas&linhas' , { title: 'Rotas e Linhas', layout: 'site_publico/layouts/layout_index.ejs', linhas: this.data, er: this.er });
}); 



/* GET login. */
router.get( '/login', function(req, res, next) {
  res.render( 'site_publico/pages/login' , { title: 'Entrar', layout: 'site_publico/layouts/layout_auth.ejs' });
 });

/* GET cadastrar. */
router.get( '/cadastrar', function(req, res, next) {
  res.render( 'site_publico/pages/cadastrar' , { title: 'cadastrar', layout: 'site_publico/layouts/layout_auth.ejs' });
 });

  

 
module.exports = router;
 


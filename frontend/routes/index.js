var express = require('express');
var router = express.Router();

/* GET home page. */
router.get( '/', function(req, res, next) {
  res.render( 'site_publico/pages/index' , { title: 'Tech Pass', layout: 'site_publico/layouts/layout_index.ejs' });
 });


/* GET rotas e linhas. */
router.get( '/rotas&linhas', function(req, res, next) {
  res.render( 'site_publico/pages/rotas&linhas' , { title: 'Rotas e Linhas', layout: 'site_publico/layouts/layout_index.ejs' });
 });

/* GET login. */
router.get( '/login', function(req, res, next) {
  res.render( 'site_publico/pages/login' , { title: 'Entrar', layout: 'site_publico/layouts/layout_index.ejs' });
 });

 
module.exports = router;

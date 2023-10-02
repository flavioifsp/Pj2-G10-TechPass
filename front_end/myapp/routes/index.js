var express = require('express');
var router = express.Router();

/* GET home page. */
router.get( '/', function(req, res, next) {
  res.render( 'site_publico/pages/index' , { title: 'Tech Pass', layout: 'site_publico/layouts/layout_index.ejs' });
 });

module.exports = router; 
      
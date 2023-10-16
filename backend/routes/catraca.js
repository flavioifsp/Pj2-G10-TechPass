var express = require('express');
var router = express.Router();





/* GET users listing. */
router.get('/tarifa', function(req, res, next){
  res.json({"tarifa": 100})
});


   

module.exports = router;
          
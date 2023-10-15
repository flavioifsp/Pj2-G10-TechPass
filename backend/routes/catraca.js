var express = require('express');
var router = express.Router();
const cors = require('cors')




/* GET users listing. */
router.get('/tarifa',cors({origin: "http://www.paia.com.br:3000"}), function(req, res, next){
  res.json({"tarifa": 100})
});




module.exports = router;
      
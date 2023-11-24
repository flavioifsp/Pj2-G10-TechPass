const express = require("express");
const router = express.Router();
const axios = require("axios");
const prisma = new (require("@prisma/client").PrismaClient)();





/* GET users listing. */
router.get('/tarifa', function(req, res, next){
  res.json({"tarifa": 100})
});

router.get('/inicio', async function(req, res, next){

try{
const cartao = await prisma.clientes.findMany()

console.log(cartao);

res.status(200).json(cartao);
} catch (error) {
  const erro = exception(error);
  console.error(error);
  res.status(erro.code).send(erro.msg);
}

})
   

module.exports = router;
          
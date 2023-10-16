const express = require('express');
const router = express.Router();
const prisma = new (require("@prisma/client")).PrismaClient()
const exception = require('../js/erro')



/* retorna todas as linhas. */
router.get("/", async function (req, res, next) {
  try {
    const linhas = await prisma.onibus.findMany()

    res.send(JSON.stringify(linhas))

  } catch(er) {
    
    const erro = exception(er)
    res.status(erro.code).send(erro.msg)
  }
});

module.exports = router;

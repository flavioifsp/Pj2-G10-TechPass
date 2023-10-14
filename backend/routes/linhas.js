const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* retorna todas as linhas. */
router.get("/", async function (req, res, next) {
  try{
     const linhas = await prisma.linha.findMany({
      orderBy: {
         numero_linha: 'asc'
      }
     })

  
     res.send(JSON.stringify(linhas))
  } catch{
    res.status(500).send("erro")
  }
});

module.exports = router;
     
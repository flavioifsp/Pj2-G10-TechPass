var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
router.post("/lojas", async (req, res, next) => {
  try {
    const { endereco, cep, latitude, longitude } = req.body;

    const novaLoja = await prisma.lojas_recarga.create({
      data: {
        endereco,
        cep,
        latitude,
        longitude,
      },
    });

    res.json(novaLoja);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar a linha." });
  }
});

module.exports = router;

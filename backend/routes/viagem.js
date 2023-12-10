const express = require("express");
const router = express.Router();
const axios = require("axios");
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

router.get("/inicio/", async function (req, res, next) {
  try {
    const response = await prisma.viagem.create({
      data: {
        onibus_id,
        motorista_SU_id,
        linhas_id,
      },
      include: {
        linhas: true,
        motorista: {
          select: {
            superuser: {
              select: {
                nome: true,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

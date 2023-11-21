const express = require("express");
const router = express.Router();
const axios = require("axios");
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

/* retorna todas as linhas. */
router.get("/", async function (req, res, next) {
  try {
    let linhas = await prisma.linhas.findMany({

      
    });

    // const temp = []
    // linhas.forEach((e) =>{
    //   e
    // })

    // linhas = linhas.map((elem) => {
    //   return {
    //     bairro1: linhas.,
    //     bairro2: elem.bairro2,
    //     numLinha: elem.num_linha,
    //     infos_da_linha: [
    //       {
    //         infosB1: elem.horario_b1,
    //         infosB2: elem.horario_b2,
    //       },
    //       {
    //         infosB1: elem.itinerario_b1,
    //         infosB2: elem.itinerario_b2,
    //       },
    //     ],
    //   };
    // });

    res.json(linhas);
  } catch (er) {
    const erro = exception(er);
    res.status(erro.code).send(erro.msg);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { rota1, rota2, numero_linha } = req.body;

    if (
      rota1.bairroDestino !== rota2.bairroOrigem ||
      rota2.bairroDestino !== rota1.bairroOrigem
    )
      return res.status(406).send("dados invalidos");

    // const rota1 = {
    //
    // };

    let numeroDalinha;

    for (const rota of [rota1, rota2]) {
      const { bairroDestino, bairroOrigem, percursos, horarios } = rota;

      numeroDalinha = await prisma.linhas.create({
        data: {
          bairroDestino,
          bairroOrigem,
          numero_linha: parseInt(numero_linha),

          percurso: {
            create: percursos,
          },

          horario_diario_saida: {
            create: horarios,
          },
        },
        select: {
          id: true,
        },
      });
    }

    res.json(numeroDalinha);
    // https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#create-multiple-records-and-multiple-related-records
  } catch (er) {
    const erro = exception(er);
    res.status(erro.code).send(erro.msg);
  }
});

module.exports = router;

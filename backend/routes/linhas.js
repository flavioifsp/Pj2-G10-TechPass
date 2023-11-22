const express = require("express");
const router = express.Router();
const axios = require("axios");
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

/* retorna todas as linhas. */
router.get("/", async function (req, res, next) {
  try {
    let linhas = await prisma.linhas.findMany({
      include: {
        horario_diario_saida: true,
        percurso: true,
      },
    });


    const linhaApos = (linhas.length);


    linhas = linhas.map((elem, i) => {
      // console.log(horario, perc);
      if (i % 2 === 0) {
        const paia = elem;

        paia.horario_diario_saida = [elem.horario_diario_saida];
        paia.percurso = [elem.percurso];

        return paia;
      } else {
        linhas[i -1].horario_diario_saida.push(elem.horario_diario_saida)
        linhas[i -1].percurso.push(elem.percurso)
      }
    }).filter(element =>  element != null)


    console.log(linhas.length);

    // else if (i > 0) {
    //   console.log(i);
    //   return
    //   temp[i - 1].horario_diario_saida.push(horario);
    //   temp[i - 1].percurso.push(perc);
    // }

    res.json({linhas});
  } catch (er) {
    const erro = exception(er);
    console.log(er);
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

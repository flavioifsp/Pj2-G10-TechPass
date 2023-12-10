const express = require("express");
const router = express.Router();
const axios = require("axios");
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

const autenticar = require("../js/functionJWT").autenticarADM(["adm"])

/* retorna todas as linhas. */
router.get("/", async function (req, res, next) {
  try {
    let linhas = await prisma.linhas.findMany({
      orderBy: {
        numero_linha: "asc",
      },
      include: {
        horario_diario_saida: {
          orderBy: {
            horario_de_saida: "asc",
          },
        },
        percurso: {
          orderBy: { ordem_do_percurso: "asc" },
          include: {
            ponto_de_onibus: true,
          },
        },
      },
    });

    linhas = linhas
      .map((elem, i) => {
        // console.log(horario, perc);
        if (i % 2 === 0) {
          const paia = elem;
          paia.id = [elem.id];
          paia.horario_diario_saida = [elem.horario_diario_saida];
          paia.percurso = [elem.percurso];

          return paia;
        } else {
          linhas[i - 1].horario_diario_saida.push(elem.horario_diario_saida);
          linhas[i - 1].percurso.push(elem.percurso);
          linhas[i - 1].id.push(elem.id);
        }
      })
      .filter((element) => element != null);

    res.json(linhas);
  } catch (er) {
    const erro = exception(er);
    console.log(er);
    res.status(erro.code).send(erro.msg);
  }
});

router.post("/", autenticar, async (req, res, next) => {
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

router.patch("/atualizar/:id", autenticar, async (req, res, next) => {
  try {
    const linhaAtt = await prisma.linhas.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    });

    res.json(linhaAtt);
  } catch (er) {
    const erro = exception(er);
    res.status(erro.code).send(erro.msg);
    console.log(er);
  }
});

router.patch("/atualizar/horarios/:id", autenticar, async (req, res, next) => {
  try {
    const linhaAtt = await prisma.horario_diario_saida.updateMany({
      where: {
        linhas_id: parseInt(req.params.id),
      },
      data: req.body,
    });

    res.json(linhaAtt);
  } catch (er) {
    const erro = exception(er);
    res.status(erro.code).send(erro.msg);
    console.log(er);
  }
});

router.delete("/deletar/:id", autenticar, async (req, res, next) => {
  try {
    const linhas_id = parseInt(req.params.id);

    await prisma.horario_diario_saida.deleteMany({
      where: {
        linhas_id: linhas_id,
      },
    });

    await prisma.percurso.deleteMany({
      where: {
        linha_id: linhas_id,
      },
    });

    const deleteLinhas = await prisma.linhas.delete({
      where: {
        id: linhas_id,
      },
      select: {
        numero_linha: true,
        id: true,
      },
    });

    res.status(204).json({
      message: `A linha ${deleteLinhas.numero_linha} do ID ${deleteLinhas.id} foi apagada`,
    });
  } catch (error) {
    const erro = exception(error);
    res.status(erro.code).send(erro.msg);
  }
});

module.exports = router;

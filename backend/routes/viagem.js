const express = require("express");
const router = express.Router();
const axios = require("axios");
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

const autenticar = require("../js/functionJWT").autenticarADM(["motorista"]);
const autenticarADM = require("../js/functionJWT").autenticarADM(["adm"]);

// iniciar viagem
router.post("/", autenticar, async function (req, res, next) {
  try {
    const { motorista_SU_id, linhas_id, onibus_id } = req.body;

    const response = await prisma.viagem.create({
      data: { motorista_SU_id, linhas_id, onibus_id },
      select: {
        linhas: {
          select: {
            numero_linha: true,
          },
        },
      },
    });

    res.status(201).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

// todas as viagens do mtorista
router.get("/motorista/:id", autenticar, async (req, res) => {
  try {
    const response = await prisma.viagem.findMany({
      where: {
        motorista_SU_id: parseInt(req.params.id),
      },
      include: {
        linhas: true,
        motorista: {
          include: {
            superuser: true,
          },
        },
        onibus: true,
      },
      orderBy: [
        { inicio: "desc" },
        {
          duracao: {
            nulls: "first",
            sort: "desc",
          },
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

// finalizar viagem
router.patch("/:id", autenticar, async (req, res) => {
  try {
    let NovaDuracao = await prisma.viagem.findFirst({
      where: {
        AND: [{ id: parseInt(req.params.id) }, { duracao: null }],
      },
      select: {
        inicio: true,
      },
    });

    NovaDuracao = Math.floor(
      (new Date() - new Date(NovaDuracao.inicio)) / (60 * 1000)
    );

    const response = await prisma.viagem.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        duracao: NovaDuracao === 0 ? 1 : NovaDuracao,
      },
      select: {
        duracao: true,
        linhas: {
          select: {
            numero_linha: true,
          },
        },
      },
    });

    res.status(200).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

// historico de viagens
router.get("/", autenticarADM, async (req, res) => {
  try {
    const response = await prisma.viagem.findMany({
      include: {
        linhas: true,
        motorista: {
          include: {
            superuser: true,
          },
        },
        onibus: true,
        embarque: {
          include: {
            cartoes_do_cliente: {
              include: {
                clientes: true,
                tipos_de_cartao: true,
              },
            },
          },
          orderBy: {
            data: "desc",
          },
        },
      },
      orderBy: [
        { inicio: "desc" },
        {
          duracao: {
            nulls: "first",
            sort: "desc",
          },
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

module.exports = router;

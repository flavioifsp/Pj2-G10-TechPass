var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const { gerarCookieToken, autenticar } = require("../js/functionJWT");
const bcry = require("bcryptjs");
const multerCustom = require("../js/multer.js")("atendentes");

router.use(
  require("../js/functionJWT").autenticarADM(["motorista", "atendente"])
);

router.post("/atendente", multerCustom, async (req, res) => {
  const {
    email,
    senha,
    nome,
    cpf,
    endereco,
    foto,
    nascimento,
    turno,
    telefone,
  } = req.body;

  try {
    const response = await prisma.superuser.create({
      data: {
        email,
        senha: await bcry.hash(senha, 10),
        nascimento: new Date(nascimento),
        nome,
        cpf,

        atendente: {
          create: {
            foto,
            endereco,
            turno,
            telefone,
            local_de_trabalho_id:
              parseInt(req.body.local_de_trabalho_id) || undefined,
          },
        },
      },

      select: {
        cpf: true,
      },
    });

    res.status(201).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.put("/atendente/:id", multerCustom, async (req, res) => {
  const {
    email,
    senha,
    nome,
    cpf,
    endereco,
    foto,
    nascimento,
    turno,
    telefone,
  } = req.body;

  const superUserID = parseInt(req.params.id);
  try {
    const response = await prisma.superuser.update({
      where: {
        id: superUserID,
      },
      data: {
        email,
        senha: senha ? await bcry.hash(senha, 10) : undefined,
        nascimento: new Date(nascimento),
        nome,
        cpf,
        atendente: {
          update: {
            where: { superUser_id: superUserID },
            data: {
              foto,
              endereco,
              turno,
              telefone,
              local_de_trabalho_id:
                parseInt(req.body.local_de_trabalho_id) || undefined,
            },
          },
        },
      },

      select: {
        cpf: true,
      },
    });

    res.status(201).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.get("/atendentes", async (req, res) => {
  try {
    const atendentes = await prisma.atendente.findMany({
      include: {
        superuser: true,
        loja_recarga: true,
      },
    });
    res.status(200).json(atendentes);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.delete("/atendente/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const atendentes = await prisma.atendente.delete({
      where: {
        superUser_id: parseInt(id),
      },

      select: {
        superuser: {
          select: {
            cpf: true,
          },
        },
      },
    });

    await prisma.superuser.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(204).json(atendentes);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

module.exports = router;

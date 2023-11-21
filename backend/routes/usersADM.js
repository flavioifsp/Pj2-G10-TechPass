var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const { gerarCookieToken, autenticar } = require("../js/functionJWT");
const bcry = require("bcryptjs");

router.post("/atendente", async (req, res) => {
  const {
    email,
    senha,
    username,
    cpf,
    endereco,
    nascimento,
    turno,
    telefone,
    local_de_trabalho_id,
  } = req.body;

  try {
    const response = await prisma.superuser.create({
      data: {
        email,
        senha,
        username,
        atendente: {
          create: {
            cpf,
            endereco,
            nascimento: new Date(nascimento),
            turno,
            telefone,
            local_de_trabalho_id: parseInt(local_de_trabalho_id),
          },
        },
      },

      select: {
        username: true,
      },
    });

    res.status(201).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.put("/atendente/:id", async (req, res) => {
  const {
    email,
    senha,
    username,
    cpf,
    endereco,
    nascimento,
    turno,
    telefone,
    local_de_trabalho_id,
  } = req.body;

  const superUserID = parseInt(req.params.id);
  try {
    const response = await prisma.superuser.update({
      where: {
        id: superUserID,
      },
      data: {
        email,
        senha,
        username,
        atendente: {
          update: {
            where: { superUser_id: superUserID },
            data: {
              cpf,
              endereco,
              nascimento: new Date(nascimento),
              turno,
              telefone,
              local_de_trabalho_id: parseInt(local_de_trabalho_id),
            },
          },
        },
      },

      select: {
        username: true,
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
        id: parseInt(id),
      },
      select: {
        superuser: {
          select: {
            username: true,
            email: true,
          },
        },
      },
    });
    res.status(204).json(atendentes);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.post("/motorista", async (req, res) => {
  try {
    const response = await prisma.motorista.create({
      data: req.body,
    });

    res.status(201).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.get("/motoristas", async (req, res) => {
  try {
    const response = await prisma.motorista.findMany()

    res.status(200).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.delete("/motorista/:id", async (req, res) => {
  try {
    const response = await prisma.motorista.delete({
      where:{
        id: parseInt(req.params.id)
      }
    })

    res.status(204).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});


router.put("/motorista/:id", async (req, res) => {
  try {
    const response = await prisma.motorista.update({
      where:{
        id: parseInt(req.params.id)
      },
      data: req.body
    })

    res.status(204).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});




module.exports = router;

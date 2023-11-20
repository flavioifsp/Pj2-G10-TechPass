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

router.get("/atendentes", async (req, res) => {
  try {
    const atendentes = await prisma.atendente.findMany({
      include:{
        superuser: {
          select:{
            username: true,
            email: true
          }
        },
        loja_recarga: true,
      }
    });
    res.status(200).json(atendentes);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.delete("/atendente/:id", async (req, res) => {
  const {id} = req.params
  try {
    const atendentes = await prisma.atendente.delete({
      where: {
        id: parseInt(id)
      },
      select:{
        superuser:{
          select:{
            username: true,
            email:true 
          }
        }
      }
    });
    res.status(204).json(atendentes);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});




module.exports = router;

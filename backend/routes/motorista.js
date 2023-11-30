var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const { gerarCookieToken, autenticar } = require("../js/functionJWT");
const bcry = require("bcryptjs");
const multerCustom = require("../js/multer.js")("motoristas")

router.post("/motorista", multerCustom, async (req, res) => {
  try {
    const { nome, nascimento, cpf, foto, cnh, email, senha} = req.body

    const response = await prisma.motorista.create({
      data: {
        cnh,
        foto,
        superuser:{ 
          create:{
            cpf,
            email,
            nascimento,
            nome,
            senha
          }
        }
      },
      include:{
        superuser: true
      }
    });

    console.log(response);
    res.status(201).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
}); 

router.get("/motoristas", async (req, res) => {
  try {
    const response = await prisma.motorista.findMany({
      include: {
        superuser: true
      }
    });

    res.status(200).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.delete("/motorista/:superuser_id", async (req, res) => {
  try {
    await prisma.motorista.delete({
      where: {
        superUser_id: parseInt(req.params.superuser_id),
      },
    });

    const response = await prisma.superuser.delete({
      where: {
        id: parseInt(req.params.superuser_id),
      },
    });

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
      where: {
        id: parseInt(req.params.superuser_id),
      },
      data: req.body,
    });

    res.status(204).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

module.exports = router;

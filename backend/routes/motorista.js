var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const { gerarCookieToken, autenticar } = require("../js/functionJWT");
const bcry = require("bcryptjs");

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
    const response = await prisma.motorista.findMany();

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
      where: {
        id: parseInt(req.params.id),
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
        id: parseInt(req.params.id),
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

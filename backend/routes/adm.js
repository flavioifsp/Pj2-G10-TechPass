var express = require("express");
var router = express.Router();
const { PrismaClient, Prisma } = require("@prisma/client");
const exception = require("../js/erro");

const prisma = new PrismaClient();

router.post("/lojas", async (req, res, next) => {
  try {
    const { nome, cep, street, state, city, neighborhood, lat, lng } = req.body;

    // const novaLoja = await prisma.loja_recarga.create({
    const novaLoja = await prisma.loja_recarga.create({
      data: {
        nome,
        endereco: `${street}, ${neighborhood}, ${city}, ${state}`,
        cep: cep,
        lat,
        lng,
      },
    });

    res.status(201).json({
      message: `Loja no endereço ${novaLoja.endereco} criado com sucesso`,
    });
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.get("/lojas", async (req, res, next) => {
  try {
    // const novaLoja = await prisma.loja_recarga.create({
    const allLojas = await prisma.loja_recarga.findMany();

    res.status(200).json(allLojas);
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

module.exports = router;

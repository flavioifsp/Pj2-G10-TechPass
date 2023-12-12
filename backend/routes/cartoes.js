var express = require("express");
var router = express.Router();
const { PrismaClient, Prisma } = require("@prisma/client");
const exception = require("../js/erro");
const prisma = new PrismaClient();

const autenticar = require("../js/functionJWT").autenticarADM([
 "adm"
]);

router.get("/card", async (req, res, next) => {
  try {
    // const novaLoja = await prisma.loja_recarga.create({
    const card = await prisma.tipos_de_cartao.findMany();

    res.status(200).json(card);
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.post("/card", autenticar, async (req, res, next) => {
  try {
    let { modalidade, tarifa } = req.body;

    // const novaLoja = await prisma.loja_recarga.create({
    const novoCartao = await prisma.tipos_de_cartao.create({
      data: {
        modalidade,
        tarifa,
      },
    });

    res.status(201).json({
      message: `Cartão com modalidade - ${novoCartao.modalidade} e tarifa de - R$ ${novoCartao.tarifa} criado com sucesso`,
    });
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.delete("/card/:id", autenticar, async (req, res) => {
  try {
    const data = await prisma.tipos_de_cartao.delete({
      where: {
        id: Number(req.params.id),
      },
     
    });

    res.status(200).json(data);
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.put("/card/:id", autenticar, async (req, res, next) => {
  try {
    const {  tarifa, modalidade } = req.body;

    const novoCartao = await prisma.tipos_de_cartao.update({
      where: {
        id: parseInt(req.params.id),
      },

      data: {
        tarifa: parseFloat(tarifa),
        modalidade,
      },
    });


    res.status(201).json({
      message: `Cartao ${modalidade} foi editado`,
    });
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

module.exports = router;

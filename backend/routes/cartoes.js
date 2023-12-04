var express = require("express");
var router = express.Router();
const { PrismaClient, Prisma } = require("@prisma/client");
const exception = require("../js/erro");
const prisma = new PrismaClient();


router.use(
  require("../js/functionJWT").autenticarADM(["motorista", "atendente"])
);

router.get("/cartoes", async (req, res, next) => {
  try {
    // const novaLoja = await prisma.loja_recarga.create({
    const allcartoes = await prisma.tipos_de_cartao.findMany();

    res.status(200).json(allcartoes);
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.post("/cartoes", async (req, res, next) => {
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

router.delete("/cartoes/:id", async (req, res) => {
  try {
    const deleteLoja = await prisma.tipos_de_cartao.delete({
      where: {
        id: Number(req.params.id),
      },
      select: {
        id: true,
      },
    });

    res.status(200).send();
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.put("/cartoes", async (req, res, next) => {
  try {
    const { id, tarifa, modalidade } = req.body;

    const novoCartao = await prisma.tipos_de_cartao.update({
      where: {
        id: id,
      },

      data: {
        tarifa: parseFloat(tarifa),
        modalidade,
      },
    });
    console.log(novoCartao);

    res.status(201).json({
      message: `Cartao ${modalidade} adicionado com sucesso`,
    });
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

module.exports = router;

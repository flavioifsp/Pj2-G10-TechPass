const express = require("express");
const router = express.Router();
const axios = require("axios");
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

router.get("/inicio/:viagem/:codigo/", async function (req, res, next) {
  try {
    const getCartao = await prisma.cartoes_do_cliente.findUniqueOrThrow({
      where: {
        codigo_do_cartao: parseInt(req.params.codigo),
      },
      include: {
        clientes: true,
        tipos_de_cartao: true,
      },
    });


    const tarifa = parseFloat(getCartao.tipos_de_cartao.tarifa)
    const saldo  = parseFloat(getCartao.clientes.saldo)

    
    if (saldo < tarifa) {
      return res.status(402).json({ msg: "saldo insuficiente" });
    }

    const response = await prisma.cartoes_do_cliente.update({
      where: {
        codigo_do_cartao: parseInt(req.params.codigo),
      },
      data: {
        clientes: {
          update: {
            saldo: { decrement: tarifa },
          },
        },
        embarque: {
          create: {
            data: new Date(),
            historico_tarifa: tarifa,
            viagem_id: parseInt(req.params.viagem),
          },
        },
      },
      select: {
        clientes: {
          select: {
            nome: true,
            saldo: true
          },
        },
        tipos_de_cartao: {
          select: {
            tarifa: true,
            modalidade: true,
          },
        },
      },
    });

    res.status(201).json(response);
  } catch (error) {
    if (error.code === "P2025") {
      res.json(error);
      console.log(error);
    } else {
      const erro = exception(error);
      console.log(erro);
      res.status(erro.code).json(erro.msg);
    }
  }
});

module.exports = router;

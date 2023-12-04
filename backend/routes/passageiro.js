var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const { gerarCookieToken, autenticar } = require("../js/functionJWT");
const bcry = require("bcryptjs");

router.patch("/passageirosRecarga/:id/:recarga", async (req, res, next) => {
  try {
    const { id, recarga } = req.params;

    const idN = parseInt(id);
    const recargaN = parseFloat(recarga);

    const novaRecarga = await prisma.clientes.update({
      where: {
        id: idN,
      },

      data: {
        saldo: {
          increment: recargaN,
        },
      },
    });
    console.log(novaRecarga);

    res.status(201).json({
      message: `Passageiro adicionado com sucesso`,
    });
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.get("/passageiros", async (req, res, next) => {
  try {
    const allPassageiros = await prisma.clientes.findMany();

    res.status(200).json(allPassageiros);
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.post("/passageiros", async (req, res, next) => {
  try {
    const { nome, username, cpf, nascimento, saldo, email, senha } = req.body;

    const novoPassageiro = await prisma.clientes.create({
      data: {
        email,
        cpf,
        username,
        senha: await bcry.hash(senha, 10),

        nome,
        nascimento: `${nascimento}T00:00:00Z`,
        saldo: 0,
      },
    });

    res.status(201).json({
      message: `Passageiro ${novoPassageiro.nome} adicionado com sucesso`,
    });
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.put("/passageiros", async (req, res, next) => {
  try {
    const { id, nome, username, cpf, nascimento, email } = req.body;

    const novoPassageiro = await prisma.clientes.update({
      where: {
        id: id,
      },

      data: {
        email,
        cpf,
        username,
        nome,
        nascimento,
      },
    });

    res.status(201).json({
      message: `Passageiro ${nome} adicionado com sucesso`,
    });
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.delete("/passageiros/:id", async (req, res) => {
  try {
    const deleteLoja = await prisma.clientes.delete({
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

module.exports = router;

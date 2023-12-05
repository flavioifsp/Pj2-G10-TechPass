var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const bcry = require("bcryptjs");

const autenticar = require("../js/functionJWT").autenticarADM([
  "motorista",
  "atendente",
]);




router.patch("/passageiros/card/:id", autenticar, async (req, res, next) => {
  try {
    const { codigo_do_cartao, cartao_id } = req.body;

    const response = await prisma.clientes.update({
      where: {
        id: parseInt(req.params.id),
      },

      data: {
        cartoes_do_cliente: {
          create: {
            codigo_do_cartao: parseInt(codigo_do_cartao),
            cartao_id: parseInt(cartao_id),
          },
        },
      },
    });
    

    res.status(201).json(response);
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.patch(
  "/passageirosRecarga/:id/:recarga",
  autenticar,
  async (req, res, next) => {
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
  }
);

router.get("/passageiros", autenticar, async (req, res, next) => {
  try {
    const allPassageiros = await prisma.clientes.findMany({
      include:{
        cartoes_do_cliente:{
          include:{
            tipos_de_cartao: true
          }
        }
      }
    });

    res.status(200).json(allPassageiros);
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.post("/passageiros", autenticar, async (req, res, next) => {
  try {
    const { nome, username, cpf, nascimento, email, senha } = req.body;

    const novoPassageiro = await prisma.clientes.create({
      data: {
        email,
        cpf,
        username,
        senha: await bcry.hash(senha, 10),

        nome,
        nascimento,
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

router.put("/passageiros", autenticar, async (req, res, next) => {
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

router.delete("/passageiros/:id", autenticar, async (req, res) => {
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

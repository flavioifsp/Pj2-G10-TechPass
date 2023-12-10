var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const bcry = require("bcryptjs");
const multerCustom = require("../js/multer.js")("motoristas");

const autenticar = require("../js/functionJWT").autenticarADM([
  "adm",
]);

router.post("/motorista", autenticar, multerCustom, async (req, res) => {
  try {
    const { nome, nascimento, cpf, foto, cnh, email, senha } = req.body;

    const response = await prisma.motorista.create({
      data: {
        cnh,
        foto,
        superuser: {
          create: {
            cpf,
            email,
            nascimento,
            nome,
            senha: await bcry.hash(senha, 10),
          },
        },
      },
      include: {
        superuser: true,
      },
    });

    res.status(201).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.get("/motoristas", autenticar, async (req, res) => {
  try {
    const response = await prisma.motorista.findMany({
      include: {
        superuser: true,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.delete("/motorista/:superuser_id", autenticar, async (req, res) => {
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

router.put("/motorista/:id", autenticar, multerCustom, async (req, res) => {
  try {
    const { cnh, foto, nome, senha, email, cpf, nascimento } = req.body;

    const response = await prisma.motorista.update({
      where: {
        superUser_id: parseInt(req.params.id),
      },
      data: {
        cnh,
        foto,
        superuser: {
          update: {
            where: { id: parseInt(req.params.id) },
            data: {
              nome,
              senha: senha ? await bcry.hash(senha, 10) : undefined,
              email,
              cpf,
              nascimento,
            },
          },
        },
      },
    });

    console.log(response);
    res.status(204).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

module.exports = router;

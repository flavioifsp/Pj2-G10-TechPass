var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

function autenticar(cargos_permitidos = ["adm"]) {
  return require("../js/functionJWT").autenticarADM(cargos_permitidos);
}
router.post("/", autenticar(), async (req, res) => {
  try {
    const {
      placa,
      estado_atual,
      possui_acessibilidade,
      quantidade_passageiros,
    } = req.body;

    const response = await prisma.onibus.create({
      data: {
        placa,
        estado_atual,
        possui_acessibilidade,
        quantidade_passageiros: parseInt(quantidade_passageiros),
      },
    });

    res.status(201).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.get("/", autenticar(["adm", "motorista"]), async (req, res) => {
  try {
    const response = await prisma.onibus.findMany();

    res.status(200).json(response);
  } catch (error) {
    const erro = exception(error);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

router.delete("/:id", autenticar(), async (req, res) => {
  try {
    const response = await prisma.onibus.delete({
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

router.put("/:id", autenticar(), async (req, res) => {
  try {
    const {
      placa,
      estado_atual,
      possui_acessibilidade,
      quantidade_passageiros,
    } = req.body;

    const response = await prisma.motorista.update({
      where: {
        superUser_id: parseInt(req.params.id),
      },
      data: {
        placa,
        estado_atual,
        possui_acessibilidade,
        quantidade_passageiros: parseInt(quantidade_passageiros),
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

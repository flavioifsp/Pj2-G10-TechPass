var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const preencherCoord = require("../js/LatLong_corretos")
const bcry = require("bcryptjs");


const autenticar =  require("../js/functionJWT").autenticarADM([
  "adm"
])
 

router.get("/lojas",  async (req, res, next) => {
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

router.post("/lojas", autenticar, preencherCoord,async (req, res, next) => {
  try {
    let { nome, cep, street, state, city, neighborhood, lat, lng } = req.body;

    // if(lat || lng){

    // }

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

router.put("/lojas",autenticar, preencherCoord,async (req, res) => {
  const { id, nome, cepInput, street, state, city, neighborhood, lat, lng } =
    req.body;

  try {
    const editLoja = await prisma.loja_recarga.update({
      where: {
        id: parseInt(id),
      },

      data: {
        nome,
        cep: cepInput,
        endereco: `${street}, ${neighborhood}, ${city}, ${state}`,
        lat: lat,
        lng: lng,
      },
      select: {
        endereco: true,
      },
    });

    res.status(201).json({
      message: `Loja no endereço foi  alterado com sucesso!`,
    });
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.delete("/loja/:id", autenticar,async (req, res) => {
  try {
    const deleteLoja = await prisma.loja_recarga.delete({
      where: {
        id: Number(req.params.id),
      },
      select: {
        cep: true,
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

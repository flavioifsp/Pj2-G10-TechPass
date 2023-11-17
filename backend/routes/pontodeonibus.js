const express = require("express");
const router = express.Router();
const axios = require("axios");
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

// criar ponto de onibus
router.post("/bus-stop", async (req, res) => {
  const { cep, street, state, city, neighborhood, lat, lng } = req.body;

  try {
    const createBusStop = await prisma.ponto_de_onibus.create({
      data: {
        cep: cep,
        endereco: `${street}, ${neighborhood}, ${city}, ${state}`,
        lat: lat,
        lng: lng,
      },
      select: {
        endereco: true,
      },
    });

    res.status(201).json({
      message: `Ponto no endereço '${createBusStop.endereco}' criado com sucesso!`,
    });
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

// mostrar todos os pontos
router.get("/bus-stop", async (req, res) => {
  try {
    const createBusStop = await prisma.ponto_de_onibus.findMany();

    res.status(200).json(createBusStop);
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.delete("/bus-stop/:id", async (req, res) => {
  try {
    const deleteBusStop = await prisma.ponto_de_onibus.delete({
      where: {
        id: Number(req.params.id),
      },
      select: {
        cep: true,
        id: true,
      },
    });

    res.status(200).json({
      message: `Ponto de Onibus do cep ${deleteBusStop.cep} deletado `,
    });
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});
// criar ponto de onibus
router.post("/bus-stop", async (req, res) => {
  const { cep, street, state, city, neighborhood, lat, lng } = req.body;

  try {
    const createBusStop = await prisma.ponto_de_onibus.create({
      data: {
        cep: cep,
        endereco: `${street}, ${neighborhood}, ${city}, ${state}`,
        lat: lat,
        lng: lng,
      },
      select: {
        endereco: true,
      },
    });

    res.status(201).json({
      message: `Ponto no endereço '${createBusStop.endereco}' criado com sucesso!`,
    });
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.put("/bus-stop", async (req, res) => {
  const {  id, cepInput, street, state, city, neighborhood, lat, lng } = req.body;

  
  try {
    const editBusStop = await prisma.ponto_de_onibus.update({

      where:{
        id: id
      },

      data: {
        cep: cepInput,
        endereco: `${street}, ${neighborhood}, ${city}, ${state}`,
        lat: lat,
        lng: lng,
      },
      select: {
        endereco: true,
      },
      
    });
    console.log(editBusStop)
    res.status(201).json({
      message: `Ponto no endereço foi  alterado com sucesso!`,
    });
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

// mostrar todos os pontos
router.get("/bus-stop", async (req, res) => {
  try {
    const createBusStop = await prisma.ponto_de_onibus.findMany();

    res.status(200).json(createBusStop);
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.delete("/bus-stop/:id", async (req, res) => {
  try {
    const deleteBusStop = await prisma.ponto_de_onibus.delete({
      where: {
        id: Number(req.params.id),
      },
      select: {
        cep: true,
        id: true,
      },
    });

    res.status(200).json({
      message: `Ponto de Onibus do cep ${deleteBusStop.cep} deletado `,
    });
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

module.exports = router;

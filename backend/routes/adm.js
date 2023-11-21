var express = require("express");
var router = express.Router();
const { PrismaClient, Prisma } = require("@prisma/client");
const exception = require("../js/erro");

const prisma = new PrismaClient();
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
router.put("/passageiros/:id", async (req, res, next) => {
  try {
    const {  nome, username, cpf, nascimento, saldo, email, senha} = req.body;

 
    const novoPassageiro = await prisma.clientes.update({
   
      where:{
        id: parseInt(req.params.id)
     },

      data: {
        email,
        cpf,
        username,
        senha,
        nome,
        nascimento,
        saldo,
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

router.put("/lojas", async (req, res) => {
  const {  id, username, nascimento, email, cpf, saldo, nome} = req.body;

  
  try {
    const editLoja = await prisma.loja_recarga.update({

      where:{
        id: id
      },

      data: {
        email,
       cpf,
       username,
       nome,
       nascimento: new Date(nascimento),
       saldo,
      },
      select: {
        endereco: true,
      },
      
    });
    console.log(editLoja)
    res.status(201).json({
      message: `Loja no endereço foi  alterado com sucesso!`,
    });
  } catch (error) {
    const erro = exception(error);
    console.log(error);
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


router.put("/lojas", async (req, res) => {
  const {  id, nome, cepInput, street, state, city, neighborhood, lat, lng } = req.body;

  
  try {
    const editLoja = await prisma.loja_recarga.update({

      where:{
        id: id
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
    console.log(editLoja)
    res.status(201).json({
      message: `Loja no endereço foi  alterado com sucesso!`,
    });
  } catch (error) {
    const erro = exception(error);
    console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});

router.delete("/loja/:id", async (req, res) => {
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

var express = require("express");
var router = express.Router();
const { PrismaClient, Prisma } = require("@prisma/client");
const exception = require("../js/erro");
const { Decimal } = require("@prisma/client/runtime/library");

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
router.get("/cartoes", async (req, res, next) => {
  try {
    // const novaLoja = await prisma.loja_recarga.create({
    const allcartoes = await prisma.tipos_de_cartao.findMany()

    res.status(200).json(allcartoes);
  } catch (error) {
    const erro = exception(error);
    console.error(error);
    res.status(erro.code).send(erro.msg);
  }
});



router.post("/cartoes", async (req, res, next) => {
  try {
    let { modalidade,tarifa} = req.body;


    // const novaLoja = await prisma.loja_recarga.create({
    const novoCartao = await prisma.tipos_de_cartao.create({
      data: {
        modalidade,
        tarifa
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
    const {  id, tarifa, modalidade } = req.body;


    
    const novoCartao = await prisma.tipos_de_cartao.update({
   
      where:{
        id: id
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

 
router.post("/lojas", async (req, res, next) => {
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

router.post("/passageiros", async (req, res, next) => {
  try {
    const { nome, username, cpf, nascimento, saldo, email, senha} = req.body;

    
    const novoPassageiro = await prisma.clientes.create({
      data: {
        email,
        cpf,
        username,
        senha,
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
    const {  id, nome, username, cpf, nascimento, email} = req.body;

    
    const novoPassageiro = await prisma.clientes.update({
   
      where:{
        id: id
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

router.patch("/passageirosRecarga/:id/:recarga", async (req, res, next) => {
  
  try {

    const { id, recarga} = req.params;

 const idN = parseInt(id)
    const recargaN = parseFloat(recarga)

    const novaRecarga = await prisma.clientes.update({

   
      where:{
        id: idN
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

// router.put("/lojas", async (req, res) => {
//   const {  id, username, nascimento, email, cpf, saldo, nome} = req.body;

  
//   try {
//     const editLoja = await prisma.loja_recarga.update({

//       where:{
//         id: id
//       },

//       data: {
//         email,
//        cpf,
//        username,
//        nome,
//        nascimento: new Date(nascimento),
//        saldo,
//       },
//       select: {
//         endereco: true,
//       },
      
//     });
//     console.log(editLoja)
//     res.status(201).json({
//       message: `Loja no endereço foi  alterado com sucesso!`,
//     });
//   } catch (error) {
//     const erro = exception(error);
//     console.log(error);
//     res.status(erro.code).send(erro.msg);
//   }
// });

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
        id: parseInt(id)
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

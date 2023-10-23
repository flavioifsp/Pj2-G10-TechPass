var express = require('express');
var router = express.Router();
const prisma = new (require("@prisma/client")).PrismaClient()
const exception = require('../js/erro')
const functionJWT = require('../js/functionJWT')
const bcry = require('bcryptjs')


/* POST cadastrar usuario no site publico */
router.post('/cadastrar/', async function (req, res, next) {
  try {



    let { username, email, senha,
      cpf, nome, nascimento } = req.body;

   
    let dadosinvalidos = `o(s) `
    // verifica se os dados estão corretos
    if (typeof username !== "string") { dadosinvalidos += "username, " }
    if (typeof senha !== "string") { dadosinvalidos +="senha, " }
    if (typeof nome !== "string") { dadosinvalidos +="nome, " }
    if (typeof nascimento !== "string") { dadosinvalidos +="nascimento, " }
    if (typeof email !== "string") { dadosinvalidos +="email, " }
    if (typeof cpf !== "string") { dadosinvalidos +="cpf, " }
 
    dadosinvalidos += "estâo invalidos"
    if(dadosinvalidos !== `o(s) estâo invalidos`){
      console.log(dadosinvalidos)
      return res.status(400).send(dadosinvalidos)
    }
    // codifica a senha
    senha = await bcry.hash(senha, 10)

    // se o email está sendo utilizado
    const Teste_UserEmail = await prisma.usuario.findUnique({
      where: {
        email: email
      }
    })


    // se existe registro desse cliente/cpf 
    const Teste_cliente = await prisma.clientes.findUnique({
      where: {
        cpf: cpf
      },
      select: {
        nome: true,
        nascimento: true,
        cpf: true
      }
    })

    // se esse cliente tem um usuario
    const Teste_clienteUser = await prisma.clientes.findUnique({
      where: {
        cpf: cpf
      },
      select: {
        usuario: true
      },
    })



    // criacao de usuarios
    if (!Teste_UserEmail && !Teste_cliente) {
      // cria o cliente e o usuario
      await prisma.clientes.create({
        data: {
          cpf,
          nome,
          nascimento: new Date(nascimento),

          usuario: {
            create: {
              username,
              email,
              senha
            }
          }
        },

      })
      return res.send(username);


    } else if (!Teste_UserEmail && Teste_clienteUser.usuario === null) {
      // cria apenas o usuario se ja existir um cliente com esse cpf, mas sem usuario
      await prisma.usuario.create({

        data: {
          username,
          email,
          senha,
          clientes: {
            connect: {
              cpf: cpf
            }
          }

        },

      })
      return res.json(username);
    } else {
      return res.status(400).send("esse cpf ou email já estão registrados")
    }


  } catch (er) {
    const erro = exception(er)
    res.status(erro.code).send(erro.msg.toString())
  }

});



/* get para verificar se ou email estão em uso */
router.get('/cadastrar/', async function (req, res, next) {
  try {
    const verificacoes = {}
    const { email, cpf } = req.query

    // verifica se o cpf está correto e finaliza a req se for um cadastro
    if (typeof cpf == "string") {
      if (
        // se esse cliente tem um usuario
        (await prisma.clientes.findUnique({
          where: {
            cpf: cpf
          },
          select: {
            usuario: true
          },
        })).usuario !== null
      ) {
        verificacoes.usuario = true
      } else {
        // se existe registro desse cliente/cpf 
        const Teste_cliente = await prisma.clientes.findUnique({
          where: {
            cpf: cpf
          },
          select: {
            nome: true,
            nascimento: true,
            cpf: true
          }
        })

        if (Teste_cliente) {
          verificacoes.usuario = Teste_cliente
        }
      }

    } else if (cpf !== undefined) {
      return res.status(400).send("dados invalidos!")
    }


    // verifica se o email está correto e finaliza a req se for um cadastro
    if (typeof email == "string") {
      // se o email está sendo utilizado
      if (
        await prisma.usuario.findUnique({
          where: {
            email: email
          }
        })
      ) {
        verificacoes.email = true
      }


    } else if (email !== undefined) {
      return res.status(400).send("dados invalidos!")
    }

    res.json(verificacoes)


  } catch (er) {
    const erro = exception(er)


    res.status(erro.code).send(erro.msg.toString())
  }
});



module.exports = router;


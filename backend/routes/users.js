var express = require('express');
var router = express.Router();
const prisma = new (require("@prisma/client")).PrismaClient()
const exception = require('../js/erro')
const functionJWT = require('../js/functionJWT')
const bcry = require('bcryptjs')


/* POST cadastrar usuario no site publico */
router.post('/cadastrar/', async function (req, res, next) {
  try {



    let { cadastrar, username, email, senha,
      cpf, nome, nascimento } = req.body;


    // verifica se o tipo do cadastro é o correto
    if (typeof cadastrar !== "boolean") { return res.status(400).send("dados invalidos!") }

    // verifica se o email está correto e finaliza a req se for um cadastro
    let Vemail = false
    if (typeof email == "string") {
      Vemail = true
    } else if (cadastrar == true) {
      return res.status(400).send("dados invalidos!")
    }

    // verifica se o cpf está correto e finaliza a req se for um cadastro
    let Vcpf = false
    if (typeof cpf == "string") {
      Vcpf = true
    } else if (cadastrar == true) {
      return res.status(400).send("dados invalidos!")
    }



    // se o email está sendo utilizado
    const Teste_UserEmail = async () => {
      if (Vemail) {
        return (await prisma.usuario.findUnique({
          where: {
            email: email
          }
        }))
      } else return false
    }

    // se existe registro desse cliente/cpf 
    const Teste_cliente = async () => {
      if (Vcpf) {
        return await prisma.clientes.findUnique({
          where: {
            cpf: cpf
          },
          select: {
            nome: true,
            nascimento: true,
            cpf: true
          }
        })
      } else return false
    }
    // se esse cliente tem um usuario
    const Teste_clienteUser = async () => {
      if (Vcpf) {
        return await prisma.clientes.findUnique({
          where: {
            cpf: cpf
          },
          select: {
            usuario: true
          },
        })
      } else return false
    }



    // criacao de usuarios
    if (cadastrar == true) {

      // as verificações para ver se  veio os dados corretos
      if (typeof username !== "string") { return res.status(400).send("dados invalidos!") }
      if (typeof senha !== "string") { return res.status(400).send("dados invalidos!") }
      if (typeof nome !== "string") { return res.status(400).send("dados invalidos!") }
      if (typeof nascimento !== "string") { return res.status(400).send("dados invalidos!") }


      // codifica a senha
      senha = await bcry.hash(senha, 10)

      if (!Teste_UserEmail() && !Teste_cliente()) {
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


      } else if (!Teste_UserEmail()  && !Teste_clienteUser()) {
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


    } else {

      // verifica as partes que nao pode se repetir no banco quando o cadastro estiver false
      const verificacoes = {}

      if ( await Teste_UserEmail() ) {
        verificacoes.email = true
      }


      console.log( await Teste_clienteUser() )
      if (await Teste_clienteUser() ) {
        verificacoes.usuario = true
      } else if ( await Teste_cliente()) {
        verificacoes.usuario = await Teste_cliente()
      }

      res.json(verificacoes)
    }



  } catch (er) {
    const erro = exception(er)


    res.status(erro.code).send(erro.msg.toString())
  }

});

module.exports = router;


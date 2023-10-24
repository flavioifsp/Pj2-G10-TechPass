var express = require('express');
var router = express.Router();
const prisma = new (require("@prisma/client")).PrismaClient()
const exception = require('../js/erro')
const { gerarJWT, autenticar } = require('../js/functionJWT')
const bcry = require('bcryptjs');


/* POST cadastrar usuario no site publico */
router.post('/cadastrar/', async function (req, res, next) {
  try {



    let { username, email, senha,
      cpf, nome, nascimento } = req.body;



    let dadosinvalidos = `os seguintes parametros estão invalidos: `
    // verifica se os dados estão corretos
    if (typeof username !== "string" || username === "") { dadosinvalidos += "Username " }
    if (typeof senha !== "string" || senha === "") { dadosinvalidos += "Senha " }
    if (typeof nome !== "string" || nome === "") { dadosinvalidos += "Nome " }
    if (typeof nascimento !== "string" || nascimento === "") { dadosinvalidos += "Nascimento " }
    if (typeof email !== "string" || email == "") { dadosinvalidos += "Email " }
    if (typeof cpf !== "string" || cpf === "") { dadosinvalidos += "Cpf " }


    if (dadosinvalidos !== `os seguintes parametros estão invalidos: `) {
      console.log(dadosinvalidos)
      return res.status(406).send(dadosinvalidos)
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
      return res.status(201).send(username);


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
      return res.status(201).send(username);
    } else {
      return res.status(406).send("esse cpf ou email já estão registrados")
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

    res.status(200).json(verificacoes)


  } catch (er) {
    const erro = exception(er)


    res.status(erro.code).send(erro.msg.toString())
  }
});


// post para login
router.post("/login", async (req, res, next) => {
  const { email, senha } = req.body


  try {
    const user = await prisma.usuario.findUnique({
      where: {
        email: email
      },
      select: {
        clientes_id: true,
        email: true,
        senha: true
      }
    })

    // volta true ou false
    
    
    if (!user) return res.status(401).send("Email ou Senha invalidos!")

    const senhapaia = await bcry.compare(senha, user.senha)
    if (!senhapaia) return res.status(401).send("Email ou Senha invalidos!")


     
    res.json(gerarJWT(user.clientes_id, 15000))



  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }


})


module.exports = router;


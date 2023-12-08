var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const { gerarCookieToken, autenticar } = require("../js/functionJWT");
const bcry = require("bcryptjs");

/* POST cadastrar usuario no site publico */
router.post("/cadastrar/", async function (req, res, next) {
  try {
    let { username, email, senha, cpf, nome, nascimento } = req.body;

    let dadosinvalidos = `os seguintes parametros estão invalidos: `;
    // verifica se os dados estão corretos
    if (
      typeof username !== "string" ||
      !username.match(/[a-zA-Z\s_\-\d]{2,90}/)
    ) {
      dadosinvalidos += "Username ";
    }
    if (typeof senha !== "string" || !senha.match(/[a-zA-Z0-9\s]{8,50}$/)) {
      dadosinvalidos += "Senha ";
    }
    if (typeof nome !== "string" || !nome.match(/[a-zA-Z\s]{3,120}/)) {
      dadosinvalidos += "Nome ";
    }
    if (
      typeof nascimento !== "string" ||
      !nascimento.match(/^\d{4}-\d{2}-\d{2}$/)
    ) {
      dadosinvalidos += "Nascimento ";
    }
    if (
      typeof email !== "string" ||
      !email.match(/(^[a-zA-Z0-9\\._+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,6}$)/)
    ) {
      dadosinvalidos += "Email ";
    }
    if (typeof cpf !== "string" || !cpf.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/)) {
      dadosinvalidos += "Cpf ";
    }

    if (dadosinvalidos !== `os seguintes parametros estão invalidos: `) {
      console.log(dadosinvalidos);
      return res
        .status(406)
        .json({ name: "valores incorretos", detalhes: dadosinvalidos });
    }

    // se existe registro desse cliente/cpf
    const Teste_cliente = await prisma.clientes.findUnique({
      where: {
        cpf: cpf,
        email: email,
      },
      select: {
        nome: true,
        nascimento: true,
        cpf: true,
      },
    });

    // criacao de usuarios
    if (!Teste_cliente) {
      // codifica a senha
      senha = await bcry.hash(senha, 10);

      // cria o cliente e o usuario
      await prisma.clientes.create({
        data: {
          cpf,
          nome,
          nascimento: new Date(nascimento),
          username,
          email,
          senha,
        },
      });
      return res.status(201).send(email);
    } else {
      return res.status(406).send("esse cpf ou email já estão registrados");
    }
  } catch (er) {
    const erro = exception(er);
    res.status(erro.code).send(erro.msg.toString());
  }
});

/* get para verificar se ou email estão em uso */
router.get("/cadastrar/", async function (req, res, next) {
  try {
    const verificacoes = {};
    const { email = false, cpf = false } = req.query;

    console.log(cpf, email);

    if (email !== false) {
      const Teste_cliente = await prisma.clientes.findUnique({
        where: {
          email: email,
        },
        select: {
          email: true,
        },
      });
      if (typeof Teste_cliente !== "undefined" && Teste_cliente !== null) {
        verificacoes.email = true;
      } else {
        verificacoes.email = false;
      }
    }

    if (cpf !== false) {
      const Teste_clienteCpf = await prisma.clientes.findUnique({
        where: {
          cpf: cpf,
        },
        select: {
          cpf: true,
        },
      });
      if (
        typeof Teste_clienteCpf !== "undefined" &&
        Teste_clienteCpf !== null
      ) {
        verificacoes.cpf = true;
      } else {
        verificacoes.cpf = false;
      }
    }

    res.json({ resultado: verificacoes });
  } catch (er) {
    const erro = exception(er);
    console.log(erro);
    res.status(erro.code).send(erro.msg.toString());
  }
});

// post para login
router.post("/login", async (req, res, next) => {
  const { email, senha } = req.body;

  try {
    const user = await prisma.clientes.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        senha: true,
      },
    });

    // volta true ou false

    if (!user) return res.status(401).send("Email ou Senha invalidos!");

    const senhapaia = await bcry.compare(senha, user.senha);
    if (!senhapaia) return res.status(401).send("Email ou Senha invalidos!");

    res.status(200).json({ token: gerarCookieToken(user.id, 15000) });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//  para info basicas do user
router.get("/infos/", autenticar, async (req, res) => {
  const infos = {};
  for (const [qualinfo] of Object.entries(req.query)) {
    infos[qualinfo] = true;
  }

  try {
    res.json(
      await prisma.clientes.findUniqueOrThrow({
        where: {
          id: req.userId,
        },
        select: infos,
      })
    );
  } catch (error) {
    res.status(401).json({ message: "n encontrado", erro: error });
    console.log(error);
  }
});

router.get("/infosAll", autenticar, async (req, res) => {
  try {
    res.json(
      await prisma.clientes.findUniqueOrThrow({
        where: {
          id: req.userId,
        },
        include: {
          cartoes_do_cliente: {
            include: {
              tipos_de_cartao: true,
              embarque: true,
            },
          },
        },
      })
    );
  } catch (error) {
    res.status(401).json({ message: "n encontrado", erro: error });
    console.log(error);
  }
});

// atualizar clientes
router.put("/", autenticar, async (req, res) => {
  try {
    const { username, cpf, email, senha, nascimento, nome } = req.body;

    const user = await prisma.clientes.update({
      where: {
        id: req.userId,
      },
      data: {
        cpf,
        email,
        senha: senha ? await bcry.hash(senha, 10) : undefined,
        nascimento: new Date(nascimento),
        nome,
        username,
      },
    });

    res.json({ message: "atualizado com sucesso" });
  } catch (error) {
    res.status(401).json({ message: "falha ao atualizar", erro: error });
    console.log(error);
  }
});

module.exports = router;

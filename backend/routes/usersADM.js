var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");
const { gerarCookieTokenADM, autenticarADM } = require("../js/functionJWT");
const bcry = require("bcryptjs");

// post para login
router.post("/login", async (req, res, next) => {
  const { email, senha } = req.body;

  try {
    const userADM = await prisma.superuser.findUnique({
      where: {
        email,
      },
      select: {
        senha: true,
        adm: {
          select: {
            superUser_id: true,
          },
        },
        atendente: {
          select: {
            superUser_id: true,
          },
        },
        motorista: {
          select: {
            superUser_id: true,
          },
        },
      },
    });

    if (!userADM) {
      throw { code: 404, msg: "este email não existe!" };
    } else if (!(await bcry.compare(senha, userADM.senha))) {
      throw { code: 401, msg: "senha incorreta!" };
    }

    for (const key in userADM) {
      if (Object.hasOwnProperty.call(userADM, key)) {
        if (userADM[key]) {
          return res.json({
            token: gerarCookieTokenADM(userADM[key].superUser_id, key),
          });
        }
      }
    }


    

    throw { code: 401, msg: "Esse usuario não tem categoria, use outra conta" };
  } catch (error) {
    const erro = error.msg ? error : exception(error);
    // console.log(error);
    res.status(erro.code).send(erro.msg);
  }
});



module.exports = router;

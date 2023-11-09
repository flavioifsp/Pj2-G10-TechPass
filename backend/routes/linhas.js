const express = require("express");
const router = express.Router();
const axios = require("axios");
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

/* retorna todas as linhas. */
router.get("/allLinhas", async function (req, res, next) {
  try {
    // const linhas = await prisma.onibus.findMany()

    // criando o array
    const linhas = [];

    // paia deveria ser o array com as infos que vc pegou do banco
    //renomeie os nomes dps do "elem." para se adequar as infos do array do banco de dados
    const paia = [
      {
        bairro1: "olaria",
        bairro2: "tinga",
        num_linha: 100,
        horario_b1: [
          "11:111",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
        ],
        horario_b2: [
          "11. :11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
          "11:11",
        ],
        itinerario_b1: [
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
        ],
        itinerario_b2: [
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
          "kaSdnfjkaslfnojksdnfjs",
        ],
      },
    ];

    // colocando as informações no molde
    // o ".push()" está inserindo aquele objeto ao array linhas
    paia.map((elem) => {
      linhas.push({
        bairro1: elem.bairro1,
        bairro2: elem.bairro2,
        numLinha: elem.num_linha,
        infos_da_linha: [
          {
            infosB1: elem.horario_b1,
            infosB2: elem.horario_b2,
          },
          {
            infosB1: elem.itinerario_b1,
            infosB2: elem.itinerario_b2,
          },
        ],
      });
    });

    res.send(JSON.stringify(linhas));
  } catch (er) {
    const erro = exception(er);
    res.status(erro.code).send(erro.msg);
  }
});

router.post("/linha", async () => {

  // https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#create-multiple-records-and-multiple-related-records
  const create = prisma.linhas.create({
    data: {
      bairroDestino,
      bairroOrigem,
      numero_linha,


      percurso: {
        createMany: {

          
          data: [
            { 
              ordem_do_percurso, 
              pontoOnibus_id:{

               } }
          ]
        }
      },


      horario_diario_saida:{connectOrCreate}
    },
  });
});

module.exports = router;

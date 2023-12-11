var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");

// router.use(
//   require("../js/functionJWT").autenticarADM(["motorista", "atendente", "adm"])
// );

router.get("/ClientesAtivos", async (req, res) => {
  try {
    const clientesAtivos_bruto = await prisma.$queryRaw`
        SELECT 
            MONTH(NOW()) AS mes,
            COUNT( distinct(cc.clientes_id)) AS total_clientes_ativos
        FROM
            embarque e
                INNER JOIN
            cartoes_do_cliente cc ON e.cartaoDoCliente_id = cc.id
        WHERE
            YEAR(e.data) = YEAR(NOW())
        GROUP BY mes
    `;

    const ClientesAtivos = [
      { mes: "Jan", total: 0 },
      { mes: "Fev", total: 0 },
      { mes: "Mar", total: 0 },
      { mes: "Abr", total: 0 },
      { mes: "Mai", total: 0 },
      { mes: "Jun", total: 0 },
      { mes: "Jul", total: 0 },
      { mes: "Ago", total: 0 },
      { mes: "Set", total: 0 },
      { mes: "Out", total: 0 },
      { mes: "Nov", total: 0 },
      { mes: "Dez", total: 0 },
    ];

    for (const umMes of clientesAtivos_bruto) {
      ClientesAtivos[umMes.mes - 1].total = parseInt(
        umMes.total_clientes_ativos
      );
    }

  
    res.json(ClientesAtivos);
  } catch (error) {
    const erro = exception(error);
    console.error(erro);
    res.status(erro.code).json(erro.msg);
  }
});

router.get("/totalEmbarquesBI", async (req, res) => {
  try {
    const allBRUTO = await prisma.$queryRaw`
        SELECT 
            CEIL(MONTH(data) / 2) AS bimestre,
            COUNT(*) AS embarques
        FROM
            embarque
        WHERE YEAR(data) = YEAR(NOW())
        GROUP BY bimestre
    `;

    const all = [
      { bi: 1, total: 0 },
      { bi: 2, total: 0 },
      { bi: 3, total: 0 },
      { bi: 4, total: 0 },
      { bi: 5, total: 0 },
      { bi: 6, total: 0 },
    ];

    for (const umBimestre of allBRUTO) {
      all[umBimestre.bimestre - 1].total = parseInt(umBimestre.embarques);
    }

    res.json(all);
  } catch (error) {
    const erro = exception(error);
    console.error(erro);
    res.status(erro.code).json(erro.msg);
  }
});

router.get("/total/:tabela/:data", async (req, res) => {
  try {
    let condi = {};
    
    console.log(req.params.data);
    if (req.params.data == null) {
      condi.where[req.params.data] = {
        gte: new Date().getFullYear() + "-01-01T00:00:02.023Z",
      };
    }

    const response = await prisma[req.params.tabela].count(condi);

    res.status(200).json(response);
  } catch (error) {
    const erro = exception(error);
    console.error(erro);
    res.status(erro.code).json(erro.msg);
  }
});

module.exports = router;

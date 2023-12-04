var express = require("express");
var router = express.Router();
const prisma = new (require("@prisma/client").PrismaClient)();
const exception = require("../js/erro");


router.use(
    require("../js/functionJWT").autenticarADM(["motorista", "atendente"])
  );

router.get("ClientesAtivos",async (req, res)=>{
    const response = await prisma.cartoes_do_cliente.groupBy({
        by: ["cartao_id","cartao_id"]

    })
})

module.exports = router;

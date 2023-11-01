const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("adm/pages/index.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuDashboard",
    nome: "menu",
  });
});

router.get("/atendete", async function (req, res, next) {
  res.render("adm/pages/cadastroAtendente.ejs", {
    layout: "adm/layouts/layout-index.ejs",
    cont: "#menuAtendente",
    nome: "Atendente",
  });
});

module.exports = router;

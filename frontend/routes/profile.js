const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();


class Menu {
  constructor() {
    this.array = [];
  }

  addpag(endereco, href, icon, nome) {
    const indi = this.array.length;
    const menu = this.array;
    menu.push({ href, icon, nome, active: "" });

    router.get(href, async function (req, res, next) {
      try {
        const UserAtual = (await axios.get(
          "http://localhost:9000/api/user/infos/?username",
          { headers: req.headers }
        )).data.username;

        
        menu[indi].active = "active";
        res.render(endereco, {
          title: nome,
          layout: "site_publico/layouts/layout_profile.ejs",
          UserAtual: UserAtual,
          menu
        });
        menu[indi].active = "";
      } catch (error) {
        console.log(error)
        res.json(error)
      }
    });

    if (href == "/") {
      href = "/perfil";
    }
    router.get(`${href}/subpags/:pags`, function (req, res, next) {
      const { pags } = req.params;
      const caminho = `site_publico/pages/profile/partialsprofile${href}/_${pags}`;

      res.render(caminho, { layout: false });
    });
  }
}

const elemenu = new Menu();

elemenu.addpag(
  "site_publico/pages/profile/partialsprofile/perfil/_inicio.ejs",
  "/",
  "bi bi-person-circle",
  "Meu Perfil"
);
elemenu.addpag(
  "site_publico/pages/profile/partialsprofile/payment/_inicio.ejs",
  "/payment",
  "bi bi-wallet2",
  "Formas de Pagamento"
);
elemenu.addpag(
  "site_publico/pages/profile/partialsprofile/mycard/_inicio.ejs",
  "/mycard",
  "bi bi-credit-card-2-back",
  "Meus Cartões"
);

module.exports = router;

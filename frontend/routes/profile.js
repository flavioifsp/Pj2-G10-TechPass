const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

class Menu {
  constructor() {
    this.array = [];
  }

  addpag(endereco, href, icon, nome, objEjsF = () => {}) {
    const indi = this.array.length;
    const menu = this.array;
    menu.push({ href, icon, nome, active: "" });

    let infos
    router.get(href, async function (req, res, next) {
      try {
        const { username } = (
          await axios.get("http://localhost:9000/api/user/infos/?username&", {
            headers: req.headers,
          })
        ).data;

        infos = await objEjsF(req, res) || {};
        console.log(infos);

        menu[indi].active = "active";
        res.render(endereco, {
          title: nome,
          UserAtual: username,
          layout: "site_publico/layouts/layout_profile.ejs",
          menu,
          ...infos,
        });
        menu[indi].active = "";
      } catch (error) {
        console.log(error);
        res.json(error);
      }
    });

    if (href == "/") {
      href = "/perfil";
    }
    router.get(`${href}/subpags/:pags`, function (req, res, next) {
      const { pags } = req.params;
      const caminho = `site_publico/pages/profile/partialsprofile${href}/_${pags}`;

      res.render(caminho, { layout: false,  ...infos});
    });
  }
}

const elemenu = new Menu();



elemenu.addpag(
  "site_publico/pages/profile/partialsprofile/perfil/_inicio.ejs",
  "/",
  "bi bi-person-circle",
  "Meu Perfil",
  async (req, res) => {
    try {
      const { data } = await axios.get(
        "http://localhost:9000/api/user/infosAll",
        {
          headers: req.headers,
        }
      );

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
);
elemenu.addpag(
  "site_publico/pages/profile/partialsprofile/recarga/_inicio.ejs",
  "/recarga",
  "bi bi-wallet2",
  "Recarga"
);

module.exports = router;

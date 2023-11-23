var express = require("express");
var router = express.Router();
const axiosGet = require("../public/js/req_get_axios");
const { default: axios } = require("axios");

// infoPagNav se o cara está logado para o header
async function UserInfoPagNav(token, headers) {
  if (!token) {
    return false;
  }

  try {
    const UserAtual = await axios.get(
      "http://localhost:9000/api/user/infos/?username=true&id=true",
      {
        headers: headers,
      }
    );

    return UserAtual.data;
  } catch (error) {}
}

/* GET home page. */
router.get("/", async function (req, res, next) {
  let { er, data } = await axiosGet(
    "http://localhost:9000/api/adm/lojas"
  );

  res.render("site_publico/pages/index", {
    title: "Tech Pass",
    layout: "site_publico/layouts/layout_index.ejs",
    data: JSON.stringify(data),
    er,
    navUser: await UserInfoPagNav(req.cookies.token, req.headers),
  });
});


/* GET rotas e linhas. */
router.get("/rotas&linhas", async function (req, res, next) {
  const { er, data } = await axiosGet(
    "http://localhost:9000/api/linhas/"
  );

  
  res.render("site_publico/pages/rotas&linhas", {
    title: "Rotas e Linhas",
    layout: "site_publico/layouts/layout_index.ejs",
    linhas: data,
    er,
    navUser: await UserInfoPagNav(req.cookies.token, req.headers),
  });
});

/* GET login. */
router.get("/login", async function (req, res, next) {
  res.render("site_publico/pages/login", {
    title: "Entrar",
    layout: "site_publico/layouts/layout_auth.ejs",
    navUser: (await UserInfoPagNav(req.cookies.token, req.headers))
  });
});


/* GET cadastrar. */
router.get("/cadastrar", async function (req, res, next) {
  res.render("site_publico/pages/cadastrar", {
    title: "cadastrar",
    layout: "site_publico/layouts/layout_auth.ejs",
    navUser: (await UserInfoPagNav(req.cookies.token, req.headers))
  });
});

module.exports = router;

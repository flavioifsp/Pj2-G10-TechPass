var express = require('express');
var router = express.Router();

const menu = [
    {href: "/", icon: "bi bi-wallet2", text: "MEUS CARTÕES", active:""},
    {href: "/", icon: "bi bi-credit-card-2-back", text: "FORMAS DE PAGAMENTO", active:""}
]; 
const acti = (tudo) => {
    menu.push(tudo)
    menu[menu.length].active = "active"
}

/* GET User. */
router.get( '/', function(req, res, next) {
    acti({href: "/", icon: "bi bi-person-circle", text: "MEU PERFIL", active:""})
    res.render( 'site_publico/pages/user/MeuPerfil.ejs' , { title: 'Perfil', layout: 'site_publico/layouts/layout_user.ejs', menu});
});


module.exports = router;

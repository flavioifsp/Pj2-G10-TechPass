var express = require('express');
var router = express.Router();

 


class Menu {
    constructor() {
        this.array = []
    }
 

    addpag(endereco, href, icon, nome) {

        const indi = this.array.length
        const menu = this.array
        menu.push({ href, icon, nome, active: "" })



        router.get(href, function (req, res, next) {

            menu[indi].active = "active"
            res.render(endereco, { title: nome, layout: 'site_publico/layouts/layout_user.ejs', menu  });
            menu[indi].active = ""
        });

        router.get(`${href}/subpags/:pags`, function (req, res, next) {
            const { pags } = req.params
            if (href == "/") { href = "perfil" }
            const caminho = `site_publico/pages/user/partialsUser${href}/_${pags}`
            res.render(caminho, {layout: false})
        });

    }

}


const elemenu = new Menu()

elemenu.addpag("site_publico/pages/user/partialsUser/perfil/_inicio.ejs", "/", "bi bi-person-circle", "Meu Perfil")
elemenu.addpag("site_publico/pages/user/partialsUser/payment/_inicio.ejs", "/payment", "bi bi-wallet2", "Formas de Pagamento")
elemenu.addpag("site_publico/pages/user/partialsUser/mycard/_inicio.ejs", "/mycard", "bi bi-credit-card-2-back", "Meus Cartões")



module.exports = router;

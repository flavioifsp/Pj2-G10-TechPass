var express = require('express');
var router = express.Router();
const fs = require("fs")




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
            res.render(endereco, { title: nome, layout: 'site_publico/layouts/layout_user.ejs', menu , er: null });

            menu[indi].active = ""
        });

        // router.get(`${href}/info/:pags`, function (req, res, next) {
        //     const { pags } = req.params
        //     if (href == "/") { href = "MeuPerfil" }


        //     const caminho = `./views/site_publico/pages/user/partialsUser${href}/_${pags}`

        //     fs.readFile(caminho, "utf-8", (err, subpag) => {
        //         if (!err) {
        //             res.status(200).send(subpag)
        //         } else{
        //             console.log("erro:"+err)
        //         }
        //     })

        // });

    }

}


const elemenu = new Menu()

elemenu.addpag("site_publico/pages/user/perfil.ejs", "/", "bi bi-person-circle", "Meu Perfil")
elemenu.addpag("site_publico/pages/user/payment.ejs", "/payment", "bi bi-wallet2", "Formas de Pagamento")
elemenu.addpag("site_publico/pages/user/mycard.ejs", "/mycard", "bi bi-credit-card-2-back", "Meus Cartões")



module.exports = router;

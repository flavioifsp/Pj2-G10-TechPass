var express = require('express');
var router = express.Router();


class Menu{
    constructor(){
        this.array = []   
    }
    

    addpag(endereco, href, icon, nome){
 
        const indi = this.array.length
        const menu = this.array
        menu.push({ href, icon, nome, active: ""})



        router.get(href, function(req, res, next) {

            menu[indi].active = "active"
            res.render( endereco , { title: nome, layout: 'site_publico/layouts/layout_user.ejs', menu});
            menu[indi].active = ""
        });
    }
  
} 


const elemenu = new Menu()

elemenu.addpag("site_publico/pages/user/MeuPerfil.ejs", "/", "bi bi-person-circle", "Meu Perfil")
elemenu.addpag("site_publico/pages/user/formadepag.ejs","/formasdepagamento", "bi bi-wallet2", "Formas de Pagamento")
elemenu.addpag("site_publico/pages/user/meucartoes.ejs","/mycard", "bi bi-credit-card-2-back", "Meus Cartões")



module.exports = router;

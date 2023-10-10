var express = require('express');
var router = express.Router();


class Menu{
    constructor(){
        this.array = []   
    }
    
    

    addpag(endereco, href, icon, text){
        const hrefM = href
        const indi = this.array.length
        const menu = this.array
        menu.push({ href:hrefM, icon, text, active: ""})



        router.get(href, function(req, res, next) {
            console.log(menu)
            menu[indi].active = "active"
            res.render( endereco , { title: 'Perfil', layout: 'site_publico/layouts/layout_user.ejs', menu});
        });
    }

} 


const elemenu = new Menu()

elemenu.addpag("site_publico/pages/user/MeuPerfil.ejs", "/", "bi bi-person-circle", "MEU PERFIL")
elemenu.addpag("site_publico/pages/user/formadepag.ejs","/formasdepagamento", "bi bi-wallet2", "FORMAS DE PAGAMENTO")
// elemenu.addpag("site_publico/pages/user/MeuPerfil.ejs","/", "bi bi-credit-card-2-back", "FORMAS DE PAGAMENTO")


   


// /* GET User. */
// router.get( '/', function(req, res, next) {
//     const menu = elemenu.lista()
//     elemenu.active(0)
//     res.render( 'site_publico/pages/user/MeuPerfil.ejs' , { title: 'Perfil', layout: 'site_publico/layouts/layout_user.ejs', menu});
// });

// /* GET formas de pagamento. */
// router.get( '/formasdepagamento', function(req, res, next) {
//     const menu = elemenu.lista()
//     elemenu.active(1)
//     res.render( 'site_publico/pages/user/MeuPerfil.ejs' , { title: 'Perfil', layout: 'site_publico/layouts/layout_user.ejs', menu});
// });


module.exports = router;

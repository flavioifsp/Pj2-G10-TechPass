const iniciomycard = document.getElementById("inicio-meuscard")
const btnsolicitar = document.querySelector(".btn-solicit")

const solicitar = document.getElementById("solicitar")


const soliComum = document.getElementById("soli-comum")
const btnCancel = document.getElementById("btnCancel")
const avançarSolici = document.getElementById("avancar-soli")

locomover(btnsolicitar, iniciomycard, solicitar)



locomoverForms("btnsSoli", avançarSolici, solicitar, [
    avançarSolici.querySelector("#btn-solicit-comum"),
    
])

 
inicio(btnCancel, iniciomycard, ".subpag")
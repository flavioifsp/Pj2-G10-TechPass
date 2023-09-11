const iniciomycard = document.getElementById("inicio-meuscard")
const btnsolicitar = document.querySelector(".btn-solicit")

const solicitar = document.getElementById("solicitar")
const btnSoliComum = document.getElementById("btn-solicit-comum")

const soliComum = document.getElementById("soli-comum")
const btnCancel = document.getElementById("btnCancel")
const avançarSolici = document.getElementById("avancar-soli")

locomover(btnsolicitar, iniciomycard, solicitar)

locomoverForms(btnSoliComum, avançarSolici, solicitar, soliComum)

 

inicio(btnCancel, iniciomycard, ".subpag")
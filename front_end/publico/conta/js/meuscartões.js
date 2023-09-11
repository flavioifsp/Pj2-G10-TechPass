const iniciomycard = document.getElementById("inicio-meuscard")
const btnsolicitar = document.querySelector(".btn-solicit")

const solicitar = document.getElementById("solicitar")
const btnSoliComum = document.getElementById("btn-solicit-comum")

const soliComum = document.getElementById("soli-comum")
const btnCancel = document.getElementById("btnCancel")

locomover(btnsolicitar, iniciomycard, solicitar)

locomover(btnSoliComum, solicitar, soliComum)



inicio(btnCancel, iniciomycard, ".subpag")
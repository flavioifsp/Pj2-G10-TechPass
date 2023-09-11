
const btnaddnovo = document.getElementById("btn-addpagamento")
const iniciopag = document.getElementById("iniciopag")


const addtipocard = document.getElementById("addtipocard")
const btnCredito = document.getElementById("btncredito")
const btnDebito = document.getElementById("btndebito")

const formsCredito = document.getElementById("formscardcredito")
const formsDebito = document.getElementById("formscardDEBITO")
const btncancelarformCRE = document.getElementById("btn-cancelarcardCRE")
const btncancelarformDEB = document.getElementById("btn-cancelarcardDEB")

locomover(btnaddnovo, iniciopag, addtipocard)
locomover(btnCredito, addtipocard, formsCredito)
locomover(btnDebito, addtipocard, formsDebito)

locomover(btncancelarformDEB, formsDebito, iniciopag)
locomover(btncancelarformCRE, formsCredito, iniciopag)  


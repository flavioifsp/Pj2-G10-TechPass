


const iniciomycard = document.getElementById("inicio-meuscard")
const btnsolicitar = document.querySelector("#btn-solicit")
const btnsolicitar2 = document.querySelector("#btn-solicit-card")
const btnrecarregar = document.querySelector("#recarregar-btn")
const recarregar = document.querySelector("#recarregar")
const solicitar = document.getElementById("solicitar")




function locomoverForms(btns, forms, paginaAtual, pagsFutura) {
    btns = [...document.querySelectorAll("#containerbutton button")];
    const formsExtraido = document.getElementById(forms)
    const atual = document.getElementById(paginaAtual)



    btns.map((elem) => {
        elem.addEventListener("click", (event) => {

            btns.map((elem1, indice) => {
                if (elem1 != event.currentTarget) {
                    elem1.classList.remove("active");
                    elem1.querySelector(".active-icon").classList.remove("bi-check2-circle");

                } else {
                    elem.classList.add("active");
                    elem.querySelector(".active-icon").classList.add("bi-check2-circle");

                    formsExtraido.addEventListener("submit", (event) => {
                        event.preventDefault()
                        atual.classList.add("d-none");
                        pagsFutura.map((elem, indi) => {
                            if (indice == indi) {
                                elem.classList.remove("d-none");
                            } else {
                                elem.classList.add("d-none");
                            }

                        })

                    });
                }
            });
        });
    });
}




locomover(btnsolicitar, iniciomycard, solicitar)

locomover(btnrecarregar, iniciomycard, recarregar)


locomoverForms("btnsSoli", "forms-endereco", "solicitar", [
    document.querySelector("#soli-comum"),
    document.querySelector("#soli-estudante"),
    document.querySelector("#soli-especial")
])


inicio("#btnCancel-soli", "#inicio-meuscard", ".subpag")
inicio("#btnCancel-recarga", "#inicio-meuscard", ".subpag")
inicio("#btnCancel-solicomum", "#solicitar", ".subpag")
inicio("#btnCancel-soliestudante", "#solicitar", ".subpag")
inicio("#btnCancel-soliespecial", "#solicitar", ".subpag")


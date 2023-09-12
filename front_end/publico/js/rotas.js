const linha = document.getElementById("linhapaia")
const lista = document.getElementById("lista-linha")


for (i = 0; i < 10; i++) {
    const clonelinha = linha.cloneNode(true)
    clonelinha.classList.add("n" + i)
    lista.appendChild(clonelinha)
}



const divlinhas = document.querySelector("#lista-linha")
const linhaS = [...document.querySelectorAll("article")]

divlinhas.addEventListener("click", (evt) => {
    const eventoclick = evt.currentTarget

    eventoclick.setAttribute('data-bs-toggle', "modal")
    eventoclick.setAttribute("data-bs-target", "#horario-onibus")

    console.log(eventoclick)

})




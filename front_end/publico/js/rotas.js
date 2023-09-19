





const linha = (Num, nome, divpai, divmodais) => {
    const linhapaia = document.createElement("div")
    const divmodal = document.createElement("div")
    const idmodal = `L${Num}`

    console.log(idmodal)
    divmodal.innerHTML = `
        <div class="modal fade" id="${idmodal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
        </div>
    </div>
        `

    


    

    linhapaia.classList.add("bg-dark-subtle", "rounded-5", "d-flex", "flex-column", "flex-lg-row", "px-3", "linhapaiosa")
    
    linhapaia.id = `btnL${Num}`
    linhapaia.innerHTML = `
        <div class="d-flex align-items-center column-gap-md-3 column-gap-2 py-2 ">
            <div class="" id="btn-linha">
                <img src="./img/icon bus.png" alt="..." />
            </div>

            <div class="">
                <h5 class="mb-0">${Num}</h5>
                <p class="fs-6 mb-0">${nome}</p>
            </div>
        </div>
    `


    
  
    document.querySelector(divpai).appendChild(linhapaia)
    document.querySelector(divmodais).appendChild(divmodal)
}

linha(100, "paia paia paia paia", "#lista-linha", "#modais")
linha(120, "paia paia paia paia", "#lista-linha", "#modais")


const linhapaiosa = [...document.querySelectorAll(".linhapaiosa")]

linhapaiosa.map((elem) => {
   
    elem.addEventListener("click", (evt) => {
        const eventoclick = evt.currentTarget
        console.log(eventoclick, )
        eventoclick.classList.toggle("modal")
        eventoclick.setAttribute('data-bs-target', "L100")
    
    })
})

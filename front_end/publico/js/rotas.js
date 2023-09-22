





const linha = (num, bairroI, bairroEnd, horarioI, horarioEnd, ItinerarioI, ItinerarioEnd, divpai) => {
    const molde = document.createElement("div")
    const idmodal1 = `L${num}1`
    const idmodal2 = `L${num}2`
    const horasI = `horasI${num}`
    const horasEnd = `horasEnd${num}`
    const itiI = `itiI${num}`
    const itiEnd = `itiEnd${num}`
    const btnalternar1 = `btnal${idmodal1}`
    const btnalternar2 = `btnal${idmodal2}`
    bairroEnd = bairroEnd.toUpperCase()
    bairroI = bairroI.toUpperCase()

 

    // transformar a string em uma array separando por "," > cd vetor do array será transformado em um elemento (li) e dps sera colocada em uma lista(ul)
    const addLista = (string, lista, rounded) => {
        string = string.trim().split(",")
        
        for(x of string){
            const substring = document.createElement("li")
            substring.classList.add("list-group-item", rounded, "fs-4")
            substring.innerHTML = x
            molde.querySelector("#"+lista).appendChild(substring)
        }

    }


    
    function alternarmodal(btn, modal, modalfuturo, a){        
        modal = a.querySelector("#"+modal)
        modalfuturo = a.querySelector("#"+modalfuturo)
        btn = a.querySelector("#"+btn)
        
        const myModal = new bootstrap.Modal(modal)
        const myModalfuturo = new bootstrap.Modal(modalfuturo)
        
        console.log(modal.querySelector(btn) )
        modal.querySelector(btn).addEventListener("click", (elem) => {
            myModal.hide()
            document.querySelector("modal-backdrop").remove()
            myModalfuturo.show()
        })
    }

    // o molde da lista em html e css
    molde.innerHTML = ` 
        <div class="bg-dark-subtle rounded-4 d-flex flex-column  flex-lg-row px-3" data-bs-toggle="modal"
        data-bs-target="#${idmodal1}" style="cursor: pointer; height: 70px;">
        <div class="d-flex align-items-center column-gap-md-3 column-gap-2 py-2">
            <img src="./img/icon bus.png" alt="..." class="img-fluid" style="width: 12%" />

            <div class="">
            <h5 class="mb-0">${num}</h5>
            <p class="fs-6 mb-0">${bairroI}/ ${bairroEnd}</p>
            </div>
        </div>
        </div>

        <div class="modal fade " id="${idmodal1}" tabindex="-1" aria-labelledby="${idmodal1}ModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header px-4">
                <h1 class="modal-title " id="${idmodal1}ModalLabel"> <i class="bi bi-clock-history pe-2"></i>  HORARIO</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body px-4  ">

                <div class="container-fluid p-0 mx-auto row">


                <!--bairro inicio -->
                <ul class="list-group  col text-center pe-0" id="${horasI}">

                    <li class="list-group-item rounded-end-0 ">${bairroI}</li>
                
                </ul>

                <!--bairro fim -->
                <ul class="list-group  col text-center ps-0" id="${horasEnd}">
                    <li class="list-group-item rounded-start-0  ">${bairroEnd}</li>
                
                </ul>

                </div>

            </div>
            <div class="modal-footer border-0 px-4">
                <button type="button" class="btn btn-primary btnalternar" id="${btnalternar1}">Itinerario</button>

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
            </div>
        </div>
        </div>


        <div class="modal fade " id="${idmodal2}" tabindex="-1" aria-labelledby="a"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content">
            <div class="modal-header px-4">
                <h1 class="modal-title " id="a"> <i class="bi bi-clock-history pe-2"></i> ITINERARIO</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body px-4  ">

                <div class="container-fluid p-0 mx-auto row">


                <!--bairro inicio -->
                <ul class="list-group  col  pe-0" id="${itiI}">

                    <li class="list-group-item rounded-end-0 fs-3">${bairroI}</li>
                   
                </ul>

                <!--bairro fim -->
                <ul class="list-group  col  ps-0" id="${itiEnd}">
                    <li class="list-group-item rounded-start-0 fs-3">${bairroEnd}</li>
                   
                </ul>

                </div>

            </div>
            <div class="modal-footer border-0 px-4">
                <button  type="button" class="btn btn-primary " id="${btnalternar2}">Horario</button>

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
            </div>
        </div>
        </div>
    `   
    

    

    alternarmodal(btnalternar2, idmodal1, idmodal2, molde)

    addLista(horarioI, horasI, "rounded-end-0")
    addLista(horarioEnd, horasEnd, "rounded-start-0")
    
    addLista(ItinerarioI, itiI, "rounded-end-0")
    addLista(ItinerarioEnd, itiEnd, "rounded-start-0")


    document.querySelector(divpai).appendChild(molde)
}


linha(
// numero da linha
100, 
// bairro incial e bairro final
"bairro paia", "paioso", 
// horario do bairro incial 
"11:11, 11:11, 11:11, 11:11", 
// horario do bairro final
"11:11, 11:11, 11:11, 11:11", 
// itinerario do bairro inicial
"paia, paia",
// itinerario do bairro final
"paia, paia",
// div em q estára
"#lista-linha"
)



linha(120, "paida", "padioso", 
"11:11, 11:11, 11:11, 11:11", 
"11:11, 11:11, 11:11, 11:11",
"paia, paia", "paia, paia",
"#lista-linha")




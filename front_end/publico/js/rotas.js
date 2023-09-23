





const linha = (num, bairroI, bairroEnd, horarioI, horarioEnd, ItinerarioI, ItinerarioEnd, divpai) => {
    const molde = document.createElement("div")
    const moldemodal1 = document.createElement("div")
    const moldemodal2 = document.createElement("div")
    const idmodal1 = `L${num}1`
    const idmodal2 = `L${num}2`
    const horasI = `horasI${num}`
    const horasEnd = `horasEnd${num}`
    const itiI = `itiI${num}`
    const itiEnd = `itiEnd${num}`
    bairroEnd = bairroEnd.toUpperCase()
    bairroI = bairroI.toUpperCase()

 

    // transformar a string em uma array separando por "," > cd vetor do array será transformado em um elemento (li) e dps sera colocada em uma lista(ul)
    const addLista = (string, lista, rounded, modal) => {
        string = string.trim().split(",")
        
        for(x of string){
            const substring = document.createElement("li")
            substring.classList.add("list-group-item", rounded, "fs-4")
            substring.innerHTML = x
            modal.querySelector("#"+lista).appendChild(substring)
        }

    }


    
 
  

    // o molde da lista em html e css
    molde.innerHTML = ` 
        <div class="bg-dark-subtle rounded-4 d-flex flex-column  flex-lg-row px-3" data-bs-target="#${idmodal1}" data-bs-toggle="modal" style="cursor: pointer; height: 70px;">
        <div class="d-flex align-items-center column-gap-md-3 column-gap-2 py-2">
            <img src="./img/icon bus.png" alt="..." class="img-fluid" style="width: 12%" />

            <div class="">
            <h5 class="mb-0">${num}</h5>
            <p class="fs-6 mb-0">${bairroI}/ ${bairroEnd}</p>
            </div>
        </div>
        </div>
    `   
   
    moldemodal1.classList.add("modal", "fade")
    moldemodal1.id = idmodal1
    moldemodal1.style="background-color: rgba(0, 0, 0, 0.5);"
    moldemodal1.innerHTML = `
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
                <button type="button" class="btn btn-primary btnalternar" data-bs-target="#${idmodal2}" id="aaaaaaa" data-bs-toggle="modal">Itinerario</button>

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
            </div>
        </div>
    `
    const myModal = new bootstrap.Modal(moldemodal1, {
        backdrop: false
      })    

    moldemodal2.classList.add("modal", "fade")
    moldemodal2.id = idmodal2
    moldemodal2.style="background-color: rgba(0, 0, 0, 0.5);"
    moldemodal2.innerHTML = `
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
                <button  type="button" class="btn btn-primary " data-bs-target="#${idmodal1}"  data-bs-toggle="modal">Horario</button>

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
            </div>
        </div>
    `
    const myModal2 = new bootstrap.Modal(moldemodal2, {
            backdrop: false
        })    
    
    
    addLista(horarioI, horasI, "rounded-end-0", moldemodal1)
    addLista(horarioEnd, horasEnd, "rounded-start-0", moldemodal1)
    
    addLista(ItinerarioI, itiI, "rounded-end-0", moldemodal2)
    addLista(ItinerarioEnd, itiEnd, "rounded-start-0", moldemodal2)


    document.querySelector(divpai).appendChild(molde)
    document.body.appendChild(moldemodal1)
    document.body.appendChild(moldemodal2)

   
   
}


linha(
// numero da linha
100, 
// bairro incial e bairro final
"bairro paia", "paioso", 
// horario do bairro incial 
"11:11, 11:11, 11:101, 11:11", 
// horario do bairro final
"11:11, 11:101, 11:11, 11:11", 
// itinerario do bairro inicial
"paia, pakhjjkhia",
// itinerario do bairro final
"paia, paijkhka",
// div em q estára
"#lista-linha"
)



linha(120, "paida", "padioso", 
"11:11, 11:11, 11:11, 11:11", 
"11:11, 11:11, 11:11, 11:11",
"paia, paia", "paia, paia",
"#lista-linha")




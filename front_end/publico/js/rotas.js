





const linha = (num, bairroI, bairroEnd, horarioI, horarioEnd, ItinerarioI, ItinerarioEnd, divpai) => {
    const molde = document.createElement("div")
    const idmodal1 = `L${num}1`
    const idmodal2 = `L${num}2`
    const horasI = `horasI${num}`
    const horasEnd = `horasEnd${num}`


  
    horarioI = horarioI.trim().split(",")
    horarioEnd = horarioEnd.trim().split(",")


    horarioI.forEach((elem) => {
        const horario = document.createElement("li")
        horario.classList.add("list-group-item", "rounded-end-0", "fs-4")
        horario.innerHTML = elem
        console.log(document.querySelector("#"+horasI))
        document.querySelector("#"+horasI).appendChild(horario)
    });

    horarioEnd.forEach((elem) => {
        const horario = document.createElement("li")
        horario.classList.add("list-group-item", "rounded-end-0", "fs-4")
        horario.innerHTML = elem
        document.querySelector("#"+horasEnd).appendChild(horario)
    });



    bairroEnd = bairroEnd.toUpperCase()
    bairroI = bairroI.toUpperCase()
   

    molde.innerHTML = ` 
        <div class="bg-dark-subtle rounded-4 d-flex flex-column  flex-lg-row px-3" data-bs-toggle="modal"
        data-bs-target="#${idmodal1}" style="cursor: pointer; height: 70px;">
        <div class="d-flex align-items-center column-gap-md-3 column-gap-2 py-2">
            <img src="./img/icon bus.png" alt="..." class="img-fluid" style="width: 22%" />

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
                <button type="button" class="btn btn-primary " data-bs-target="#${idmodal2}" data-bs-toggle="modal">Itinerario</button>

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
            </div>
        </div>
        </div>


        <div class="modal fade" id="${idmodal2}" tabindex="-1" aria-labelledby="a"
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
                <ul class="list-group  col  pe-0">

                    <li class="list-group-item rounded-end-0 fs-3">${bairroI}</li>
                    <li class="list-group-item rounded-end-0 fs-6 ">RUA TADEU LIBERATO DE CARVALHO, 141</li>
            
                </ul>

                <!--bairro fim -->
                <ul class="list-group  col  ps-0">
                    <li class="list-group-item rounded-start-0 fs-3">${bairroEnd}</li>
                    <li class="list-group-item rounded-start-0 fs-6 ">rua TADEU LIBERATO DE CARVALHO, 141</li>
                
                </ul>

                </div>

            </div>
            <div class="modal-footer border-0 px-4">
                <button  type="button" class="btn btn-primary " data-bs-target="#${idmodal1}" data-bs-toggle="modal">Horario</button>

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
            </div>
        </div>
        </div>
    `
    document.querySelector(divpai).appendChild(molde)
}


linha(100, "paia", "paioso", 
"11:11, 11:11, 11:11, 11:11", 
"11:11, 11:11, 11:11, 11:11", 
"paia, paia", "paia, paia",
 "#lista-linha")

linha(120, "paida", "padioso", 
"11:11, 11:11, 11:11, 11:11", 
"11:11, 11:11, 11:11, 11:11",
 "paia, paia", "paia, paia",
 "#lista-linha")



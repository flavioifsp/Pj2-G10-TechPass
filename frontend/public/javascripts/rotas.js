



class linha{

    constructor(num, bairroI, bairroEnd, divpai){
        this.num = num
        this.bairroI = bairroI.toUpperCase()
        this.bairroEnd = bairroEnd.toUpperCase()
        this.moldeelemLista = document.createElement("div")

        this.moldeelemLista.classList.add("bg-dark-subtle", "rounded-4", "d-flex", "flex-column",  "flex-lg-row", "px-3")
        this.moldeelemLista.style.cursor = "pointer"; this.moldeelemLista.style.height = "70px"
        this.moldeelemLista.innerHTML = ` 
            <div class="d-flex align-items-center column-gap-md-3 column-gap-2 py-2">
                <img src="./images/icon bus.png" alt="..." class="img-fluid" style="width: 50px" />
            
                <div class="">
                    <h5 class="mb-0">${num}</h5>
                    <p class="fs-5 mb-0">${bairroI}/${bairroEnd}</p>
                </div>
            </div>
        `


        document.querySelector(divpai).appendChild(this.moldeelemLista)
    }

    btnelemlista = false
 
    // transformar a string em uma array separando por "," > cd vetor do array será transformado em um elemento (li) e dps sera colocada em uma lista(ul)
    addLista = (string, lista, rounded, modal) => {
        string = string.trim().split(",")
        
        for(let x of string){
            const substring = document.createElement("li")
            substring.classList.add("list-group-item", rounded, "fs-4")
            substring.innerHTML = x
            modal.querySelector("#"+lista).appendChild(substring)
        }

    }




    addModalHorario(horarioI, horarioEnd){
        this.moldemodalhorario = document.createElement("div")
        const horasI = `horasI_l${this.num}`
        const horasEnd = `horasEnd_l${this.num}`
        this.btnalternarmodalsI = `btnalternarPitinerario_L${this.num}`
       

        this.moldemodalhorario.classList.add("modal", "fade")
        this.moldemodalhorario.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header px-4">
                <h1 class="modal-title "><i class="bi bi-clock-history pe-2"></i> HORARIO</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body px-4  ">

                <div class="container-fluid p-0 mx-auto row">

                <!--bairro inicio -->
                <ul class="list-group  col text-center pe-0" id="${horasI}">
                    <li class="list-group-item rounded-end-0 fs-3">${this.bairroI}</li>
                
                </ul>

                <!--bairro fim -->
                <ul class="list-group  col text-center ps-0" id="${horasEnd}">
                    <li class="list-group-item rounded-start-0  fs-3">${this.bairroEnd}</li>
                
                </ul>

                </div>

            </div>
            <div class="modal-footer border-0 px-4">
                <button type="button" class="btn btn-primary" id="${this.btnalternarmodalsI}">Itinerario</button>

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
            </div>
        </div>
        `
        
      

        this.addLista(horarioI, horasI, "rounded-end-0", this.moldemodalhorario)
        this.addLista(horarioEnd, horasEnd, "rounded-start-0", this.moldemodalhorario)

        this.BmodalH = new bootstrap.Modal(this.moldemodalhorario)
        if(!this.btnelemlista){
            this.btnelemlista = true
            this.moldeelemLista.addEventListener("click", () => {
                this.BmodalH.show()
            })
        }

        // document.querySelector("#restomodals").appendChild(mol)
    }

    addModalItinerario(itinerarioI, ItinerarioEnd){
        this.moldemodalItinerario = document.createElement("div")
        const itiI = `itiI_l${this.num}`
        const itiEnd = `itiEnd_l${this.num}`
        this.btnalternarmodalsH = `btnalternarPitinerario_L${this.num}`
       

        this.moldemodalItinerario.classList.add("modal", "fade")
        this.moldemodalItinerario.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                <div class="modal-header px-4">
                    <h1 class="modal-title"> <i class="bi bi-clock-history pe-2"></i> ITINERARIO</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4  ">

                    <div class="container-fluid p-0 mx-auto row">


                    <!--bairro inicio -->
                    <ul class="list-group  col  pe-0" id="${itiI}">

                        <li class="list-group-item rounded-end-0 fs-3">${this.bairroI}</li>
                    
                    </ul>

                    <!--bairro fim -->
                    <ul class="list-group  col  ps-0" id="${itiEnd}">
                        <li class="list-group-item rounded-start-0 fs-3">${this.bairroEnd}</li>
                    
                    </ul>

                    </div>

                </div>
                <div class="modal-footer border-0 px-4">
                    <button  type="button" class="btn btn-primary " id="${this.btnalternarmodalsH}">Horario</button>

                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
                </div>
            </div>
        `


        this.addLista(itinerarioI, itiI, "rounded-end-0", this.moldemodalItinerario)
        this.addLista(ItinerarioEnd, itiEnd, "rounded-start-0", this.moldemodalItinerario)

        this.BmodalI = new bootstrap.Modal(this.moldemodalItinerario)
        if(!this.btnelemlista){
            this.btnelemlista = true
            this.moldeelemLista.addEventListener("click", () => {
                this.BmodalI.show()
            })
        }

    }

    
   alternarmodals(){
        this.moldemodalhorario.querySelector("#"+this.btnalternarmodalsI).addEventListener("click", () => { 
            this.BmodalI.show()
            this.BmodalH.hide()
        })

        this.moldemodalItinerario.querySelector("#"+this.btnalternarmodalsH).addEventListener("click", () => { 
            this.BmodalI.hide()
            this.BmodalH.show()
        })
    }
    
   
}




for(i = 0, array = []; i<6; i++){
    array[i] = new linha(i+100, "paiaa", "paiaaa", "#lista-linha")
    array[i].addModalHorario("11:11, 11:11, 11:11, 11:11, 11:11, 11:11, 11:11", "11:11, 11:11, 11:11, 11:11, 11:11, 11:11, 11:11")
    array[i].addModalItinerario("paertertertretereteria, paietrerterterta, paertertertretereteria, paietrerterterta", " patertertertertia, paiareteterterterpa, ertertertretereteria, paietrerterterta")
    array[i].alternarmodals()
}
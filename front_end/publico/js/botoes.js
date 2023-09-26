
// 
// 


// function locomover(btn, pagFutura){
//     btn.addEventListener("click", () => {
        
//         pagFutura.classList.remove("d-none")
//     })
// } 
// locomover(btnNossosCartoes,pagNossosCartoes)



// 
// const recarregarMeuCartao = document.getElementById("recarregarMeuCartao")
// 


// function locomover2(btn, conteudoBotaoAtual, conteudoBotaoFuturo){
//     btn.addEventListener("click", () => {
//         conteudoBotaoAtual.classList.add("d-none")
//         conteudoBotaoFuturo.classList.remove("d-none")
        
//     })
// }

// locomover2(btnCancelarpPagNossosCartoes, pagNossosCartoes, recarregarMeuCartao)

const btnNossosCartoes = document.getElementById("btnNossosCartoes")
const btnRecarregarMeuCartao = document.getElementById("btnRecarregarMeuCartao")
const btnBloquearMeuCartao = document.getElementById("btnBloquearMeuCartao")
const subNossosCartoes = document.getElementById("subNossosCartoes")
const subRecarregarCartoes = document.getElementById("subRecarregarCartoes")
const subBloquearCartoes = document.getElementById("subBloquearCartoes")


const btns = [btnBloquearMeuCartao, btnNossosCartoes, btnRecarregarMeuCartao]

function inicio(btn, pagInicial, sub, btns){
    btn.addEventListener("click", () => {
        const pags = [...document.querySelectorAll(sub)]
        pags.map((elem, indi)=>{
            elem.style.transform = `translateX(120%)`

       
            elem.addEventListener("transitionend", () => {
                elem.classList.add("d-none")

                if(elem == pagInicial){
               
                    pagInicial.classList.toggle("d-none")
                    pagInicial.style.transform = `translateX(-100px)`
                }
            })
            btns[indi].style.background = "linear-gradient(45deg, rgba(0, 117, 255, 0.7978737027037377) 25%, rgba(96, 2, 255, 0.6970333665692839) 76%)"
            
        })
        btn.style.background = "#6000CF"

    })
}



inicio(btnNossosCartoes,subNossosCartoes, ".sub", btns)
inicio(btnRecarregarMeuCartao,subRecarregarCartoes, ".sub", btns)
inicio(btnBloquearMeuCartao,subBloquearCartoes, ".sub", btns)


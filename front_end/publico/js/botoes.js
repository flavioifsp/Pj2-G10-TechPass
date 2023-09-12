
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


function inicio(btn, pagInicial, sub){
    btn.addEventListener("click", () => {
        const pags = [...document.querySelectorAll(sub)]
        pags.map((elem)=>{elem.classList.add("d-none")})
        pagInicial.classList.toggle("d-none")
       
    })
}

inicio(btnNossosCartoes,subNossosCartoes, ".sub")
inicio(btnRecarregarMeuCartao,subRecarregarCartoes, ".sub")
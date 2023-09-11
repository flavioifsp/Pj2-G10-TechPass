
const btnNossosCartoes = document.getElementById("btnNossosCartoes")
const pagNossosCartoes = document.getElementById("pagNossosCartoes")


function locomover(btn, pagFutura){
    btn.addEventListener("click", () => {
        
        pagFutura.classList.remove("d-none")
        console.log("a")
        
    })

} 
    

    // function locomover(btn, pagAtual, pagFutura){
    // btn.addEventListener("click", () => {
    //     pagAtual.classList.add("d-none")
    //     pagFutura.classList.remove("d-none")
    //     console.log("a")
    // })

locomover(btnNossosCartoes,pagNossosCartoes)
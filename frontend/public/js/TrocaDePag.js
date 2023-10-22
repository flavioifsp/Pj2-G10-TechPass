
function AlternarDePag(btn, pag, proxima_subpag) {

    document.querySelector("#" + btn).addEventListener("click", async () => {
        try {
            let subpag = (await axios.get(`http://localhost:3000/user/${pag}/subpags/${proxima_subpag}`)).data
            const divpai = document.querySelector("#info")

            divpai.innerHTML = subpag
            
            for( elem of [...divpai.querySelectorAll('script')]) {
                eval(elem.innerText);
            }
            
        } catch (erro) {
            acionarerro(erro, erro.status)
        }
    })
}
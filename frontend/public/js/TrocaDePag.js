function AlternarDePag(btn, pag, proxima_subpag) {
    document.addEventListener("DOMContentLoaded", () => {

        document.querySelector("#"+btn).addEventListener("click", async () => {
            try {
                let subpag = (await axios.get(`http://localhost:3000/user/${pag}/subpags/${proxima_subpag}`)).data
                
                document.querySelector("#info").innerHTML  = subpag
            } catch (erro) {
                acionarerro(erro, erro.status)
            }
        })
    })
}
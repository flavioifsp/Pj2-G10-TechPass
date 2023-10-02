
const senhapaia = document.getElementById("senhapaia");
const btnsenha = document.getElementById("btnsenha");
const logo = btnsenha.querySelector("i")

btnsenha.addEventListener("click", () => {
    if(senhapaia.type === "password"){
      senhapaia.type = "text"
      logo.classList.add("bi-eye-slash")
      logo.classList.remove("bi-eye-fill")
    } else{
      senhapaia.type = "password"
      logo.classList.remove("bi-eye-slash")
      logo.classList.add("bi-eye-fill")
    }
})


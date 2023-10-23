
const senhaspaia = [...document.querySelectorAll(".senhapaia")];


senhaspaia.map((senhapaia) =>{
  
  const btnsenha = senhapaia.querySelector(".btnsenha");
  const inputsenha = senhapaia.querySelector(".inputsenha");
  const logo = senhapaia.querySelector("i")
  
  btnsenha.addEventListener("click", () => {
      if(inputsenha.type === "password"){
        inputsenha.type = "text"
        logo.classList.add("bi-eye-slash")
        logo.classList.remove("bi-eye-fill")
      } else{ 
        inputsenha.type = "password"
        logo.classList.remove("bi-eye-slash")
        logo.classList.add("bi-eye-fill")
      }
  })
     
})
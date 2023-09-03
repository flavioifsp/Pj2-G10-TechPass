





const senhapaia = document.getElementById("senhapaia");
    const btnpaia = document.getElementById("btnsenha");
    const ipaiaeye = btnpaia.querySelector("i")

    btnsenha.addEventListener("click", () => {
      if(senhapaia.type === "password"){
        senhapaia.type = "text"
        ipaiaeye.classList.add("bi-eye-slash")
        ipaiaeye.classList.remove("bi-eye-fill")
      } else{
        senhapaia.type = "password"
        ipaiaeye.classList.remove("bi-eye-slash")
        ipaiaeye.classList.add("bi-eye-fill")
      }
    })

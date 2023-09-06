const inserir = (parte, partorigin) => {

    const parte1 = document.getElementById(parte)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', partorigin, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        parte1.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
}



inserir("menuE", 'reutilizaveis\\menu.html')

inserir("footerE", 'reutilizaveis\\footer.html')



// const btnAddpagamento = document.getElementById("btn-addpagamento");
//   console.log(btnAddpagamento)
//   btnAddpagamento.addEventListener("click", () =>{
//     inserir("info", "reutilizaveis\\footer.html");
//     alert("sadads")
//   });

 
  // btnAddpagamento.addEventListener("click", () => {
  //   inserir("menuE", "reutilizaveis\\footer.html")
  // })


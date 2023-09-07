const inserirconteudo = (parte) => {
  const parte1 = document.getElementById("info");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", parte, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      parte1.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
};





// btnAddpagamento.addEventListener("click", () =>{
  // inserir("info", "reutilizaveis\\footer.html");
  // alert("sadads")
// });

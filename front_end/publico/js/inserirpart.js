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

const ul = document.querySelector("#navs");
const pags = [...ul.querySelectorAll("li")];
const h4 = document.querySelector("#nomefoco");
const myOffcanvas = new bootstrap.Offcanvas(document.getElementById('menuV'));


inserirconteudo(`reutilizaveis\\conteudo-da-area-da-conta\\cont-op${1}.html`)
h4.textContent = pags[1].textContent;

pags.map((elem, indice) => {
  if(indice > 0){
    elem.addEventListener("click", () => {
        inserirconteudo(`reutilizaveis\\conteudo-da-area-da-conta\\cont-op${indice}.html`)
        h4.textContent = elem.textContent;
        myOffcanvas.hide()
        
    });
  }
});




// btnAddpagamento.addEventListener("click", () =>{
  // inserir("info", "reutilizaveis\\footer.html");
  // alert("sadads")
// });

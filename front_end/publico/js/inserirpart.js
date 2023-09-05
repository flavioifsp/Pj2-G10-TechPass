const inserir = (parte) => {
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


pags.map((elem, indice) => {
  elem.addEventListener("click", () => {
      inserir(`reutilizaveis\\cont-op${indice}.html`)
      h4.textContent = elem.textContent;
  });
});





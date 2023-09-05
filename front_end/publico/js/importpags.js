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

let formas = ""



// a função lança um alert na div definida se encontrar a info no localstorage
function alert(keyAlert = "stopBusCreate", ms = 10000) {
    const infoDaRes = localStorage.getItem(keyAlert);
    if (infoDaRes) {
      const {
        cor = "success",
        texto = "paioso",
        div = "#alert",
        tipo = "alert",
      } = JSON.parse(infoDaRes);

      localStorage.clear(keyAlert);

      const alert = document.createElement("div");

      alert.setAttribute("class", "d-flex alert alert-" + cor);
      alert.setAttribute("role", tipo);
      alert.innerHTML = `
      <p>${texto}</p>

      <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

      const divpai = document.querySelector(div);
      divpai.appendChild(alert);
      setTimeout(() => {
        if (alert) {
          divpai.removeChild(alert);
        }
      }, ms);
    }
  }
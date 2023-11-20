// this.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
// this.crossorigin = "anonymous"
function formEtapasForms(
  btnAbrirModals,
  callBackSV = () => {},
  callbackValidacao = () => {}
) {
  // criando os modals e outras coisas
  const modalsBoostrap = [];
  const formvalidacao = [];
  let ultimoFechado;
  const dataValues = {};

  document.querySelectorAll(".modalForm").forEach((elem, indice) => {
    // definindo as instancias dos modals e jogando para um array
    const modalAtual = new bootstrap.Modal(elem);
    const formAtual = new Inputs(elem.querySelector("form"));
    modalsBoostrap.push(modalAtual);
    formvalidacao.push(formAtual);

    // definir o primeiro modal no indice
    if (indice == 0) {
      ultimoFechado = indice;
    }

    // voltar para o modal anterior ou apenas ocultar se for o primeiro modal
    const voltar = elem.querySelector(".btnvoltar");
    if (voltar) {
      voltar.addEventListener("click", () => {
        modalAtual.hide();

        if (indice > 0) {
          const voltar = (evt) => {
            modalsBoostrap[indice - 1].show();
            ultimoFechado = indice - 1;
            elem.removeEventListener("hidden.bs.modal", voltar);
          };
          elem.addEventListener("hidden.bs.modal", voltar);
        }
      });
    }

    //avancar para a proxima ou enivar para o servidor se for o ultimo modal

    formAtual.forms.addEventListener("submit", (evt) => {
      evt.preventDefault();

      modalAtual.hide();
      const avancar = (evt) => {
        formAtual.inputs(({ name, value }) => {
          dataValues[name] = value;
        });

        if (indice == document.querySelectorAll(".modalForm").length - 1) {
          // enviar para o servidor
          callBackSV(dataValues);
        } else {
          // avancar de pagina
          modalsBoostrap[indice + 1].show();
          ultimoFechado = indice + 1;
        }

        elem.removeEventListener("hidden.bs.modal", avancar);
      };

      elem.addEventListener("hidden.bs.modal", avancar);
    });
  });
  callbackValidacao(formvalidacao);
  
  // evento click que abre o modal que foi fechado por ultimo ou o primeiro
  document.querySelector(btnAbrirModals).addEventListener("click", () => {
    modalsBoostrap[ultimoFechado].show();
  });
}

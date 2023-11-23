// o 159 é para n ar conflito com outras variaveis
let boostrapModalAtual159 = null;
function criarFuncaoModal(ModalHtml = () => {}, callback = () => {}) {
  return function (objEjs) {
    const umadiv = document.createElement("div");

    umadiv.innerHTML = ModalHtml(objEjs);

    const modal = umadiv.querySelector(".modal");

    document.body.appendChild(modal);

    callback(modal, objEjs);

    const InstanciaBoostrapDoModal = new bootstrap.Modal(modal);

    if (boostrapModalAtual159 && document.querySelector(".modal.show")) {
      boostrapModalAtual159.hide();
      boostrapModalAtual159._element.addEventListener("hidden.bs.modal", () => {
        InstanciaBoostrapDoModal.show();
      });
    } else {
      InstanciaBoostrapDoModal.show();
    }

    boostrapModalAtual159 = InstanciaBoostrapDoModal;

    modal.addEventListener("hidden.bs.modal", () => {
      modal.remove();
    });
  };
}

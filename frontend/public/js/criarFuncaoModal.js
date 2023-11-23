function criarFuncaoModal(ModalHtml, callback) {
  return function (objEjs) {
    const umadiv = document.createElement("div");

    umadiv.innerHTML = ModalHtml;

    const modal = umadiv.querySelector(".modal");

    document.body.appendChild(modal);

    callback(modal);

    const InstanciaBoostrapDoModal = new bootstrap.Modal(modal);

    InstanciaBoostrapDoModal.toggle();

    modal.addEventListener("hidden.bs.modal", () => {
      InstanciaBoostrapDoModal.dispose();
    });
  };
}

function criarFuncaoModal(ModalHtml, callback = () => {}) {
  return function (objEjs) {
    const umadiv = document.createElement("div");

    umadiv.innerHTML = ModalHtml;

    const modal = umadiv.querySelector(".modal");

    document.body.appendChild(modal);

    callback(modal);

    const InstanciaBoostrapDoModal = new bootstrap.Modal(modal);

    const modalspag = document.querySelectorAll(".modal");
    modalspag.forEach((e, i) => {
      const modal0 = new bootstrap.Modal(e);

      if (e.classList.contains("show")) {
        modal0.hide();
        e.addEventListener("hidden.bs.modal", function paia() {
          InstanciaBoostrapDoModal.toggle();
          e.removeEventListener(paia);
        });
      } else if (modalspag.length - 1 == i) {
        InstanciaBoostrapDoModal.toggle();
      }
    });

    modal.addEventListener(
      "hidden.bs.modal",
      (abb = () => {
        modal.remove();
      })
    );
  };
}

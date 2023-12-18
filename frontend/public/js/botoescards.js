const btns = [...document.querySelectorAll(".cor-botoes")];

btns.forEach((e) => {
  let btnOescolhido;
  e.addEventListener("click", (event) => {
    btnOescolhido = event.currentTarget;

    for (x of btns) {
      x.style.background =
        "linear-gradient(45deg, rgba(0, 117, 255, 0.7978737027037377) 25%, rgba(96, 2, 255, 0.6970333665692839) 76%)";
      x.parentNode.style.background = "";

      if (x === btnOescolhido) {
        btnOescolhido.style.background = "#6000CF";

        btnOescolhido.parentNode.appendChild(
          document.querySelector("#backgroundPaioso")
        );
      }
    }
  });
});

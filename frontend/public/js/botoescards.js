const btns = [...document.querySelectorAll(".cor-botoes")];

const shadow = document.createElement("div");
shadow.style.backgroundColor = "#b7b7b7";
shadow.style.height = "100%"
shadow.style.width = "100%"
shadow.style.position = "absolute"
shadow.style.top = "0px"
shadow.style.transition = "all 1s ease-in-out"
shadow.style.zIndex = "-1"

btns.forEach((e) => {
  let btnOescolhido;
  e.addEventListener("click", (event) => {
    btnOescolhido = event.currentTarget;

    for (x of btns) {
      x.style.background =
        "linear-gradient(45deg, rgba(0, 117, 255, 0.7978737027037377) 25%, rgba(96, 2, 255, 0.6970333665692839) 76%)";

      if (x === btnOescolhido) {
        btnOescolhido.style.background = "#6000CF";

        const divPai = btnOescolhido.parentNode

        divPai.style.position = "relative"

        divPai.appendChild(shadow)
      }
    }
  });
});

class Inputs {
  constructor(forms) {
    this.forms = document.querySelector("form");
    this.inputs = (funcao) => {
      for (const campo of [
        ...document.querySelector(forms).querySelectorAll("input"),
      ]) {
        funcao(campo);
      }
    };
  }

  allValues() {
    const valores = {};
    this.inputs(({ name, value }) => {
      valores[name] = value;
    });

    return valores;
  }

  allvalidacao(restricao, api) {
    this.forms.querySelector("#submit").setAttribute("disabled", "");

    this.inputs((input) => {
      const inputvalida = restricao[input.name];
      if (inputvalida) {
        // adicionar a restricao final
        input.pattern = inputvalida.pattern[0];

        const validdiv = document.createElement("div");
        validdiv.classList.add("px-2");
        input.parentNode.appendChild(validdiv);

        // max
        if (input.type == "text") {
          input.maxLength = inputvalida.max;
        } else if (input.type == "number") {
          input.Length = inputvalida.max;
        }

        // n permitir certos caracteres
        if (inputvalida.caractereNpermitido) {
          input.addEventListener("input", () => {
            input.value = input.value.replace(
              inputvalida.caractereNpermitido,
              ""
            );
          });
        }

        // // erros
        // if (inputvalida.erros) {
        //   inputvalida.erros.map((elem) => {
        //     input.addEventListener("input", () => {
        //       console.log(input.value.matchAll(/123/g))
        //     })})
        // }

        input.addEventListener("focusout", (a) => {
          // auto pontuar
          if (inputvalida.autopontuar) {
            input.value = input.value
              .replace(inputvalida.autopontuar[2], inputvalida.autopontuar[3])
              .replace(inputvalida.autopontuar[0], inputvalida.autopontuar[1]);
          }

          let allvalidacao = 1;
          this.inputs((input) => {
            if (input.classList.contains("is-valid")) allvalidacao++;
            if (allvalidacao == Object.keys(restricao).length) {
              this.forms
                .querySelector("#submit")
                .removeAttribute("disabled", "");

                this.forms.addEventListener("submit", (event) => {
                event.preventDefault();

                api(this.allValues())
              });
            } else {
              this.forms.querySelector("#submit").setAttribute("disabled", "");
            }
          });
          allvalidacao = 0;

          //   checar a restricao final
          if (input.checkValidity()) {
            // div de texto
            validdiv.classList.add("valid-feedback");
            validdiv.classList.remove("invalid-feedback");
            // texto se a restricao final for aceita
            validdiv.innerText = inputvalida.pattern[1];

            // classe do input
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
          } else {
            // div de texto
            validdiv.classList.add("invalid-feedback");
            validdiv.classList.remove("valid-feedback");
            // texto se a restricao final for negada
            validdiv.innerText = inputvalida.pattern[2];

            // classe do input
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
          }
        });
      }
    });
  }
}

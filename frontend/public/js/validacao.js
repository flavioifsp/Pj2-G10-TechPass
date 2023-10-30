class Inputs {
  constructor(forms) {
    this.forms = document.querySelector(forms);
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

        // min
        if (input.type == "text" || input.type == "password") {
          input.minlength = inputvalida.min;
        } else if (input.type == "number") {
          input.min = inputvalida.min;
        }

        // n permitir certos caracteres e dar msg de erro
        if (inputvalida.caractereNpermitido) {
          input.addEventListener("input", (el) => {
            const alertDeErro = input.value.match(
              inputvalida.caractereNpermitido
            );

            if (alertDeErro && el.inputType != "insertFromPaste") {
              input.classList.add("is-invalid");
              validdiv.classList.add("invalid-feedback");

              validdiv.innerText = `o caractere "${el.data}" não é permitido neste campo. Ele será apagado`;
            } else {
              input.classList.remove("is-invalid");
            }

            input.value = input.value.replace(
              inputvalida.caractereNpermitido,
              ""
            );
          });
        }

        this.forms.querySelector(".submit").setAttribute("disabled", "");

        input.addEventListener("focusout", async () => {
          // auto pontuar
          if (inputvalida.autopontuar) {
            input.value = input.value
              .replace(inputvalida.autopontuar[2], inputvalida.autopontuar[3])
              .replace(inputvalida.autopontuar[0], inputvalida.autopontuar[1]);
          }

          // desabilitar o botao cadastrar
          let allvalidacao = 1;
          this.inputs((input) => {
            if (input.classList.contains("is-valid")) allvalidacao++;
            if (allvalidacao == Object.keys(restricao).length) {
              this.forms
                .querySelector(".submit")
                .removeAttribute("disabled", "");
            } else {
              this.forms.querySelector(".submit").setAttribute("disabled", "");
            }
          });
          allvalidacao = 0;

          // erro custom
          let erroCustom = null;
          if (inputvalida.customerro) {
            for (const elem of inputvalida.customerro) {
              const customerro = await elem(input.value);
              if (customerro) {
                erroCustom = customerro;
                console.log(erroCustom, "paia");
              }
            }
          }

          //   checar a restricao final
          if (input.checkValidity() && input.value.length != 0 && !erroCustom) {
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

            // conferir o minimo de caracteres

            if (erroCustom) {
              validdiv.innerText = erroCustom;
            } else if (input.value.length < inputvalida.min) {
              validdiv.innerText = `insira ao menos ${inputvalida.min} caracteres`;
            } else {
              validdiv.innerText = inputvalida.pattern[2];
            }

            // classe do input
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
          }
        });
      }
    });
  }

  cadastrar(url, erro, success) {
    this.forms.addEventListener("submit", async (evt) => {
      evt.preventDefault();

      try {
        const cadastrar = await axios.post(url, this.allValues());

        success(cadastrar);
      } catch (error) {
        if (error.response.status == 401) {
          erro(error);
        } else {
          acionarerro(error);
        }
      }
    });
  }

  login(url, erro, success) {
    this.forms.addEventListener("submit", async (evt) => {
      evt.preventDefault();

      try {
        const login = await axios.post(url, this.allValues());
        document.cookie = login.data.token;
        success(login);
      } catch (error) {
        if (error.response.status == 401) {
          erro(error);
        } else {
          acionarerro(error);
        }
      }
    });
  }

  resetDeinfo(url) {
    try {
      this.inputs(async (input) => {
        if (input.name !== "" && input.name !== "senha") {
          const infoSV = (
            await axios.get(`${url}/?${input.name}`, getCookie("token"))
          ).data[input.name];

          if (input.name == "nascimento") {
            input.value = new Date(infoSV).toISOString().split("T")[0];
          } else {
            input.value = infoSV;
          }
        }
      });
    } catch (error) {
      acionarerro(error);
    }
  }

  patchInfo(url) {
    this.forms.addEventListener("submit", async (evt) => {
      evt.preventDefault();

      try {
        const paia = await axios.patch(
          url,
          this.allValues(),
          getCookie("token")
        );
      } catch (error) {}
    });
  }
}

class Inputs {
  constructor(forms) {
    // criando uma variavel para o forms

    this.forms =
      typeof forms == "object" ? forms : document.querySelector(forms);

    // essa funcao recebe uma funcao que rodara em todos os inputs
    this.inputs = (funcao) => {
      for (const campo of [
        ...this.forms.querySelectorAll("input"),
        ...this.forms.querySelectorAll("select"),
      ]) {
        funcao(campo);
      }
    };
  }

  // ele retorna um objeto com todos os valores do input do site
  allValues(modificarFormData) {
    const valores = {};

    // para o codigo antigo ainda funcionar
    new FormData(this.forms).forEach((value, key) => {
      valores[key] = value;
    });

    const formobj = new FormData(this.forms);

    // modificarFormData é um objeto composto de metodos para modificar os valores do input
    for (const key in modificarFormData) {
      if (Object.hasOwnProperty.call(modificarFormData, key)) {
        const valor = formobj.get(key);

        formobj.set(key, modificarFormData[key](valor));
      }
    }

    const keysNull = [];
    formobj.forEach((value, key) => {
      if (!value || value.size === 0) keysNull.push(key);
    });

    keysNull.forEach((key) => {
      formobj.delete(key);
    });

    return modificarFormData ? formobj : valores;
  }

  // n vai validar se o input estiver vazio
  neutralidadeON() {
    this.neutralidade = true;
  }

  // tudo isso é para validacao, está mt bagunçado
  allvalidacao(restricao) {
    const inputsOBG = [];

    this.inputs((input) => {
      const inputvalida = restricao[input.name];

      const eventoCertoParaOinput =
        input.nodeName == "INPUT" ? "blur" : "onchange";

      // esse if vai ser servir para evitar erro se nem todos os inputs tiverem validacao
      if (inputvalida) {
        // estou rodando um for no objeto que foi inserido na hr que chamou o metodo allvalidacao. Esse objeto contem os parametros de config de cd input
        for (const inputConfig in restricao) {
          if (Object.hasOwnProperty.call(restricao, inputConfig)) {
            // se a iteração atual tem um btn off definido
            if (restricao[inputConfig].btnoff) {
              // se a interção atual desse for corresponde ao input atual
              if (input.name == inputConfig) {
                // se o input corresponse tem a gente add ele no vetor inputsOBG
                inputsOBG.push(input);
              }
            }
          }
        }

        // adicionar a restricao final
        input.pattern = inputvalida.pattern[0];

        // criando a div de texto que fica embaixo do input
        const validdiv = document.createElement("div");
        validdiv.classList.add("px-2", "diverro");
        input.parentNode.appendChild(validdiv);

        // max
        if (input.type == "text") {
          input.maxLength = inputvalida.max;
        } else {
          input.max = inputvalida.max;
        }

        // min
        if (input.type == "text") {
          input.minLength = inputvalida.min;
        } else {
          input.min = inputvalida.min;
        }

        // verificar se o caractere que ele inserieu está de acordo com o permitido
        const listaDeErros = {
          Nnumber: [/[0-9]/g, "Este campo não permite numero"],
          Nletra: [/[a-zA-Z]/g, "Este campo não permite letra"],
          NcaractereEspecial: [
            /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/-]/g,
            "Este campo não permite Caractere especiais",
          ],
          Nacentuacao: [
            /[À-ÿáéíóúâêîôûàèìòùãõäëïöüçãõẽĩũâêîôûũṹỹḿẽĩỹẽẽỹẽỹã´`~^]/g,
            "Este campo não permite letra com acentuação",
          ],
        };

        const NpermitidosNoInput = inputvalida.caractereNpermitido;

        if (NpermitidosNoInput) {
          // adiciono um evento de input
          input.addEventListener("input", (el) => {
            let remove = true;

            for (const Npermitido of NpermitidosNoInput) {
              for (const erro in listaDeErros) {
                if (Object.hasOwnProperty.call(listaDeErros, erro)) {
                  if (erro === Npermitido) {
                    const alertDeErro = input.value.match(
                      listaDeErros[erro][0]
                    );

                    // se n estiver e não for tiver sido colado
                    if (alertDeErro && el.inputType != "insertFromPaste") {
                      input.classList.add("is-invalid");
                      validdiv.classList.add("invalid-feedback");

                      validdiv.innerText = listaDeErros[erro][1];

                      input.value = input.value.replace(alertDeErro, "");

                      remove = false;
                      break;
                    } else if (remove) {
                      input.classList.remove("is-invalid");
                    }
                  }
                }
              }
            }
          });
        }

        // para desativar o btn de submit
        if (inputvalida.btnoff) {
          const btnsubmit = this.forms.querySelector('button[type="submit"]');
          const label = document.querySelector(`label[for="${input.id}"]`);

          const texto = document.createElement("span");

          texto.classList.add(
            "position-absolute",
            "top-100",
            "start-50",
            "translate-middle",
            "btnsubmitMuitoPaia",
            "pt-3",
            "text-danger"
          );

          // texto.innerText = "finalize";

          function btndesativado() {
            if (!btnsubmit.getAttribute("disabled")) {
              btnsubmit.setAttribute("disabled", true);
              btnsubmit.classList.add("position-relative");
              btnsubmit.appendChild(texto);
            }
          }
          function btnativado() {
            const porra = btnsubmit.querySelector(".btnsubmitMuitoPaia");
            btnsubmit.removeAttribute("disabled", "");
            if (!!porra) btnsubmit.removeChild(porra);
          }

          if (label && inputvalida.btnoff == "required") {
            label.innerHTML += '<span class="text-danger ">*</span>';
          }

          input.addEventListener(eventoCertoParaOinput, () => {
            setTimeout(() => {
              // desabilitar e ativar o botao cadastrar

              for (const e of inputsOBG) {
                if (
                  e.classList.contains("is-valid") ||
                  (inputvalida.btnoff !== "required" &&
                    !e.classList.contains("is-invalid"))
                ) {
                  btnativado();
                } else {
                  btndesativado();

                  break;
                }
              }
            }, 400);
          });

          btndesativado();

          input.addEventListener("input", () => {
            if (!btnsubmit.getAttribute("disabled")) {
              btndesativado();
            }
          });
        }

        // autopontuar
        input.addEventListener("blur", () => {
          // auto pontuar
          if (inputvalida.autopontuar) {
            input.value = input.value
              .replace(inputvalida.autopontuar[2], inputvalida.autopontuar[3])
              .replace(inputvalida.autopontuar[0], inputvalida.autopontuar[1]);
          }
        });

        //
        input.addEventListener(eventoCertoParaOinput, async () => {
          // erro
          let erroCustom = null;
          if (inputvalida.customErro) {
            for (const erro of inputvalida.customErro) {
              erroCustom = input.value.match(erro[0]);
              if (erroCustom) {
                erroCustom = erro[1];
                break;
              }
            }
          }

          //
          // //
          //

          // evento
          let eventoCustom = null;
          if (
            !erroCustom &&
            inputvalida.customEvento &&
            input.checkValidity() &&
            input.value.length != 0
          ) {
            for (const elem of inputvalida.customEvento) {
              const divloading = document.createElement("div"); // criacao da div de carregamento
              let divpai = input.parentNode; // para efeito de carregamento

              try {
                // efeito de carregamento
                divloading.setAttribute("class", "position-relative");
                divloading.innerHTML = ` 
                <div class="position-absolute top-50 end-0 translate-middle-y d-flex" style="margin-right: 5%">
                  <div class="spinner-border spinner-border-sm text-primary  "   role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                `;
                divpai.appendChild(divloading);
                divloading.appendChild(input);
                const customEvento = await elem(input.value);
                divpai = divloading.parentNode;
                divpai.insertBefore(input, divpai.querySelector(".diverro"));
                divpai = input.parentNode;
                divpai.removeChild(divloading);

                if (customEvento) {
                  eventoCustom = customEvento;
                }
              } catch (error) {
                eventoCustom = "falha ao verificar";

                divpai = divloading.parentNode;
                divpai.insertBefore(input, divpai.querySelector(".diverro"));
                divpai = input.parentNode;
                divpai.removeChild(divloading);
                acionarerro(error);
              }
            }
          }

          //

          // console.log(!(typeof this.neutralidade !== "undefined" && !input.value));

          // //

          if (!(typeof this.neutralidade !== "undefined" && !input.value)) {
            //   checar a restricao final
            if (
              input.checkValidity() &&
              !eventoCustom &&
              !erroCustom &&
              input.value.length !== 0
            ) {
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
              if (input.value.length < inputvalida.min) {
                validdiv.innerText = `insira ao menos ${inputvalida.min} caracteres`;
              } else if (input.value.length > inputvalida.max) {
                validdiv.innerText = `Este campo permite apenas  ${inputvalida.max} caracteres!`;
              } else if (input.type == "number") {
                if (input.value < inputvalida.min) {
                  validdiv.innerText = `O minimo é ${inputvalida.min}`;
                } else {
                  validdiv.innerText = `O limite é ${inputvalida.max}`;
                }
              } else if (erroCustom) {
                validdiv.innerText = erroCustom;
              } else if (eventoCustom) {
                validdiv.innerText = eventoCustom;
              } else {
                validdiv.innerText = inputvalida.pattern[2];
              }

              // classe do input
              input.classList.add("is-invalid");
              input.classList.remove("is-valid");
            }
          }

          let errfinal = true;
          input.addEventListener("input", () => {
            if (errfinal) {
              input.classList.remove("is-valid");
              input.classList.remove("is-invalid");
            }
            errfinal = false;
          });

          this.forms.addEventListener("reset", () => {
            this.inputs((elemINPUT) => {
              elemINPUT.classList.remove("is-invalid");
              elemINPUT.classList.remove("is-valid");
            });
          });

          input.addEventListener("focus", () => {
            if (errfinal) {
              input.classList.remove("is-valid");
              input.classList.remove("is-invalid");
            }
            errfinal = false;
          });
        });
      }
    });
  }

  // // validar automaticamente os inputs
  // autovalidar() {
  //   this.inputs((input) => {
  //     setTimeout(() => {
  //       // input.focus();
  //       input.nodeName == "INPUT" ? input.focus() : input.change();
  //       // console.log("s");
  //       input.blur();
  //     }, 200);
  //   });
  // }

  // é para simplificar na hr de criar um post de criacao
  cadastrar(url, data = null, erro = () => {}, success = () => {}) {
    this.forms.addEventListener("submit", async (evt) => {
      evt.preventDefault();

      if (typeof data === "function") data = data();
      else if (data === null) data = this.allValues();

      try {
        const cadastrar = await axios.post(url, data);
        console.log("validação deu certo");
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

  // é para simplificar quando precisar criar um login
  login(url, erro = () => {}, success = () => {}) {
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

  // ele roda o forms inteiro e  substitui os valores pelo o que está no sv
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

  patchInfo(url, erro = () => {}, success = () => {}) {
    this.forms.addEventListener("submit", async (evt) => {
      evt.preventDefault();

      try {
        const paia = await axios.patch(
          url,
          this.allValues(),
          getCookie("token")
        );
        success();
      } catch (error) {
        acionarerro(error);
      }
    });
  }
}

function addhorario(listaID, n, VALORESFINAL, form = "#formhorarios") {
  const divPaiLista = document.querySelector(`#${listaID}`);
  const lista = divPaiLista.querySelector("ul");

  const objHoras = [];

  function guardarObjNoForm(obj) {
    VALORESFINAL[`rota${n}`].horarios = obj;
    console.log(VALORESFINAL);

  }

  function addLi(horas, duracao, indice) {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex");
    li.innerHTML = `
      <p class="my-auto p-0 m-0">${horas} | Duracao: ${duracao}m</p>
      <div class="list-group ms-auto list-group-horizontal">

        <button type="button" class="excluir btn border ms-auto py-0 px-2">
          <i class="bi bi-x-lg text-danger"></i>
        </button>
      </div>
      `;

    li.querySelector(".excluir").addEventListener("click", () => {
      const ul = li.parentNode.children;
      for (const indice in ul) {
        if (ul[indice] == li) {
          objHoras.splice(indice, 1);
        }
      }
      li.remove();
      guardarObjNoForm(objHoras);
    });

    lista.insertBefore(li, lista.children[indice]);
    // <button class="subir  list-group-item list-group-item-action py-0 px-2"><i class="bi bi-arrow-up"></i></button>
    // <button class="descer  list-group-item list-group-item-action py-0 px-2"><i class="bi bi-arrow-down"></i></button>
  }

  lista.querySelectorAll("button").forEach((e) => {
    e.addEventListener("click", (evt) => {
      if (e.classList.contains("btnadd")) {
        let inputhoras = lista.querySelector("#addHora" + n),
          inputduracao = lista.querySelector("#addduracao" + n);
        if (
          inputduracao.classList.contains("is-valid") &&
          inputhoras.classList.contains("is-valid")
        ) {
          const duracao = inputduracao.value,
            horas = inputhoras.value;

          const horarioSaida = {
            horario_de_saida: new Date(`2000-01-01T${horas}`),
            duracaoEstimada: parseInt(duracao),
          };

          objHoras.push(horarioSaida);
          objHoras.sort((a, b) => {
            return b.horas - a.horas; // Isso ordenará as datas em ordem decrescente
          });

          for (const i in objHoras) {
            if (objHoras[i] === horarioSaida) {
              setTimeout(() => {
                addLi(horas, duracao, i);
              }, 500);

              break;
            }
          }

          inputhoras.value = "";
          inputduracao.value = "";

          inputhoras.classList.remove("is-valid");
          inputduracao.classList.remove("is-valid");

          const bsCollapse = new bootstrap.Collapse("#addhorario" + n);
          bsCollapse.hide();
        } else {
          evt.stopPropagation();
          inputhoras.focus();
          inputhoras.blur();
          inputduracao.focus();
          inputduracao.blur();
        }
      }
      guardarObjNoForm(objHoras);
    });
  });
}

function addpercurso(n, VALORESFINAL, form = "#formhorarios") {
  const lista = document.querySelector(form).querySelector("ul");

  const objHoras = [];

  function guardarObjNoForm(obj) {

    VALORESFINAL[`rota${n}`].percursos = obj;
  }

  function addLi(endereco, indice) {
    endereco;

    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex");
    li.innerHTML = `
      <p class="my-auto p-0 m-0">${endereco}</p>
      <div class="list-group ms-auto list-group-horizontal">

        <button type="button" class="excluir btn border ms-auto py-0 px-2">
          <i class="bi bi-x-lg text-danger"></i>
        </button>
        <button type="button" class="subir  list-group-item list-group-item-action py-0 px-2"><i class="bi bi-arrow-up"></i></button>
        <button type="button" class="descer  list-group-item list-group-item-action py-0 px-2"><i class="bi bi-arrow-down"></i></button>
      </div>
      `;

    li.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ul = li.parentNode;
        let indice = Array.from(ul.children).indexOf(li);

        if (btn.classList.contains("excluir")) {
          let indi;
          if (indice !== ul.children.length - 2) indi = indice + 1;
          else indi = indice;

          objHoras[indi].ordem_do_percurso = indi;
          objHoras.splice(indice, 1);
          li.remove();
        } else if (btn.classList.contains("subir")) {
          if (indice > 0 && indice <= ul.children.length) {
            const temp = objHoras[indice];
            objHoras[indice] = objHoras[indice - 1];
            objHoras[indice - 1] = temp;

            objHoras[indice].ordem_do_percurso = indice + 1;
            objHoras[indice - 1].ordem_do_percurso = indice;

            if (li.previousElementSibling) {
              ul.insertBefore(li, li.previousElementSibling);
            }
          }
        } else if (btn.classList.contains("descer")) {
          if (indice >= 0 && indice < ul.children.length - 2) {
            const temp = objHoras[indice];
            objHoras[indice] = objHoras[indice + 1];
            objHoras[indice + 1] = temp;

            objHoras[indice].ordem_do_percurso = indice + 1;
            objHoras[indice + 1].ordem_do_percurso = indice + 2;

            if (li.nextElementSibling) {
              ul.insertBefore(li.nextElementSibling, li);
            }
          }
        }

        guardarObjNoForm(objHoras);
        console.log(objHoras);
      });

      lista.insertBefore(li, lista.children[indice]);
    });
  }

  lista.querySelectorAll("button").forEach((e) => {
    e.addEventListener("click", (evt) => {
      if (e.classList.contains("btnadd")) {
        const inputendereco = lista.querySelector("select");

        if (inputendereco.classList.contains("is-valid")) {
          const endereco = inputendereco.value;

          const percurso = {};  



          objHoras.push(percurso);

          let enderecoTexto;

          inputendereco.querySelectorAll("option").forEach((e) => {
            if (e.value == endereco) {
              enderecoTexto = e.innerText;
            }
          });

          for (const i in objHoras) {
            if (objHoras[i] === percurso) {
              (percurso.ordem_do_percurso = parseInt(i) + 1),
                (percurso.pontoOnibus_id = parseInt(endereco));

              setTimeout(() => {
                addLi(enderecoTexto, i);
              }, 500);

              break;
            }
          }

          inputendereco.value = "";

          inputendereco.classList.remove("is-valid");

          const bsCollapse = new bootstrap.Collapse("#acordionPercurso" + n);
          bsCollapse.hide();
        } else {
          evt.stopPropagation();
          inputendereco.focus();
          inputendereco.blur();
        }
      }
      guardarObjNoForm(objHoras);
    });
  });
}


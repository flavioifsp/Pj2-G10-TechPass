function addLiHorario(
  horas,
  duracao,
  indice,
  lista,
  guardarObjNoForm,
  array,
  n
) {
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
        
        array.splice(indice, 1);
      }
    }
    li.remove();
    guardarObjNoForm(array, n);
  });

  lista.insertBefore(li, lista.children[indice]);
  // <button class="subir  list-group-item list-group-item-action py-0 px-2"><i class="bi bi-arrow-up"></i></button>
  // <button class="descer  list-group-item list-group-item-action py-0 px-2"><i class="bi bi-arrow-down"></i></button>
}

function addLiPercurso(
  endereco,
  indice,
  lista,
  guardarObjNoForm,
  array,
  n
) {
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

        array[indi].ordem_do_percurso = indi;
        array.splice(indice, 1);
        li.remove();
      } else if (btn.classList.contains("subir")) {
        if (indice > 0 && indice <= ul.children.length) {
          const temp = array[indice];
          array[indice] = array[indice - 1];
          array[indice - 1] = temp;

          array[indice].ordem_do_percurso = indice + 1;
          array[indice - 1].ordem_do_percurso = indice;

          if (li.previousElementSibling) {
            ul.insertBefore(li, li.previousElementSibling);
          }
        }
      } else if (btn.classList.contains("descer")) {
        if (indice >= 0 && indice < ul.children.length - 2) {
          const temp = array[indice];
          array[indice] = array[indice + 1];
          array[indice + 1] = temp;

          array[indice].ordem_do_percurso = indice + 1;
          array[indice + 1].ordem_do_percurso = indice + 2;

          if (li.nextElementSibling) {
            ul.insertBefore(li.nextElementSibling, li);
          }
        }
      }

      guardarObjNoForm(array, n);
    });

    lista.insertBefore(li, lista.children[indice]);
  });
}

//
//
//

function addhorario(listaID, n, guardarObjNoForm) {
  const divPaiLista =
    typeof listaID === "string"
      ? document.querySelector(`#${listaID}`)
      : listaID;
  const lista = divPaiLista.querySelector("ul");

  const objHoras = [];

  lista.querySelectorAll("button").forEach((e) => {
    e.addEventListener("click", (evt) => {

      if (e.classList.contains("btnadd")) {
        let inputhoras = lista.querySelector(".addHora" + n),
          inputduracao = lista.querySelector(".addduracao" + n);
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
                addLiHorario(
                  horas,
                  duracao,
                  i,
                  lista,
                  guardarObjNoForm,
                  objHoras,
                  n
                );
              }, 500);

              break;
            }
          }

          inputhoras.value = "";
          inputduracao.value = "";

          inputhoras.classList.remove("is-valid");
          inputduracao.classList.remove("is-valid");

          const bsCollapse = new bootstrap.Collapse(
            lista.querySelector(".addhorario" + n)
          );
          bsCollapse.hide();
        } else {
          evt.stopPropagation();
          inputhoras.focus();
          inputhoras.blur();
          inputduracao.focus();
          inputduracao.blur();
        }
      }
      guardarObjNoForm(objHoras, n);
    });
  });
}

function addpercurso(n, form = "#formhorarios", guardarObjNoForm) {
  const lista = document.querySelector(form).querySelector("ul");

  const objHoras = [];

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
                addLiPercurso(
                  enderecoTexto,
                  i,
                  lista,
                  guardarObjNoForm,
                  objHoras,
                  n
                );
              }, 500);

              break;
            }
          }

          inputendereco.value = "";

          inputendereco.classList.remove("is-valid");

          const bsCollapse = new bootstrap.Collapse(
            lista.querySelector(".acordionPercurso" + n)
          );
          bsCollapse.hide();
        } else {
          evt.stopPropagation();
          inputendereco.focus();
          inputendereco.blur();
        }
      }
      guardarObjNoForm(objHoras, n);
    });
  });
}

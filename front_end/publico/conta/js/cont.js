class contTemplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      <script src="js/footer.js"></script>
    
      <main class="container-fluid p-0 fundo d-flex align-items-start  ">
        <nav
          class="navbar navbar-expand-md  nav  m-0 p-0 shadow  d-flex flex-column ">
          <div
            class="offcanvas offcanvas-start navbar-collapse  collapse d-flex flex-column justify-content-start align-items-center p-0 m-0 "
            id="menuV">
  
            <header
              class="container-fluid shadow d-flex px-0 justify-content-between">
              <a href="../index.html" class="navbar-brand p-0">
                <img src="../img/logo.png" alt="passtech" style="width: 75px" />
              </a>
  
              <button type="button" class="btn-close p-4 d-block d-md-none"
                style="font-size: 20px;" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </header>
  
            <ul
              class="navbar-nav   d-flex container-fluid flex-column align-items-start   p-0"
              id="navs">

              <li
                class="nav-item d-inline-flex align-items-center justify-content-center py-4">
                <i
                class="bi my-auto bi-person-circle"
                style="font-size: 3rem"></i>
                <h4 class="ms-3">paiaoso</h4>
                </li>


                <li class="nav-item">
                  <a href="MeuPerfil.html" class="nav-link" id="perfil">
                    <h4>meu perfil</h4>
                  </a>
                </li>
                <li class="nav-item">
                <a href="MeusCartoes.html" class="nav-link" id="mycard">
                  <h4>meus cartões</h4>
                </a>
              </li>
              <li class="nav-item">
                <a href="formadePag.html" class="nav-link" id="formaspag">
                  <h4 class="d-flex flex-wrap">formas de pagamento</h4>
                </a>
              </li>
             
            </ul>
  
          </div>
  
          <button
            class="navbar-toggler mx-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menuV"
            aria-controls="menuV"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
  
        <section class="container-fluid p-0 pb-5" id="conteudo">
          <header
            class="container-fluid d-flex flex-row-reverse ps-0 pe-5 mx-0 shadow">
            <div class="d-flex column-gap-2 align-items-center">
              <p class="p-0 m-0 mb-auto" style="font-size: 1rem">
                Olá, <span>paia</span>
              </p>
              <a href="#"><i class="bi bi-person-circle" style="font-size: 1.6rem"></i></a>
            </div>
          </header>
  
          <section
            class="container ps-md-5 d-flex flex-column align-items-center  align-items-md-start">
            <h1 class="py-5 " id="nomefoco"></h1>
  
            <div id="info"
              class="d-flex flex-column d-flex align-items-center align-items-md-start ps-md-5 w-100 "></div>
          </section>
  
        </section>
      </main>
    
      <footer-paia></footer-paia>
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
        
        
        
        `;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js";
    script.integrity =
      "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm";
    script.crossOrigin = "anonymous";
    this.appendChild(script);
  }
}

customElements.define("template-conta", contTemplate);

const entrada = document.querySelector("#info");
const paia = document.querySelector("#entrada");
entrada.appendChild(paia);

function foco(id) {
  const atual = document.getElementById(id);
  const titulo = document.getElementById("nomefoco");
  titulo.textContent = atual.textContent;
  atual.classList.add("active");
  // console.log(atual.textContent)
}

function locomover(btn, pagAtual, pagFutura) {
  btn.addEventListener("click", () => {
    pagAtual.classList.add("d-none");
    pagFutura.classList.remove("d-none");
  });
}

function locomoverForms(btns, btnconfirm, pagAtual, pagsFutura) {
  btns = [...document.querySelectorAll("#containerbutton button")];
  

  btns.map((elem) => {
    elem.addEventListener("click", (event) => {
      btns.map((elem1, indice) => {
        if (elem1 != event.currentTarget) {
          elem1.classList.remove("active");
          elem1
            .querySelector(".active-icon")
            .classList.remove("bi-check2-circle");
        } else {
          elem.classList.add("active");
          elem.querySelector(".active-icon").classList.add("bi-check2-circle");

          pagsFutura[indice] 
        }
      });
    });
  });

  btnconfirm.addEventListener("submit", () => {
    pagAtual.classList.add("d-none");
    pagEscolhida.classList.remove("d-none");
  });
}




function inicio(btn, pagincial, sub) {
  btn.addEventListener("click", () => {
    const pags = [...document.querySelectorAll(sub)];
    pags.map((elem) => {
      elem.classList.add("d-none");
    });
    console.log("A");
    pagincial.classList.remove("d-none");
  });
}

class contTemplate extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
    this.innerHTML = `
      
  

      
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />

    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark justify-content-center  " style="margin-bottom: -1px;">

            <div class="container" id="menu">
                <a href="../index.html" class="navbar-brand ">
                    <img src="../img/logo.png" alt="passtech" style="width: 140px;">
                </a>

                <div class="collapse navbar-collapse column-gap-4" id="aaaa">
                    <ul class="navbar-nav  column-gap-1 ms-auto">
                        <li class="nav-item">
                            <a href="../rotas.html" class="nav-link">Rotas e linhas</a>
                        </li>


                    </ul>

                    <ul class="navbar-nav align-items-center column-gap-1">
                        <li class="navbar-item ">
                            <a href="../login.html" class="nav-link" style="font-size: 1rem;">entrar</a>
                        </li>
                        <li class="navbar-item ">
                            <a href="../cadastro.html" class="btn btn-primary  btn" role="button"
                                aria-disabled="true">cadastrar</a>
                        </li>
                    </ul>
                </div>

                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#menumobi" aria-controls="aaaa" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>


        </nav>



        <div class="offcanvas offcanvas-end text-bg-dark" id="menumobi">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">PassTech</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
                <div class="nav-item d-inline-flex align-items-center  pb-3">
                    <i class="bi my-auto bi-person-circle" style="font-size: 3rem"></i>
                    <h4 class="ms-3">PAIOSO CABRAL</h4>
                </div>

                <h3 class="mt-3 mb-1">CONTA</h3>
                <ul class="navbar-nav justify-content-end flex-grow-1 ps-3">


                    <li class="nav-item">
                        <a href="MeuPerfil.html" class="nav-link fs-3">meu perfil</a>
                    </li>
                    <li class="nav-item">
                        <a href="MeusCartoes.html" class="nav-link fs-3" >meus cartões</a>
                    </li>
                    <li class="nav-item">
                        <a href="formadePag.html" class="nav-link fs-3" >formas de pagamento</a>
                    </li>


                </ul>

                <h2 class="mt-5 mb-1">SITE PRINCIPAL</h3>
                    <ul class="navbar-nav justify-content-end flex-grow-1 ps-3">


                        <li class="nav-item">
                            <a href="../index.html" class="nav-link texto-Menu-m fs-3">inicio</a>
                        </li>
                        <li class="nav-item">
                            <a href="../rotas.html" class="nav-link texto-Menu-m fs-3">Rotas e linhas</a>
                        </li>

                    </ul>
            </div>
        </div>
    </header>

    <main class="container p-0  d-flex align-items-start shadow">
        <nav class="navbar navbar-expand-md  nav  m-0 p-0 h-100      d-flex flex-column ">
            <div class=" collapse navbar-collapse  d-flex flex-column  justify-content-start align-items-center p-0 m-0 " 
                id="menuV">

                <ul class="navbar-nav  offcanvas  d-flex container-fluid flex-column align-items-start   p-0" id="navs">

                    <li class="nav-item">
                        <a href="MeuPerfil.html" class="nav-link " id="perfil">
                            <h4>MEU PERFIL</h4>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="MeusCartoes.html" class="nav-link " id="mycard">
                            <h4>MEUS CARTÕES</h4>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="formadePag.html" class="nav-link " id="formaspag">
                            <h4>FORMAS DE PAGAMENTO</h4>
                        </a>
                    </li>


                </ul>

            </div>

           
        </nav>

        <section
            class="container ps-md-5 d-flex flex-column align-items-center  align-items-md-start">
            <h2 class="py-5 " id="nomefoco"></h2>
  
            <div id="info"
              class="d-flex flex-column d-flex align-items-center align-items-md-start ps-md-5 w-100 "></div>
          </section>
    </main>

    <footer-paia></footer-paia>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
    <script src="../js/footer.js"></script>

        `;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js";
    script.integrity =
      "sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm";
    script.crossOrigin = "anonymous";
    this.appendChild(script);

    // const script1 = document.createElement("script");
    // script1.src = "../js/footer.js";
    // this.appendChild(script1);

    // const script2 = document.createElement("script");
    // script2.src = "../js/menu.js";
    // console.log(script2)
    // this.appendChild(script2);


  }
}

customElements.define("template-conta", contTemplate);

const entrada = document.querySelector("#info");
const paia = document.querySelector("#entrada");
entrada.appendChild(paia);

function foco(id) {
  const atual = document.getElementById(id);
  const titulo = document.getElementById("nomefoco");
  console.log(titulo)
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




function inicio(btn, pagincial, sub) {
  const btnextraido = document.querySelector(btn)
  const pagincialextraido = document.querySelector(pagincial)



  btnextraido.addEventListener("click", () => {
    const pags = [...document.querySelectorAll(sub)];
    pags.map((elem) => {
      elem.classList.add("d-none");

    });

    pagincialextraido.classList.remove("d-none");
  });
}

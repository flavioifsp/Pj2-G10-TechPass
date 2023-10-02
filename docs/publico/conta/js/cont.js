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
        <nav class="navbar p-0 py-2 navbar-expand-md navbar-dark bg-dark justify-content-center  ">

            <div class="container" id="menu">
                <a href="../index.html" class="navbar-brand ">
                    <img src="../img/logo.png" alt="passtech" class="img-fluid w-100">
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
                        <a href="MeusCartoes.html" class="nav-link fs-3">meus cartões</a>
                    </li>
                    <li class="nav-item">
                        <a href="formadePag.html" class="nav-link fs-3">formas de pagamento</a>
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

    <main class=" p-0  d-flex align-items-start justify-content-between container-fluid bg-body-secondary me-5  ms-0" id="mainpaia">
        <nav class="d-md-flex flex-column   d-none  flex-shrink-0 p-3 bg-light  shadow nav h-100" >

            <div class="nav-item d-inline-flex align-items-center justify-content-center">
                <i class="bi my-auto bi-person-circle" style="font-size: 2.6rem"></i>
                <h5 class="ms-3">PAIOSO CABRAL</h5>
            </div>


            <hr>
            <ul class="nav nav-pills  gap-1 flex-column mb-auto">
                <li class="nav-item">
                    <a href="MeuPerfil.html" class="nav-link text-dark"  id="perfil">
                        <i class="bi bi-person-circle"></i>
                        MEU PERFIL
                    </a>
                </li>
                <li class="nav-item">
                    <a href="MeusCartoes.html" class="nav-link text-dark" id="mycard">
                        <i class="bi bi-wallet2"></i>
                        MEUS CARTÕES
                    </a>
                </li>
                <li class="nav-item">
                    <a href="formadePag.html" class="nav-link text-dark pe-0" id="formaspag">
                        <i class="bi bi-credit-card-2-back"></i>
                        FORMAS DE PAGAMENTO
                    </a>
                </li>

            </ul>
        </nav>

        <section class=" d-flex pb-5  flex-column align-items-end mx-auto  col-sm-10 col-11 col-md-8  ">

            <div style="width: 90%;" class="mt-2 me-5">
                <h2 class="py-4 mb-0 mt-1 ms-3 " id="nomefoco"></h2>


                <div id="info" class=" rounded-4 px-3 py-4 bg-light  bg-light shadow  mx-md-2 mx-3 "></div> 
            </div>
        </section>
            </main>
            
            <footer-paia></footer-paia>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossorigin="anonymous"></script>
            <script src="../js/footer.js"></script>
            
            
            
            `
            
        }
    }
    
    customElements.define("template-conta", contTemplate);
    
    const entrada = document.querySelector("#info");
    const paia = document.querySelector("#entrada");
    const mainpaia = document.querySelector("#mainpaia");
    const section = document.querySelector("#sectionpaia")
    entrada.appendChild(paia);
    

function foco(id) {
  const atual = document.getElementById(id);
  const titulo = document.getElementById("nomefoco");
  
  titulo.textContent = atual.textContent;
  atual.classList.add("active");
  atual.setAttribute('aria-current', 'page')
  
  
  
  
  
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




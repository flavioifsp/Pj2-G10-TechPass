const menuT = document.createElement('template')

menuT.innerHTML = ` 

    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
    />

    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
    crossorigin="anonymous"
    />



    <nav class="navbar navbar-expand-md navbar-dark bg-dark justify-content-center  " style="margin-bottom: -1px;">

    <div class="container" id="menu">
        <a href="index.html" class="navbar-brand ">
            <img src="img/logo.png" alt="passtech" style="width: 140px;">
        </a>

        <div class="collapse navbar-collapse column-gap-4" id="aaaa">
            <ul class="navbar-nav  column-gap-1 ms-auto">
                <li class="nav-item">
                    <a href="rotas.html" class="nav-link">Rotas e linhas</a>
                </li>


            </ul>

            <ul class="navbar-nav align-items-center column-gap-1">
                <li class="navbar-item ">
                    <a href="login.html" class="nav-link" style="font-size: 1rem;">entrar</a>
                </li>
                <li class="navbar-item ">
                    <a href="cadastro.html" class="btn btn-primary  btn" role="button"
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
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">


            <li class="nav-item">
                <a href="conta/MeuPerfil.html" class="nav-link fs-3" id="perfil">meu perfil</a>
            </li>
            <li class="nav-item">
                <a href="conta/MeusCartoes.html" class="nav-link fs-3" id="mycard">meus cartões</a>
            </li>
            <li class="nav-item">
                <a href="conta/formadePag.html" class="nav-link fs-3" id="formaspag">formas de pagamento</a>
            </li>


        </ul>

        <h2 class="mt-5 mb-1">SITE PRINCIPAL</h3>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">


                <li class="nav-item">
                    <a href="index.html" class="nav-link texto-Menu-m fs-3">inicio</a>
                </li>
                <li class="nav-item">
                    <a href="rotas.html" class="nav-link texto-Menu-m fs-3">Rotas e linhas</a>
                </li>

            </ul>
    </div>
</div>
        
        
    
    `;

class header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        

        this.innerHTML = menuT.innerHTML

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';
        script.integrity = 'sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm';
        script.crossOrigin = 'anonymous';
        this.appendChild(script);

        
    }

}

customElements.define('header-paia', header)



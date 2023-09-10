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



    <nav class="navbar navbar-expand-md navbar-dark bg-dark justify-content-center " style="margin-bottom: -1px;">

    <div class="container" id="menu">
        <a href="index.html" class="navbar-brand ">
            <img src="img/logo.png" alt="passtech" style="width: 140px;">
        </a>

        <div class="collapse navbar-collapse column-gap-4" id="aaaa">
            <ul class="navbar-nav  column-gap-1 ms-auto">
                <li class="nav-item">
                    <a href="rotas.html" class="nav-link">Rotas e linhas</a>
                </li>
                <li class="nav-item">
                    <a href="./conta/MeusCartoes.html" class="nav-link">Sua Conta(temporario)</a>
                </li>
                <!-- <li class="nav-item">
                    <a href="#" class="nav-link">Sobre nós</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">contato</a>
                </li> -->
            </ul>

            <ul class="navbar-nav align-items-center column-gap-1">
                <li class="navbar-item ">
                    <a href="login.html" class="nav-link" style="font-size: 1rem;">entrar</a>
                </li>
                <li class="navbar-item ">
                    <a href="cadastro.html" class="btn btn-primary  btn" role="button" aria-disabled="true">cadastrar</a>
                </li>
            </ul>
        </div>

        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#menumobi"
            aria-controls="aaaa" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>


    </nav>



    <div class="offcanvas offcanvas-end text-bg-dark" id="menumobi">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">PassTech</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                <li class="nav-item">
                    <a href="#" class="nav-link texto-Menu-m">Rotas e linhas</a>
                </li>
                <!-- <li class="nav-item">
                    <a href="#" class="nav-link texto-Menu-m">Sobre nós</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link texto-Menu-m">contato</a>
                </li> -->

                <li class="nav-item">
                    <a href="./conta/MeusCartoes.html" class="nav-link">Sua Conta(temporario)</a>
                </li>

                <li class="navbar-item mt-5">
                    <a href="../login.html" class="nav-link texto-Menu-m">entrar</a>
                </li>
                <li class="navbar-item ">
                    <a href="../cadastro.html" class="nav-link texto-Menu-m" role="button" aria-disabled="true">cadastrar</a>
                </li>

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



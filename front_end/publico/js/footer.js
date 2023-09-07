const footerT = document.createElement('template')

footerT.innerHTML = `

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


  <!-- Footer -->
  <footer class="text-center text-lg-start text-white" style="background-color: #1c2331; ">
      <!-- Section: Social media -->
      <section class="d-flex justify-content-between p-1 align-items-center "
        style="background-color: #6351ce; height: 35px;">
        <!-- Left -->
        <div class="me-5">
          <span style="font-size: 14px;">Conecte-se conosco nas redes sociais:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="https://github.com/flavioifsp/Pj2-G10-Gerenciador_de_Catraca"  class="text-white me-4" >
            <i class="bi bi-github" style="font-size: 1.5em;"></i> 
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold">Tech Pass</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Produtos</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
              <p>
                <a href="#!" class="text-white">MDBootstrap</a>
              </p>
              <p>
                <a href="#!" class="text-white">MDWordPress</a>
              </p>
              <p>
                <a href="#!" class="text-white">BrandFlow</a>
              </p>
              <p>
                <a href="#!" class="text-white">Bootstrap Angular</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Redes sociais</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
              <p>
                <a href="#!" class="text-white">Facebook</a>
              </p>
              <p>
                <a href="#!" class="text-white">Instagram</a>
              </p>
              <p>
                <a href="#!" class="text-white">Twitter</a>
              </p>
              <p>
                <a href="#!" class="text-white">Linkedin</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">SAC</h6>
              <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px" />
              <p><i class="fas fa-envelope mr-3"></i> sac@techpass.com.br</p>
              <p><i class="fa-brands fa-whatsapp"></i> 11 4444-2813</p>
              <p> Endereço: Av. Bahia, 1739 - Indaiá, Caraguatatuba
                - SP,
                11665-071</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div class="text-center p-2 border-top border-light Copyright" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2023 Copyright:
        PASSTECH
      </div>
      <!-- Copyright -->
    </footer>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
`;

class footer extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        const shadowroot = this.attachShadow({mode: "open"})

        shadowroot.appendChild(footerT.content)
    }
}


customElements.define("footer-paia", footer)
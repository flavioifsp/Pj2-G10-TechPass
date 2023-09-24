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
        style="background-color: #6351ce; height: 26px;">
        <!-- Left -->
        <div class="ms-3">
          <span style="font-size: 13px;">Conecte-se conosco nas redes sociais:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="https://github.com/flavioifsp/Pj2-G10-Gerenciador_de_Catraca"  class="text-white me-4" >
            <i class="bi bi-github" style="font-size: 1.2em;"></i> 
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
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-3" style="font-size: 13px;">Tech Pass</h6>
              
              <p style="font-size: 13px;">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-3" style="font-size: 13px;">Produtos</h6>
              
              <p>
                <a href="#!" class="text-white" style="font-size: 13px; text-decoration: none">Cartões TechPass</a>
              </p>
              <p>
                <a href="#!" class="text-white" style="font-size: 13px; text-decoration: none">Rotas e Linhas</a>
              </p>
             
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-3" style="font-size: 13px">Redes sociais</h6>
              
              <p>
                <a href="#!" class="text-white" style="font-size: 13px; text-decoration: none">Instagram</a>
              </p>
              <p>
                <a href="#!" class="text-white" style="font-size: 13px; text-decoration: none">Twitter</a>
              </p>
              <p>
                <a href="#!" class="text-white" style="font-size: 13px; text-decoration: none">Linkedin</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-3 " style="font-size: 13px;">SAC</h6>
              
              <p><i class="fas fa-envelope mr-3"></i> sac@techpass.com.br</p>
              <p style="font-size: 13px;"><i class="fa-brands fa-whatsapp"></i> 11 4444-2813</p>
              <p style="font-size: 13px;"> Endereço: Av. Bahia, 1739 - Indaiá, Caraguatatuba
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
      <div class="text-center p-2 border-top border-light Copyright" style="background-color: rgba(0, 0, 0, 0.2); font-size: 13px">
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
        this.appendChild(footerT.content)

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';
        script.integrity = 'sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm';
        script.crossOrigin = 'anonymous';

        let scri = true
        for (let x of [...document.querySelectorAll("script")]) {
            if (x.src == "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js") {
                scri = false
                break
            }
        }
        if (scri) this.appendChild(script);
    }
}


customElements.define("footer-paia", footer)
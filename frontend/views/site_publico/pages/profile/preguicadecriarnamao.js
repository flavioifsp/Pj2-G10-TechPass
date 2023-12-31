const path = require('path')
const fs = require('fs')



//   "MeuPerfil"

const ejs = [
  ["MeuPerfil", `
  <!-- MEUS CARTÕES inicio-->
  <section class="subpag " id="inicio-meuscard">
    <div class="d-inline-flex column-gap-3 ps-2">
      <button class="btn btn-primary rounded-pill" id="recarregar-btn">RECARREGAR</button>
      <button class="btn btn-primary rounded-pill" id="btn-solicit">Solicitar cartão</button>
    </div>
  <!-- 
    <div class="d-flex gap-3 pt-5 ps-5 justify-content-center justify-content-md-start row">
      <a href="#" class="p-1 text-decoration-none pt-2 d-flex bg-dark-subtle align-items-center flex-column justify-content-center rounded-4" id="btn-solicit-card" style="width: 16rem; height: 10rem;">
        <i class="bi bi-plus-lg" style="font-size: 3rem;"></i>
        <p class="">SOLICITAR NOVO CARTÃO</p>
      </a>
    </div> -->
  </section>
  <!-- MEUS CARTÕES inicio -->
`],

  ["selecionarTipoPasse", `
    <!-- solicitar cartões -->
    <section class="subpag d-none align-items-center pe-0 align-items-sm-start d-flex flex-column container" id="solicitar">
      <h3 class="text-uppercase mb-4">selecione o tipo do passe</h3>
      <div class="row g-5 container align-items-center align-items-md-start" id="containerbutton">
        <div class="col-6 col-md-4 col-lg-4">
          <button class="pb-4 btn w-100 h-100 rounded-4 btn-secondary px-0 btnsSoli" id="btn-solicit-comum">
            <div class="d-inline-flex container-fluid justify-content-center passesSoli">
              <h6 class="mb-5 mt-1 ms-auto">COMUM</h6>
              <i class="bi p-0 ms-auto fs-4 active-icon"></i>
            </div>
            <img src="img/passe comum.png" class="img-fluid px-2" alt="">
          </button>
        </div>
        <div class="col-6 col-md-4 col-lg-4">
          <button class="pb-4 btn w-100 h-100 rounded-4 btn-secondary px-0 btnsSoli" id="btn-solicit-estudante">
            <div class="d-inline-flex container-fluid justify-content-center passesSoli">
              <h6 class="mb-5 mt-1 ms-auto">ESTUDANTE</h6>
              <i class="bi p-0 ms-auto fs-4 active-icon"></i>
            </div>
            <img src="img/passe estudante.png" class="img-fluid px-2" alt="">
          </button>
        </div>
        <div class="col-6 col-md-4 col-lg-4">
          <button class="pb-4 btn w-100 h-100 rounded-4 btn-secondary px-0 btnsSoli" id="btn-solicit-especial">
            <div class="d-inline-flex container-fluid justify-content-center passesSoli">
              <h6 class="mb-5 mt-1 ms-auto">ESPECIAL</h6>
              <i class="bi p-0 ms-auto fs-4 active-icon"></i>
            </div>
            <img src="img/passe especial.png" class="img-fluid px-2" alt="">
          </button>
        </div>
      </div>
      <form action="" class="row g-3 mt-3" id="forms-endereco">
        <h3 class="text-uppercase mb-3 mt-5">endereco da entrega</h3>
        <div class="col-12 d-inline-flex justify-content-between">
          <input type="text" class="form-control w-50" placeholder="CEP">
          <a href="#" class="my-auto ms-2 w-50 text-decoration-none">Nao lembro o CEP</a>
        </div>
        <div class="col-12">
          <input type="text" class="form-control" placeholder="endereco">
        </div>
        <div class="col-sm-2 col-4">
          <input type="text" class="form-control" placeholder="N°">
        </div>
        <div class="col-sm-4 col-8">
          <input type="text" class="form-control" placeholder="COMPLEMENTO">
        </div>
        <div class="col-sm-6 col-12">
          <input type="text" class="form-control" placeholder="BAIRRO">
        </div>
        <div class="col-sm-9 col-8">
          <input type="text" class="form-control" placeholder="CIDADE">
        </div>
        <div class="col-sm-3 col-4">
          <select class="form-select" aria-label="Default select example">
            <option selected>ESTADO</option>
            <option value="1">SP</option>
            <option value="2">RJ</option>
            <option value="3">PAIA</option>
          </select>
        </div>
        <div class="mt-5">
          <button type="submit" class="btn btn-primary me-2" id="avancar-solibtn" style="width: fit-content;">avançar</button>
          <button type="button" class="btn btn-secondary" id="btnCancel-soli" style="width: fit-content;">voltar</button>
        </div>
      </form>
    </section>
`],

  ["solicitarPasseComum", `
<!-- solicitação passe comum -->
<section class="subpag d-none" id="soli-comum">
  <h3 class="mb-5">FORMULARIO PARA PASSE COMUM</h3>
  <form class="row g-3 ms-3" id="forms-soli-comum">
    <div class="col-8">
      <label class="form-label" for="cpf">CPF</label>
      <input name="cpf" type="number" class="form-control" placeholder="">
    </div>
    <div class="col-8">
      <label class="form-label" for "rg">RG</label>
      <input name="rg" type="number" class="form-control" placeholder="">
    </div>
    <div class="mt-5">
      <button type="submit" class="btn btn-primary me-2" id="solicitar" style="width: fit-content;">solicitar</button>
      <button type="button" class="btn btn-secondary" id="btnCancel-solicomum" style="width: fit-content;">voltar</button>
    </div>
  </form>
</section>
`]
  ,
  ["solicitarPasseEstudante", `
<!-- solicitação passe estudante -->
<section class="subpag d-none" id="soli-estudante">
  <h3 class="mb-5">FORMULARIO PARA PASSE DE ESTUDANTE</h3>
  <form class="row g-3 ms-3" id="forms-soli-comum">
    <div class="col-8">
      <label class="form-label" for="cpf">CPF</label>
      <input name="cpf" type="number" class="form-control" placeholder="">
    </div>
    <div class="col-8">
      <label class="form-label" for="rg">RG</label>
      <input name="rg" type="number" class="form-control" placeholder="">
    </div>
    <div class="mt-5">
      <button type="submit" class="btn btn-primary me-2" id="solicitar" style="width: fit-content;">solicitar</button>
      <button type"button" class="btn btn-secondary" id="btnCancel-soliestudante" style="width: fit-content;">voltar</button>
    </div>
  </form>
</section>
`]
  ,
  ["solicitarPasseEspecial", `
<!-- solicitação passe especial -->
<section class="subpag d-none" id="soli-especial">
  <h3 class="mb-5">FORMULARIO PARA PASSE ESPECIAL</h3>
  <form class="row g-3 ms-3" id="forms-soli-comum">
    <div class="col-8">
      <label class="form-label" for="cpf">CPF</label>
      <input name="cpf" type="number" class="form-control" placeholder="">
    </div>
    <div class="col-8">
      <label class="form-label" for="rg">RG</label>
      <input name="rg" type="number" class="form-control" placeholder="">
    </div>
    <div class="mt-5">
      <button type="submit" class="btn btn-primary me-2" id="solicitar" style="width: fit-content;">solicitar</button>
      <button type"button" class="btn btn-secondary" id="btnCancel-soliespecial" style="width: fit-content;">voltar</button>
    </div>
  </form>
</section>
`]
  ,
  ["recarregarPasse", `
<!-- recarregar -->
<section class="subpag d-none" id="recarregar">
  <form action="" class="row g-5 ms-2">
    <legend class="ps-0 h2">RECARGA</legend>
    <fieldset class="mxauto" style="width: fit-content;">
      <legend class="h4 mb-3">ESCOLHA O CARTÃO</legend>
      <div class="ms-2">
        <button type="button" class="btn pt-0 align-items-center pb-4 btn-secondary d-flex flex-column"
          style="width: 110px;">
          <h6 class="text-uppercase pt-2 pb-3">adicionar</h6>
          <img src="img/passe comum.png" class="img-fluid mt-auto" alt="">
        </button>
      </div>
    </fieldset>
    <fieldset class="">
      <legend class="h4 col-12 mb-3">MÉTODO DE PAGAMENTO</legend>
      <div class="d-inline-flex gap-3 ms-2">
        <button type="button" class="btn btn-primary py-2" style="width: 110px;">
          <h5>PIX</h5>
          <img src="img/icons8-pix-48.png" alt="">
        </button>
        <button type="button" class="btn btn-secondary d-flex flex-column align-items-center"
          style="width: 110px;">
          <h6 class="text-uppercase pt-2">adicionar</h6>
          <i class="bi bi-credit-card-fill h1"></i>
        </button>
      </div>
    </fieldset>
    <div class="col-6">
      <label class="form-label h6" for="valor">
        <h4>VALOR DA RECARGA</h4>
      </label>
      <input type="number" name="valor" id="" class="form-control" placeholder="R$: 00,00">
    </div>
    <div class="mt-5">
      <button type="submit" class="btn btn-primary me-2" id="solicitar" style="width: fit-content;">RECARREGAR</button>
      <button type="button" class="btn btn-secondary" id="btnCancel-recarga" style="width: fit-content;">cancelar</button>
    </div>
  </form>
</section>
`]


]




const index = "mycard"



let chamar = "\n<%const alternar = (pag) => {%>\n<%-include(`partialsUser/"+index+"/_${pag}.ejs`)%>\n<%}%>\n"



ejs.map((elem, ind) => {
 console.log(elem)
  let caminho = path.join(__dirname, "/partialsUser")
  fs.access(caminho, fs.constants.F_OK, async (err1) => {
    if (err1 != null) {
      await fs.mkdir(caminho, () => { console.log("a") })
    }


    caminho = path.join(caminho, `/${index}`)
    fs.access(caminho, fs.constants.F_OK, (err) => {
      if (err != null) {
        fs.mkdir(caminho, () => { console.log("a") })
      }

      const novoarquivo = path.join(caminho, "_" + elem[0] + ".ejs")

      fs.writeFile(novoarquivo, elem[1], () => { })



      chamar += `<%- alternar('${elem[0]}') %>\n`.replace(/\\/g, '/')


      if (ejs.length == ind + 1) {
        fs.appendFile(path.join(__dirname, `/${index}`) + ".ejs", chamar, () => { })
      }
    });
  })

})
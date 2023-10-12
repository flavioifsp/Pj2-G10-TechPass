const path = require('path')
const fs = require('fs')


console.log(path.dirname(__filename))

//   "MeuPerfil"

const ejs = [

["Solicitar", `
    <!-- solicitar cartões -->
    <section class="subpag d-none align-items-center pe-0 align-items-sm-start d-flex flex-column container" id="solicitar">
        <h3 class="text-uppercase mb-4">selecione o tipo do passe</h3>
        <!-- (resto do código) -->
    </section>
`],
["SoliComum", `
    <!-- solicitação passe comum -->
    <section class="subpag d-none" id="soli-comum">
        <!-- (resto do código) -->
    </section>
`],
["SoliEstudante", `
    <!-- solicitação passe estudante -->
    <section class="subpag d-none" id="soli-estudante">
        <!-- (resto do código) -->
    </section>
`],
["SoliEspecial", `
    <!-- solicitação passe especial -->
    <section class="subpag d-none" id="soli-especial">
        <!-- (resto do código) -->
    </section>
`],
["Recarregar", `
    <!-- recarregar -->
    <section class="subpag d-none" id="recarregar">
        <!-- (resto do código) -->
    </section>
`]
]


ejs.map((elem) => {
    fs.writeFile(path.join(__dirname,"/MeuPerfil", elem[0]), elem[1])
})
const prisma = new (require("@prisma/client").PrismaClient)();
const bcry = require("bcryptjs");


 
const cpf = '123.456.789-01';
const email = 'gerente@techpass.com';
const nascimento = '1990-01-01';
const nome = 'Gerente';
const senha = 'senha123';
const cargo = 'Gerente';
const telefone = '123456789';


(async () => {
  try {
    const response = await prisma.superuser.create({
      data: {
        cpf: cpf,
        email: email,
        nascimento: new Date(nascimento),
        nome: nome,
        senha: await bcry.hash(senha, 10),
        adm: {
          create: {
            cargo: cargo,
            telefone: telefone,
          },
        },
      },
    });

    console.log("email: "+response.email);
    console.log("senha: "+senha);
} catch (error) {
      console.log(error);
  }
})();

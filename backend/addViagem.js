const prisma = new (require("@prisma/client").PrismaClient)();

const onibus_id = 1;
const motorista_SU_id = 81;
const linhas_id = 2;

const paia = (async () => {
try {
const response = await prisma.viagem.create({
data: {
onibus_id,
motorista_SU_id,
linhas_id,
},
include: {
linhas: true,
motorista: {
select: {
superuser: {
select: {
nome: true,
},
},
},
},
},
});

console.log("linha: " + response.linhas.numero_linha);
console.log("motorista: " + response.motorista.superuser.nome);
} catch (error) {
console.log(error);
}
})();
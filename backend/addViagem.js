const prisma = new (require("@prisma/client").PrismaClient)();

const mockPassageiros = [
  
    {
      placa: "ABC-1234",
      estado_atual: "Em operação",
      possui_acessibilidade: "sim",
      quantidade_passageiros: 30,
    },
    {
      placa: "DEF-5678",
      estado_atual: "Em manutenção",
      possui_acessibilidade: "nao",
      quantidade_passageiros: 0,
    },
    {
      placa: "GHI-9012",
      estado_atual: "Em operação",
      possui_acessibilidade: "sim",
      quantidade_passageiros: 20,
    },
    {
      placa: "JKL-3456",
      estado_atual: "Em operação",
      possui_acessibilidade: "sim",
      quantidade_passageiros: 10,
    },
    {
      placa: "MNO-7890",
      estado_atual: "Em manutenção",
      possui_acessibilidade: "sim",
      quantidade_passageiros: 0,
    },
    {
      placa: "PQR-4567",
      estado_atual: "Em operação",
      possui_acessibilidade: "nao",
      quantidade_passageiros: 25,
    },
    {
      placa: "STU-9012",
      estado_atual: "Em operação",
      possui_acessibilidade: "sim",
      quantidade_passageiros: 40,
    },
    {
      placa: "VWX-3456",
      estado_atual: "Em operação",
      possui_acessibilidade: "nao",
      quantidade_passageiros: 15,
    },
    {
      placa: "YZ1-7890",
      estado_atual: "Em manutenção",
      possui_acessibilidade: "sim",
      quantidade_passageiros: 0,
    },
  
];

mockPassageiros.forEach(async (elem) => {
  const response = await prisma.onibus.create({
    data: elem,
  });
});
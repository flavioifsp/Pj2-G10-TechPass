
const { Prisma } = require("@prisma/client")
function exception(e) {
    let error = {
      code: 500,
      msg: e
    }
    if (e instanceof Prisma.PrismaClientKnownRequestError || e instanceof Prisma.PrismaClientValidationError) {
      // Lógica para lidar com erros específicos do Prisma
      error.code = 400

      error.msg = ('Erro conhecido do Prisma: \n'+ e.message);

    } else if (e instanceof Prisma.PrismaClientInitializationError) {
      // Lógica para lidar com erros de inicialização do Prisma
      error.code = 400
    
      error.msg = ('Erro de inicialização do Prisma: \n'+ e.message);
    } 
      
    return error
  } 

  module.exports =  exception
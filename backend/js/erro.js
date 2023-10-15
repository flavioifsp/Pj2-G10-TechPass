const { Prisma } = require("@prisma/client")

function exception(e) {
    let error = {
      code: 500,
      msg: 'erro interno do servidor'
    }
  
    if (e instanceof Prisma.PrismaClientKnownRequestError || e instanceof Prisma.PrismaClientValidationError) {
      error.code = 400
      error.msg = e.message
    }
  
    return error
  }

  module.exports =  exception
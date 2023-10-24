const jwt = require("jsonwebtoken")



function gerarJWT(id, seg){
    return jwt.sign({id}, process.env.SECRET_KEY, {expiresIn: seg})
}


function autenticar(req, res, next){
    const token = req.headers('authorization')

    if(!token){
        return res.status(403).send( "token nâo fornecido")
    }



    jwt.verify(token, process.env.SECRET_KEY, (er, decoded) => {
        if(er) return res.status(401).sen("falha na autenticacâo do token")



        req.userId = decoded.id 
    })

    next()
}


module.exports = {gerarJWT, autenticar};

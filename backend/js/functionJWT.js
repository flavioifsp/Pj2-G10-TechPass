const jwt = require("jsonwebtoken")



function gerarJWT(id){
    return jwt.sign({id}, process.env.SECRET_KEY, {expiresIn: 600})
}


function autenticar(req, res, next){
    const token = req.headers('x-acess-token')

    jwt.verify(token, process.env.SECRET_KEY, (er, decoded) => {
        if(er) return res.status(401).end()

        render.body.id = decoded.id
    })

    next()
}



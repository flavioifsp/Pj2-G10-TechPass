const jwt = require("jsonwebtoken");

function gerarJWT(id, miliSeg = 15000) {
  res
    .status(201)
    .cookie(
      "token",
      jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: seg }),
      {
        httpOnly: true,
        maxAge: seg,
      }
    );
}

function autenticar(req, res, next) {    
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(403).send("token nâo fornecido");
  }

  jwt.verify(token, process.env.SECRET_KEY, (er, decoded) => {
    if (er) return res.status(401).sen("falha na autenticacâo do token");


    req.userId = decoded.id;

     next();
  });

}

module.exports = { gerarJWT, autenticar };

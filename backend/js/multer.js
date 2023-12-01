const multer = require("multer");
const path = require("path");
// const fs = require("fs");

module.exports = (nomeDoCampo) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(`./public/foto_${nomeDoCampo}/`));
    },
    filename: (req, file, cb) => {
      const extensao = file.originalname.split(".").pop();

      cb(null, `${req.body.nome}_${Date.now()}.${extensao}`);
    },
  });

  return (req, res, next) => {
    // console.log(req.body);
    // if (req.body.foto) {
    multer({ storage }).single("foto")(req, res, (er) => {
      if (er) {
        console.log(er);
        return res.status(400).json({ er });
      }

      if (req.file) {
        req.body.foto = `foto_${nomeDoCampo}/${req.file.filename}`;
      }

      // res.status(400).end()
      next();
    });
    // } else{
    //   next()
    // }
  };
};

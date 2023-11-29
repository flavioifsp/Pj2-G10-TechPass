
const multer = require('multer')
const path = require("path");
// const fs = require("fs");

module.exports = (nomeDoCampo) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(`../public/foto_${nomeDoCampo}`));
    },
    filename: (req, file, cb) => {
      const extensao = file.filename.split(".").pop();

      cb(null, `${req.body.nome}_${Date.now()}.${extensao}`);
    },
  });

  return (req, res, next) => {
    multer({ dest: storage }).single("foto");

    req.body.foto = req.file.path 
  };
};
    
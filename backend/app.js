const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const logger = require("morgan");
const dotenv = require("dotenv").config();

const linhas = require("./routes/linhas");
const ponto = require("./routes/pontodeonibus");
const catraca = require("./routes/catraca");
const users = require("./routes/users");
const atendentes = require("./routes/atendentes");
const motorista = require("./routes/motorista");
const adm = require("./routes/adm");
const multer = require("multer");

const app = express();

// var whitelist = ['http://127.0.0.1:3000', 'http://localhost:3000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   credentials: true
// }

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(multer().array())


app.use("/api/linhas", linhas);
app.use("/api/linhas", ponto);
app.use("/api/catraca", catraca);
app.use("/api/user", users);
app.use("/api/userADM", atendentes);
app.use("/api/userADM", motorista);
app.use("/api/adm", adm);

app.all("*", (req, res) => {
  res.status(501).end();
});

module.exports = app;

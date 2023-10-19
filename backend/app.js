const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const dotenv = require('dotenv').config();

const linhas = require("./routes/linhas");
const catraca = require("./routes/catraca");
const maps = require("./routes/mapa");

const app = express();



app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/linhas", linhas);
app.use("/api/catraca/", catraca);
app.use("/api/maps/", maps);

app.all("*", (req, res) => {
  res.status(501).end();
});

module.exports = app;

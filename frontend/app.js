const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv").config();
const cors = require("cors");


const sitepublicoRouter = require("./routes/sitepublico");
const profileRouter = require("./routes/profile");
const catraca = require("./routes/catraca");
const adm = require("./routes/adm");

const app = express();

// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(expressLayouts);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", sitepublicoRouter);
app.use("/profile", profileRouter);
app.use("/catraca", catraca);
app.use("/adm", adm);

// lembrar de fazer um meio para aparecer uma msg de erro quando é redirecionado
// app.all("*", (req, res) => {
//   res.redirect("/");
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};


  // render the error page
  res.status(err.status || 500);
  res.render("error", {layout: false});
});

module.exports = app;

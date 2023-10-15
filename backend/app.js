
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv').config();
const cors = require('cors')


const linhas = require('./routes/linhas');
const catraca = require('./routes/catraca');

const app = express();


app.use(cors({ origin: process.env.svFront }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/linhas', linhas);
app.use('/api/catraca/', catraca);

app.all('*', (req, res) => {
    res.status(501).end()
})

module.exports = app;

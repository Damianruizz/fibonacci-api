'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fibonacciRoutes = require('./src/routes/fibonacciRoutes');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', fibonacciRoutes);

module.exports = app;
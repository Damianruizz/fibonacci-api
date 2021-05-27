'use strict';

const express = require('express');
const FibonacciController = require('../controllers/FibonacciController');
const FibonacciMd = require('../middlewares/FibonacciMd');

const router = express.Router();

router.route('/fibonacci/:index')
  .get(FibonacciMd.validateParams, FibonacciController.getFibonacci);

module.exports = router;
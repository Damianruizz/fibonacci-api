'use strict';

/**
* @desc get the fibonacci number
* @params {Number}
*/
const fibonacciIndex = index => {
  let fib = [0, 1];
  for (let i = 2; i <= index; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[index];
}

/**
* @desc GET for return the fibonacci number
* @params {Object} {Object}
*/
exports.getFibonacci = (req, response) => {
  response.status(200).json({
    success: true,
    fibonacci: fibonacciIndex(req.params.index)
  });
}

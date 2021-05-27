'use strict';

/**
* @desc validate the parameters to receive to return the fibonacci position
* @params {Object} {Object} {Function}
* @return {Function}
*/
exports.validateParams = (req, res, next) => {
  if (!req.params.index) {
    const error = new Error('Missing index');
    error.httpStatusCode = 400;
    return next(error);
  }
  next();
}
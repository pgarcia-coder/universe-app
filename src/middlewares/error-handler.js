const createError = require('http-errors');
const logger = require('../commons/logger/logger');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  logger.error(err);
  if (createError.isHttpError(err)) {
    res.status(err.statusCode).send({ code: err.statusCode, name: err.name, message: err.message });
  } else {
    res
      .status(500)
      .send({ code: 500, name: 'InternalServerError', message: 'Internal server error' });
  }
};

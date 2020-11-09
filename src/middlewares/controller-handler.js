const createError = require('http-errors');
const validator = require('../commons/params-validator');
const logger = require('../commons/logger/logger');

module.exports = ({ controller, schema, successCode = 200 }) => async (req, res, next) => {
  const params = { ...req.params, body: req.body, headers: req.headers };
  logger.debug(`Params: ${JSON.stringify(params)}`);

  if (schema) {
    const errors = validator(schema, params);

    if (errors.length) {
      return next(new createError.BadRequest(errors));
    }
  }

  try {
    const response = await controller(params);

    if (response === undefined || response === null) {
      throw new createError.NotFound();
    } else {
      res.status(successCode).send(response);
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

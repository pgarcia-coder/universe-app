const morgan = require('morgan');
const config = require('../../config');

module.exports = morgan(
  `[${config.log.level}] :date[iso] - :method :url :status :response-time ms`,
);

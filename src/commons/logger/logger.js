const { createLogger, transports, format } = require('winston');
const config = require('../../config');

module.exports = createLogger({
  transports: [new transports.Console({ level: config.log.level })],
  format: format.combine(
    format.timestamp(),
    format.printf((info) => `[${info.level}] ${info.timestamp} - ${info.message}`),
  ),
});

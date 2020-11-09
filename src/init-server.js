const express = require('express');
const httpLogger = require('./commons/logger/http-logger');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const { test } = require('./commons/db/connect');
const pool = require('./commons/db/pool');

module.exports = async () => {
  const server = express();
  server.use(httpLogger);

  await test(pool);
  routes(server);

  server.use(errorHandler);
  return server;
};

const init = require('./init-server');
const { port, host } = require('./config');
const logger = require('./commons/logger/logger');

const runServer = async () => {
  const server = await init();
  server.listen(port, () => {
    logger.info(`App listening at ${host}:${port}`);
  });
};

runServer().catch((error) => {
  logger.error(error.message);
  process.exit(-1);
});

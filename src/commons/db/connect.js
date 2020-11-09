const createError = require('http-errors');
const logger = require('../logger/logger');
const queryBuilder = require('./query-builder');

const test = async (pool) => {
  const client = await pool.connect();
  try {
    const query = queryBuilder.raw('SELECT 1+1 AS result').toQuery;
    await client.query(query);
    logger.info('Database connected successfully');
  } finally {
    client.release();
  }
};

const connect = (pool) => async (query) => {
  const client = await pool.connect();
  let result;

  try {
    logger.debug(`Query: ${query}`);
    result = await client.query(query);
  } catch (error) {
    logger.error(`Error querying db: ${error}`);
    throw new createError.InternalServerError();
  } finally {
    client.release();
  }

  if (!result.rowCount) {
    throw new createError.NotFound();
  }

  return result;
};

module.exports = { connect, test };

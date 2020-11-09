const queryBuilder = require('../commons/db/query-builder');

module.exports = (connect) => async () => {
  const query = queryBuilder.select().from('universe.planets').toQuery();

  const result = await connect(query);
  return result.rows;
};

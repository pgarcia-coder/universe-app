const queryBuilder = require('../commons/db/query-builder');

module.exports = (connect) => async (params) => {
  const query = queryBuilder
    .select()
    .from('universe.planets')
    .where('planets.id', params.id)
    .toQuery();

  const result = await connect(query);
  return result.rows[0];
};

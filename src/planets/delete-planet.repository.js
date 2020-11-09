const queryBuilder = require('../commons/db/query-builder');

module.exports = (connect) => async (params) => {
  const query = queryBuilder('universe.planets')
    .delete()
    .where('planets.id', params.id)
    .returning('*')
    .toQuery();

  const result = await connect(query);
  return result.rows[0];
};

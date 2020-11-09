const queryBuilder = require('../commons/db/query-builder');

module.exports = (connect) => async (params) => {
  const query = queryBuilder.insert(params.body).into('universe.planets').returning('*').toQuery();

  const result = await connect(query);
  return result.rows[0];
};

const pool = require('./commons/db/pool');
const { connect } = require('./commons/db/connect');
const getPlanet = require('./planets/get-planet.repository');
const listPlanets = require('./planets/list-planets.repository');
const createPlanet = require('./planets/create-planet.repository');
const modifyPlanet = require('./planets/modify-planet.repository');
const deletePlanet = require('./planets/delete-planet.repository');

const connection = connect(pool);

module.exports = {
  getPlanet: getPlanet(connection),
  listPlanets: listPlanets(connection),
  createPlanet: createPlanet(connection),
  modifyPlanet: modifyPlanet(connection),
  deletePlanet: deletePlanet(connection),
};

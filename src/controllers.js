const repository = require('./repositories');
const health = require('./health/health.controller');
const getPlanet = require('./planets/get-planet.controller');
const listPlanets = require('./planets/list-planets.controller');
const createPlanet = require('./planets/create-planet.controller');
const modifyPlanet = require('./planets/modify-planet.controller');
const deletePlanet = require('./planets/delete-planet.controller');

module.exports = {
  health,
  getPlanet: getPlanet(repository),
  listPlanets: listPlanets(repository),
  createPlanet: createPlanet(repository),
  modifyPlanet: modifyPlanet(repository),
  deletePlanet: deletePlanet(repository),
};

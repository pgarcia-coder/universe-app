/* eslint-disable prettier/prettier */
const bodyParser = require('body-parser');
const controllerHandler = require('./middlewares/controller-handler');
const controller = require('./controllers');
const getPlanetSchema = require('./schemas/planets/get-planet.json');
const createPlanetSchema = require('./schemas/planets/create-planet.json');
const modifyPlanetSchema = require('./schemas/planets/modify-planet.json');
const deletePlanetSchema = require('./schemas/planets/delete-planet.json');

module.exports = (server) => {
  // health
  server.get('/health', controllerHandler({ controller: controller.health }));

  // planets
  server.get('/planets/:id', controllerHandler({ controller: controller.getPlanet, schema: getPlanetSchema }));
  server.get('/planets', controllerHandler({ controller: controller.listPlanets }));
  server.post('/planets', bodyParser.json(), controllerHandler({ controller: controller.createPlanet, schema: createPlanetSchema, successCode: 201 }));
  server.put('/planets/:id', bodyParser.json(), controllerHandler({ controller: controller.modifyPlanet, schema: modifyPlanetSchema }));
  server.delete('/planets/:id', controllerHandler({ controller: controller.deletePlanet, schema: deletePlanetSchema }));
};

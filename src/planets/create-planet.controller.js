module.exports = (repository) => async (params) => {
  return repository.createPlanet(params);
};

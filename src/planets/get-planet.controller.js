module.exports = (repository) => async (params) => {
  return repository.getPlanet(params);
};

const { expect } = require('chai');
const sinon = require('sinon');
const listPlanets = require('../../src/planets/list-planets.controller');

describe('Test getPlanet controller', () => {
  const listPlanetsStub = sinon.stub();
  const repository = {
    listPlanets: listPlanetsStub,
  };

  const planets = [
    {
      id: '319e2c85-c878-4328-91e0-e25046784f27',
      name: 'Mercurio',
      description: 'Trazas de hidrógeno y helio',
      region: 'INNER',
      diameter: 0.39,
      mass: 0.06,
      orbital_radius: 0.39,
      orbital_period: 0.24,
      spin_period: 58.6667,
      tilt: 7,
    },
  ];

  it('should return planets', async () => {
    listPlanetsStub.returns(planets);

    const result = await listPlanets(repository)();

    expect(listPlanetsStub.calledOnce).to.be.equal(true);
    expect(listPlanetsStub.firstCall.args[0]).to.be.equal(undefined);
    expect(result).to.be.equal(planets);
  });
});

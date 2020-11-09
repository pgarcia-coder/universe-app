const { expect } = require('chai');
const sinon = require('sinon');
const createPlanet = require('../../src/planets/create-planet.controller');

describe('Test createPlanet controller', () => {
  const createPlanetStub = sinon.stub();
  const repository = {
    createPlanet: createPlanetStub,
  };

  const planet = {
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
  };

  const params = {
    body: {
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
  };

  it('should return created Planet', async () => {
    createPlanetStub.returns(planet);

    const result = await createPlanet(repository)(params);

    expect(createPlanetStub.calledOnce).to.be.equal(true);
    expect(createPlanetStub.firstCall.args[0]).to.be.equal(params);
    expect(result).to.be.equal(planet);
  });
});

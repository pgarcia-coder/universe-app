const { expect } = require('chai');
const sinon = require('sinon');
const getPlanet = require('../../src/planets/get-planet.controller');

describe('Test getPlanet controller', () => {
  const getPlanetStub = sinon.stub();
  const repository = {
    getPlanet: getPlanetStub,
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
    id: '319e2c85-c878-4328-91e0-e25046784f27',
  };

  it('should return Planet', async () => {
    getPlanetStub.returns(planet);

    const result = await getPlanet(repository)(params);

    expect(getPlanetStub.calledOnce).to.be.equal(true);
    expect(getPlanetStub.firstCall.args[0]).to.be.equal(params);
    expect(result).to.be.equal(planet);
  });
});

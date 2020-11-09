const { expect } = require('chai');
const sinon = require('sinon');
const modifyPlanet = require('../../src/planets/modify-planet.controller');

describe('Test modifyPlanet controller', () => {
  const modifyPlanetStub = sinon.stub();
  const repository = {
    modifyPlanet: modifyPlanetStub,
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

  it('should return modified Planet', async () => {
    modifyPlanetStub.returns(planet);

    const result = await modifyPlanet(repository)(params);

    expect(modifyPlanetStub.calledOnce).to.be.equal(true);
    expect(modifyPlanetStub.firstCall.args[0]).to.be.equal(params);
    expect(result).to.be.equal(planet);
  });
});

const { expect } = require('chai');
const sinon = require('sinon');
const createPlanet = require('../../src/planets/create-planet.repository');

describe('Test createPlanet repository', () => {
  const connectStub = sinon.stub();

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

  const query =
    'insert into "universe"."planets" ("description", "diameter", "mass", "name", "orbital_period", "orbital_radius", "region", "spin_period", "tilt") values (\'Trazas de hidrógeno y helio\', 0.39, 0.06, \'Mercurio\', 0.24, 0.39, \'INNER\', 58.6667, 7) returning *';

  it('should return created Planet', async () => {
    connectStub.returns({
      rows: [planet],
    });

    const result = await createPlanet(connectStub)(params);

    expect(connectStub.calledOnce).to.be.equal(true);
    expect(connectStub.firstCall.args[0]).to.be.equal(query);
    expect(result).to.be.equal(planet);
  });
});

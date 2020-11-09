const { expect } = require('chai');
const sinon = require('sinon');
const modifyPlanet = require('../../src/planets/modify-planet.repository');

describe('Test modifyPlanet repository', () => {
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
    id: '319e2c85-c878-4328-91e0-e25046784f27',
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
    'update "universe"."planets" set "name" = \'Mercurio\', "description" = \'Trazas de hidrógeno y helio\', "region" = \'INNER\', "diameter" = 0.39, "mass" = 0.06, "orbital_radius" = 0.39, "orbital_period" = 0.24, "spin_period" = 58.6667, "tilt" = 7 where "planets"."id" = \'319e2c85-c878-4328-91e0-e25046784f27\' returning *';

  it('should return modified Planet', async () => {
    connectStub.returns({
      rows: [planet],
    });

    const result = await modifyPlanet(connectStub)(params);

    expect(connectStub.calledOnce).to.be.equal(true);
    expect(connectStub.firstCall.args[0]).to.be.equal(query);
    expect(result).to.be.equal(planet);
  });
});

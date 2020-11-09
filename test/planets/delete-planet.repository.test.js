const { expect } = require('chai');
const sinon = require('sinon');
const deletePlanet = require('../../src/planets/delete-planet.repository');

describe('Test deletePlanet repository', () => {
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
  };

  const query =
    'delete from "universe"."planets" where "planets"."id" = \'319e2c85-c878-4328-91e0-e25046784f27\' returning *';

  it('should return deleted Planet', async () => {
    connectStub.returns({
      rows: [planet],
    });

    const result = await deletePlanet(connectStub)(params);

    expect(connectStub.calledOnce).to.be.equal(true);
    expect(connectStub.firstCall.args[0]).to.be.equal(query);
    expect(result).to.be.equal(planet);
  });
});

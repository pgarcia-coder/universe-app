const { expect } = require('chai');
const sinon = require('sinon');
const listPlanets = require('../../src/planets/list-planets.repository');

describe('Test listPlanets repository', () => {
  const connectStub = sinon.stub();

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

  const query = 'select * from "universe"."planets"';

  it('should return planets', async () => {
    connectStub.returns({
      rows: planets,
    });

    const result = await listPlanets(connectStub)();

    expect(connectStub.calledOnce).to.be.equal(true);
    expect(connectStub.firstCall.args[0]).to.be.equal(query);
    expect(result).to.be.equal(planets);
  });
});

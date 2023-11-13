import { randomFloat } from '~/lib/ramdomFloat';

describe('Ramdon float', () => {
  it('Should generate random floats', () => {
    const interactions = 50;

    const numbers: number[] = [];
    for (let i = 0; i < interactions; i++) {
      numbers.push(randomFloat(0, 50));
    }
    const set = new Set(numbers);
    const onlyFloats = [...set].filter((n) => {
      return n % Math.floor(n) > 0;
    });

    expect(set.size).toBeGreaterThanOrEqual(interactions / 2);
    expect(onlyFloats.length).toBeGreaterThan(interactions / 3);
  });

  it('Should generate radom float with 2 decimals only', () => {
    const interactions = 50;
    const decimals = 2;

    const numbers: number[] = [];
    for (let i = 0; i < interactions; i++) {
      numbers.push(randomFloat(0, 50, decimals));
    }
    const set = new Set(numbers);

    [...set].forEach((n) => {
      const nString = n.toString();
      const decimalsString = nString.split('.')[1];
      expect(typeof decimalsString).toBe('string');
      expect(decimalsString.length).toBeLessThanOrEqual(decimals);
    });
  });
});

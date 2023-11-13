import { randomInt } from '~/lib/randomInt';

describe('Random int', () => {
  it.each([[10]])('Should generate a random int not greater tha %d', (max) => {
    const n = randomInt(0, max);
    expect(n).toBeLessThanOrEqual(max);
  });

  it('Should generate ramdom ints', () => {
    const interactions = 50;

    const numbers: number[] = [];
    for (let i = 0; i < interactions; i++) {
      numbers.push(randomInt(0, 50));
    }
    const set = new Set(numbers);
    const onlyInt = [...set].map((n) => {
      return n % 2 === 0;
    });

    expect(set.size).toBeGreaterThanOrEqual(interactions / 2);
    expect(onlyInt.length).toBe(set.size);
  });
});

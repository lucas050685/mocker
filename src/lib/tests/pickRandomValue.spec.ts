import { pickRandomValue } from '~/lib/pickRandomValue';

describe('Pick random value', () => {
  it('Should get a random value from an array', () => {
    const values = ['value 1', 'value 2', 'value 3', 'value 4'];

    const value = pickRandomValue(values);

    expect(value).not.toBe(undefined);
    expect(values.includes(value as string)).toBe(true);
  });
});

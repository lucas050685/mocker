import { randomInt } from './randomInt';

export function pickRandomValue<T = any>(array: T[]): T | undefined {
  if (array.length <= 0) return undefined;
  if (array.length == 1) return array[0];
  const index = randomInt(0, array.length - 1);
  return array[index];
}

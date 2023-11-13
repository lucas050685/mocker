import { NumberModifier } from './types';

export function randomFloat(
  min: number = 0,
  max: number = 1000,
  decimals: number = 2,
  modifier?: NumberModifier,
): number {
  const delta = Math.abs(max - min);
  const random = Math.random() * delta;
  const normalized = random + Math.min(...[min, max]);
  const modified = modifier ? modifier(normalized) : normalized;
  return parseFloat(modified.toFixed(decimals));
}

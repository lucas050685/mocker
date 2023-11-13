import { randomFloat } from './ramdomFloat';
import { NumberModifier } from './types';

export function randomInt(min: number = 0, max: number = 1000, modifier?: NumberModifier): number {
  return randomFloat(min, max, 0, modifier);
}

import { randomFloat, pickRandomValue } from '~/lib';
import { PriceParams } from './types';

export function generateRandomPrice(pricePrams?: PriceParams) {
  return {
    currency: pickRandomValue(pricePrams?.currency ?? []) ?? 'USD',
    country: pickRandomValue(pricePrams?.country ?? []) ?? 'US',
    amount: randomFloat(pricePrams?.min ?? 10, pricePrams?.max ?? 350, 1),
  };
}

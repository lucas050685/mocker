import { v4 as uuid } from 'uuid';
import { pickRandomValue, sequence } from '~/lib';
import { generateRandomPrice } from './generateRandomPrice';
import { ProductParams, VariantParams } from './types/ProductParams';

import productNames from '~/data/product/names.autoparts.json';
import productDescriptions from '~/data/product/descriptions.autoparts.json';
import { PriceParams } from './types';

export function generateVariants(variantParams?: VariantParams) {
  const total = variantParams?.maxQuantity ?? 1;
  const variantSequence = sequence();
  const variants: any[] = [];
  for (let i = 1; i <= total; i++) {
    variants.push({
      id: uuid(),
      sequence: variantSequence(),
      prices: [generateRandomPrice(variantParams?.price)],
    });
  }
  return variants;
}

export function generateRandomProduct(params?: ProductParams) {
  const variants = generateVariants(params?.variants);
  return {
    id: uuid(),
    name: pickRandomValue(params?.name ?? productNames),
    description: pickRandomValue(params?.description ?? productDescriptions),
    variants,
  };
}

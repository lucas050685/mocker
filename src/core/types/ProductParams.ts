import { PriceParams } from './PriceParams';

export type VariantParams = {
  maxQuantity?: number;
  price?: PriceParams;
};

export type ProductParams = {
  name?: string[];
  description?: string[];
  variants?: VariantParams;
};

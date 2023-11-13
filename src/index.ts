import 'module-alias/register';
import { generateRandomProduct } from '~/core';

const prodcuts = generateRandomProduct({ variants: { maxQuantity: 2 } });
console.log(JSON.stringify(prodcuts, null, 2));

import { selector, waitForAll } from "recoil";
import { productInCartIdsAtom } from "../atoms/productInCartIdsAtom";
import { productInCartAtomFamily } from "../atoms/productInCartAtomFamily";

export const inCartTotalPriceSelector = selector({
  key: 'inCartTotalPriceSelector',
  get: ({ get }) => {
    const cartIds = get(productInCartIdsAtom);
    const products = get(waitForAll(cartIds.map(id => productInCartAtomFamily(id))));
    const total = products.reduce((acc, product) => {
      return acc + product.price * product.num;
    }, 0);
    return total;
  }
});

import { selector, waitForAll } from "recoil";
import { numInCartIdsAtom } from "../atoms/numInCartIdsAtom";
import { numInCartAtomFamily } from "../atoms/numInCartAtomFamily";
import { productAtomFamily } from "../atoms/productAtomFamily";

export const totalPriceSelector = selector({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const cartIds = get(numInCartIdsAtom);
    const products = get(waitForAll(cartIds.map(id => productAtomFamily(id))));
    return products.reduce((acc, product) => {
      const numInCart = get(numInCartAtomFamily(product.id));
      return acc + product.price * numInCart.num;
    }, 0);
  }
});

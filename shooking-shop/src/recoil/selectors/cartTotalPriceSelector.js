import { selector } from "recoil";
import { productInCartIdsAtom } from "../atoms/productInCartIdsAtom";
import { productInCartAtomFamily } from "../atoms/productInCartAtomFamily";

export const cartTotalPriceSelector = selector({
  key: 'cartTotalPriceSelector',
  get: ({ get }) => {
    const cartIds = get(productInCartIdsAtom);
    return cartIds.reduce((totalPrice, id) => {
      const product = get(productInCartAtomFamily(id));
      return totalPrice + product.price * product.quantity;
    }, 0);
  }
});
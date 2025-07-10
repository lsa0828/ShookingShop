import { selector } from "recoil";
import { productInCartAtomFamily } from "../atoms/productInCartAtomFamily";
import { productInCartIdsAtom } from "../atoms/productInCartIdsAtom";

export const cartCountSelector = selector({
  key: 'cartCountSelector',
  get: ({ get }) => {
    const cartIds = get(productInCartIdsAtom);
    return cartIds.reduce((count, id) => {
      const item = get(productInCartAtomFamily(id));
      return item && item.quantity > 0 ? count + 1 : count;
    }, 0);
  }
})
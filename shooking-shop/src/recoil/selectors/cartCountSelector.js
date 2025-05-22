import { selector } from "recoil";
import { numInCartAtomFamily } from "../atoms/numInCartAtomFamily";
import { numInCartIdsAtom } from "../atoms/numInCartIdsAtom";

export const cartCountSelector = selector({
  key: 'cartCountSelector',
  get: ({ get }) => {
    const cartIds = get(numInCartIdsAtom);
    return cartIds.reduce((count, id) => {
      const item = get(numInCartAtomFamily(id));
      return item && item.num > 0 ? count + 1 : count;
    }, 0);
  }
})
import { selector } from "recoil";
import { numInCartAtomFamily } from "../atoms/numInCartAtomFamily";
import { numInCartIdsAtom } from "../atoms/numInCartIdsAtom";

export const cartTotalNumSelector = selector({
  key: 'cartTotalNumSelector',
  get: ({get}) => {
    const cartIds = get(numInCartIdsAtom);
    return cartIds.reduce((totalNum, id) => {
      const item = get(numInCartAtomFamily(id));
      return item && item.num > 0 ? totalNum + item.num : totalNum;
    }, 0);
  }
})
import { selector, waitForAll } from "recoil";
import { productInCartIdsAtom } from "../atoms/productInCartIdsAtom";
import { productInCartAtomFamily } from "../atoms/productInCartAtomFamily";

export const cartTotalNumSelector = selector({
  key: 'cartTotalNumSelector',
  get: ({get}) => {
    const ids = get(productInCartIdsAtom);
    const products = get(waitForAll(ids.map(id => productInCartAtomFamily(id))));
    const total = products.reduce((acc, product) => {
      return acc + Number(product.num);
    }, 0);
    return total;
  }
})
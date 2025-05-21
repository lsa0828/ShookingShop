import { selector, waitForAll } from "recoil";
import { productIdsAtom } from "../atoms/productIdsAtom";
import { productAtomFamily } from "../atoms/productAtomFamily";

export const cartNumberSelector = selector({
  key: 'cartNumberSelector',
  get: ({get}) => {
    const ids = get(productIdsAtom);
    const products = get(waitForAll(ids.map(id => productAtomFamily(id))));
    return products.filter(product => product.inCart).length;
  }
})
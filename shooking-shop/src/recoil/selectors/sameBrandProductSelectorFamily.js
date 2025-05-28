import { selectorFamily } from "recoil";
import { productAtomFamily } from "../atoms/productAtomFamily";
import { productIdsAtom } from "../atoms/productIdsAtom";

export const sameBrandProductSelectorFamily = selectorFamily({
  key: 'sameBrandProductSelectorFamily',
  get: (id) => ({get}) => {
    const product = get(productAtomFamily(id));
    if (!product) return [];

    const allIds = get(productIdsAtom)
    return allIds
      .map((pid) => get(productAtomFamily(pid)))
      .filter(p => !!p && p.brand === product.brand && p.id !== id);
  }
})
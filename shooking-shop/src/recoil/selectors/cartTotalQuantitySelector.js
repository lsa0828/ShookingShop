import { selector } from "recoil";
import { productInCartAtomFamily } from "../atoms/productInCartAtomFamily";
import { productInCartIdsAtom } from "../atoms/productInCartIdsAtom";

export const cartTotalQuantitySelector = selector({
  key: 'cartTotalQuantitySelector',
  get: ({get}) => {
    const cartIds = get(productInCartIdsAtom);
    return cartIds.reduce((totalQuantity, id) => {
      const product = get(productInCartAtomFamily(id));
      return product && product.quantity > 0 ? totalQuantity + product.quantity : totalQuantity;
    }, 0);
  }
})
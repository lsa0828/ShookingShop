import { useRecoilCallback, useSetRecoilState } from "recoil";
import { productInCartIdsAtom } from "../recoil/atoms/productInCartIdsAtom";
import { fetchGetProductListInCart } from "../api/cart";
import { productInCartAtomFamily } from "../recoil/atoms/productInCartAtomFamily";

export const useSetProductInCartAtoms = () => {
  const setProductInCartIds = useSetRecoilState(productInCartIdsAtom);

  const setAtoms = useRecoilCallback(({set}) => () => {
    fetchGetProductListInCart()
      .then(data => {
        setProductInCartIds(data.map(product => product.id));
        data.forEach((product) => {
          set(productInCartAtomFamily(product.id), product);
        });
      });
  });

  return setAtoms;
}
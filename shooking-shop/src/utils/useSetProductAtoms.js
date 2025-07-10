import { useRecoilCallback, useSetRecoilState } from "recoil";
import { productIdsAtom } from "../recoil/atoms/productIdsAtom";
import { fetchGetProductImage, fetchGetProductList } from "../api/product";
import { productAtomFamily } from "../recoil/atoms/productAtomFamily";
import { productImageAtomFamily } from "../recoil/atoms/productImageAtomFamily";

export const useSetProductAtoms = () => {
  const setProductIds = useSetRecoilState(productIdsAtom);

  const setAtoms = useRecoilCallback(({set}) => () => {
    fetchGetProductList()
      .then(data => {
        if (data) {
          setProductIds(data.map(p => p.id));
          data.forEach((product) => {
            set(productAtomFamily(product.id), product);
            fetchGetProductImage(product.id)
              .then(dataUrl => {
                set(productImageAtomFamily(product.id), {url: dataUrl});
              })
          });
        }
      });
  });

  return setAtoms;
}
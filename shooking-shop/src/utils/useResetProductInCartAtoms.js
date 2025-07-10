import { useRecoilCallback } from "recoil";
import { productInCartIdsAtom } from "../recoil/atoms/productInCartIdsAtom";
import { productInCartAtomFamily } from "../recoil/atoms/productInCartAtomFamily";

export const useResetProductInCartAtoms = () => {
  const resetAtoms = useRecoilCallback(({ snapshot, reset }) => async() => {
    const ids = await snapshot.getPromise(productInCartIdsAtom);
    ids.forEach(id => {
      reset(productInCartAtomFamily(id));
    });
    reset(productInCartIdsAtom);
  })

  return resetAtoms;
}
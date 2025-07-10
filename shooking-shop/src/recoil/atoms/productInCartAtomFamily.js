import { atomFamily } from "recoil";

export const productInCartAtomFamily = atomFamily({
  key: 'productInCartAtomFamily',
  default: null,
});
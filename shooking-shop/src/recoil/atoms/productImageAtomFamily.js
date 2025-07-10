import { atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const productImageAtomFamily = atomFamily({
  key: 'productImageAtomFamily',
  default: null,
  effects_UNSTABLE: [persistAtom]
});
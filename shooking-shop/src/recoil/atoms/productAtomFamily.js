import { atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const productAtomFamily = atomFamily({
  key: 'productAtomFamily',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
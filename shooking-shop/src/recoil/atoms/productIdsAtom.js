import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const productIdsAtom = atom({
  key: 'productIdsAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
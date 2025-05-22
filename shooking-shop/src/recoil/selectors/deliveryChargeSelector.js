import { selector } from "recoil";
import { totalPriceSelector } from "./totalPriceSelector";

export const deliveryChargeSelector = selector({
  key: 'deliveryChargeSelector',
  get: ({get}) => {
    const total = get(totalPriceSelector);
    return total >= 100000 ? 0 : 3000;
  }
})
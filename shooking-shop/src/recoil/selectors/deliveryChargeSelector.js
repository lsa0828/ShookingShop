import { selector } from "recoil";
import { inCartTotalPriceSelector } from "./inCartTotalPriceSelector";

export const deliveryChargeSelector = selector({
  key: 'deliveryChargeSelector',
  get: ({get}) => {
    const total = get(inCartTotalPriceSelector);
    return total >= 100000 ? 0 : 3000;
  }
})
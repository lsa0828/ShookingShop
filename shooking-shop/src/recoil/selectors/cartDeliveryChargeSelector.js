import { selector } from "recoil";
import { cartTotalPriceSelector } from "./cartTotalPriceSelector";

export const cartDeliveryChargeSelector = selector({
  key: 'cartDeliveryChargeSelector',
  get: ({get}) => {
    const total = get(cartTotalPriceSelector);
    return total >= 100000 ? 0 : 3000;
  }
})
import { useRecoilValue } from "recoil";
import { cartTotalPriceSelector } from "../recoil/selectors/cartTotalPriceSelector";
import { cartDeliveryChargeSelector } from "../recoil/selectors/cartDeliveryChargeSelector";
import Price from "./Price";

function CartPrice() {
  const totalPrice = useRecoilValue(cartTotalPriceSelector);
  const deliveryCharge = useRecoilValue(cartDeliveryChargeSelector);
  return (
    <div className="px-6 480:px-4">
      <div>
        <Price name={"상품 금액"} price={totalPrice} />
        <Price name={"배송비"} price={deliveryCharge} />
      </div>
      <hr className="border-gray-300 my-4 mx-1 sm:mx-6 md:mx-32 lg:mx-56 xl:mx-80" />
      <div>
        <Price name={"총 금액"} price={totalPrice+deliveryCharge} />
      </div>
    </div>
  );
}

export default CartPrice;
import { useRecoilValue } from "recoil";
import PriceComponent from "./PriceComponent";
import { totalPriceSelector } from "../recoil/selectors/totalPriceSelector";
import { deliveryChargeSelector } from "../recoil/selectors/deliveryChargeSelector";

function TotalPrice() {
  const totalPrice = useRecoilValue(totalPriceSelector);
  const deliveryCharge = useRecoilValue(deliveryChargeSelector);
  return (
    <div className="px-6 480:px-4">
      <div>
        <PriceComponent name={"상품 금액"} price={totalPrice} />
        <PriceComponent name={"배송비"} price={deliveryCharge} />
      </div>
      <hr className="border-gray-300 my-4 mx-1 sm:mx-6 md:mx-32 lg:mx-56 xl:mx-80" />
      <div>
        <PriceComponent name={"총 금액"} price={totalPrice+deliveryCharge} />
      </div>
    </div>
  );
}

export default TotalPrice;
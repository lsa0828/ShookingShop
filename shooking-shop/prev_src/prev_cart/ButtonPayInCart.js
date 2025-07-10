import { useState } from "react";
import BlackButton from "../BlackButton";
import ModalPayments from "./ModalPayments";
import { totalPriceSelector } from "../recoil/selectors/cartTotalPriceSelector";
import { deliveryChargeSelector } from "../recoil/selectors/cartDeliveryChargeSelector";
import { useRecoilValue } from "recoil";
import { cartTotalNumSelector } from "../recoil/selectors/cartTotalQuantitySelector";

function ButtonPayInCart() {
  const [isOpen, setIsOpen] = useState(false);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const deliveryCharge = useRecoilValue(deliveryChargeSelector);
  const cartTotalNum = useRecoilValue(cartTotalNumSelector);
  return (
    <div className="flex justify-center">
      <div className="m-6 480:mx-2 w-[480px] 480:w-full">
        <BlackButton onClick={() => setIsOpen(true)} data-testid="pay-button-incart">결제하기</BlackButton>
        {isOpen && <ModalPayments onClose={() => setIsOpen(false)} 
          totalPrice={totalPrice+deliveryCharge} productCount={cartTotalNum} />}
      </div>
    </div>
  );
}

export default ButtonPayInCart;
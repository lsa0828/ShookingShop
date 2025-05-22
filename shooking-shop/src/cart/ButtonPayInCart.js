import { useState } from "react";
import BlackButton from "../BlackButton";
import ModalPayments from "./ModalPayments";
import { totalPriceSelector } from "../recoil/selectors/totalPriceSelector";
import { deliveryChargeSelector } from "../recoil/selectors/deliveryChargeSelector";
import { useRecoilValue } from "recoil";
import { cartTotalNumSelector } from "../recoil/selectors/cartTotalNumSelector";

function ButtonPayInCart() {
  const [isOpen, setIsOpen] = useState(false);
  const totalPrice = useRecoilValue(totalPriceSelector);
  const deliveryCharge = useRecoilValue(deliveryChargeSelector);
  const cartTotalNum = useRecoilValue(cartTotalNumSelector);
  return (
    <div className="flex justify-center">
      <div className="m-6 480:mx-2 w-[480px] 480:w-full">
        <BlackButton onClick={() => setIsOpen(true)}>결제하기</BlackButton>
        {isOpen && <ModalPayments onClose={() => setIsOpen(false)} 
          totalPrice={totalPrice+deliveryCharge} productCount={cartTotalNum} />}
      </div>
    </div>
  );
}

export default ButtonPayInCart;
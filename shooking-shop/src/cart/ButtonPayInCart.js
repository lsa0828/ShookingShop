import { useState } from "react";
import BlackButton from "../BlackButton";
import ModalPayments from "./ModalPayments";

function PayInCartButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="m-6 480:mx-2 w-[480px] 480:w-full">
        <BlackButton onClick={() => setIsOpen(true)}>결제하기</BlackButton>
        {isOpen && <ModalPayments onClose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
}

export default PayInCartButton;
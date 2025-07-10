import { useState } from "react";
import BlackButton from "../../sample/button/BlackButton";
import ModalCard from "../modal/ModalCard";

function ButtonCardInCart() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="m-6 480:mx-2 w-[480px] 480:w-full">
        <BlackButton onClick={() => setIsOpen(true)} data-testid="pay-button-incart">결제하기</BlackButton>
        {isOpen && <ModalCard onClose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
}

export default ButtonCardInCart;
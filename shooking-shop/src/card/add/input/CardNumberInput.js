import React from "react";
import CustomInput from "../../../sample/CustomInput";
import { maskNumber } from "../../utils/maskNumber";

function CardNumberInput({cardNumber, setCardNumber}) {
  const handleChange = (e) => {
    const input = e.target.value.replace(/-/g, '');
    if (input.length > cardNumber.length) {
      const newDigit = input.slice(-1);
      const newCardNumber = cardNumber + newDigit;
      setCardNumber(newCardNumber.slice(0, 16));
    } else if (input.length < cardNumber.length) {
      const newCardNumber = cardNumber.slice(0, input.length);
      setCardNumber(newCardNumber);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' || e.key === 'Tab') {
      return;
    }
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      return;
    }
    if (cardNumber.length >= 16) {
      e.preventDefault();
      return;
    }
  }

  return (
    <div className="m-4">
      <p className="text-gray-700">카드 번호</p>
      <CustomInput className="w-full text-center"
        name="card-number"
        type="text" value={maskNumber(cardNumber)}
        onChange={handleChange}
        onKeyDown={handleKeyDown} />
    </div>
  );
}

export default React.memo(CardNumberInput);
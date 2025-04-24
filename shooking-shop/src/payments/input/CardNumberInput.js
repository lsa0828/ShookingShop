import { useState } from "react";

function CardNumberInput({cardNumber, setCardNumber}) {
  //const [cardNumber, setCardNumber] = useState('');
  const [displayNumber, setDisplayNumber] = useState('');

  const MaskNumber = (digits) => {
    const maskedDigits = digits
      .split('')
      .map((d, i) => (i < 8 ? d : '●'))
      .join('');
    return maskedDigits.replace(/(.{4})/g, '$1-').replace(/-$/, '');
  }

  const handleChange = (e) => {
    const input = e.target.value.replace(/-/g, '');
    if (input.length > cardNumber.length) {
      const newDigit = input.slice(-1);
      const newCardNumber = cardNumber + newDigit;
      setCardNumber(newCardNumber.slice(0, 16));
      setDisplayNumber(MaskNumber(newCardNumber.slice(0, 16)));
    } else if (input.length < cardNumber.length) {
      const newCardNumber = cardNumber.slice(0, input.length);
      setCardNumber(newCardNumber);
      setDisplayNumber(MaskNumber(newCardNumber));
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
    <div>
      <p className="text-gray-700">카드 번호</p>
      <input className="p-3 text-center font-bold bg-gray-200 rounded-lg focus:outline-none"
        type="text" value={displayNumber}
        onChange={handleChange}
        onKeyDown={handleKeyDown} />
    </div>
  );
}

export default CardNumberInput;
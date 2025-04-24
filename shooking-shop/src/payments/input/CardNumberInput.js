import { useState } from "react";

function CardNumberInput(props) {
  const [cardNumber, setCardNumber] = useState('');
  const [displayNumber, setDisplayNumber] = useState('');

  const MaskNumber = (digits) => {
    const maskedDigits = digits
      .split('')
      .map((d, i) => (i < 8 ? d : '*'))
      .join('');
    return maskedDigits.replace(/(.{4})/g, '$1-').replace(/-$/, '');
  }

  const handleChange = (e) => {
    const input = e.target.value.replace(/-/g, '');
    if (input.length > cardNumber.length) {
      const newDigits = input.slice(cardNumber.length);
      const newCardNumber = cardNumber + newDigits;
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

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text');
    const digits = pasteData.replace(/\D/g, '').slice(0, 16);
    setCardNumber(digits);
    setDisplayNumber(MaskNumber(digits));
  }

  return (
    <div>
      <p className="text-gray-700">카드 번호</p>
      <input className="p-3 text-center font-bold bg-gray-200 rounded-md focus:outline-none"
        type="text" value={displayNumber}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste} />
    </div>
  );
}

export default CardNumberInput;
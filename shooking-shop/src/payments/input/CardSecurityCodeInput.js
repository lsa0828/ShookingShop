import { useState } from "react";

function CardSecurityCodeInput() {
  const [securityCode, setSecurityCode] = useState('');
  const [displayCode, setDisplayCode] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    console.log(input);
    if (input.length > securityCode.length) {
      const newDigit = input.slice(-1);
      const newSecurityCode = securityCode + newDigit;
      setSecurityCode(newSecurityCode.slice(0, 3));
      setDisplayCode("*".repeat(newSecurityCode.length));
    } else if (input.length < securityCode.length) {
      const newSecurityCode = securityCode.slice(0, input.length);
      setSecurityCode(newSecurityCode);
      setDisplayCode("*".repeat(newSecurityCode.length));
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' || e.key === 'Tap') {
      return;
    }
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      return;
    }
  }

  return (
    <div>
      <p className="text-gray-700">보안 코드(CVC/CVV)</p>
      <input className="p-3 text-center font-bold bg-gray-200 rounded-md focus:outline-none"
        type="text" value={displayCode}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={3} />
    </div>
  );
}

export default CardSecurityCodeInput;
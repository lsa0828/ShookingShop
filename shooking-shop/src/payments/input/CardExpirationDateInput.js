//import { useState } from "react";

import React from "react";
import { maskDate } from "./utils/maskDate";

function CardExpirationDateInput({expirationDate, setExpirationDate}) {
  //const [expirationDate, setExpirationDate] = useState('');
  //const [displayDate, setDisplayDate] = useState('');

  const handleChange = (e) => {
    const input = e.target.value.replace(/\//g, '').replace(/\s/g, '').slice(0, 4);
    if (input.length >= 2) {
      const mm = input.slice(0, 2);
      if (Number(mm) < 1 || Number(mm) > 12) return;
      setExpirationDate(input);
    } else if (input.length === 1) {
      if (['0', '1'].includes(input[0])) {
        setExpirationDate(input);
      }
    } else {
      setExpirationDate('');
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
  }

  return (
    <div className="m-4">
      <p className="text-gray-700">만료일</p>
      <input className="w-36 160:w-full p-3 text-center text-xl font-semibold bg-gray-200 rounded-lg focus:outline-none"
        type="text" value={maskDate(expirationDate)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="MM / YY" />
    </div>
  );
}

export default React.memo(CardExpirationDateInput);
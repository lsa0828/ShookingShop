import { useState } from "react";

function CardExpirationDateInput(props) {
  const [expirationDate, setExpirationDate] = useState('');
  const [displayDate, setDisplayDate] = useState('');

  const handleChange = (e) => {
    const input = e.target.value.replace(/\//g, '').replace(/\s/g, '').slice(0, 4);
    if (input.length >= 2) {
      const mm = input.slice(0, 2);
      if (Number(mm) < 1 || Number(mm) > 12) return;
      setExpirationDate(input);
      const newDate = input.replace(/(.{2})/g, '$1 / ').replace(/ \/ $/, '');
      setDisplayDate(newDate);
    } else if (input.length === 1) {
      if (Number(input[0]) in [0, 1]) {
        setExpirationDate(input);
        setDisplayDate(input);
      }
    } else {
      setExpirationDate('');
      setDisplayDate('');
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
      <p className="text-gray-700">만료일</p>
      <input className="p-3 text-center font-bold bg-gray-200 rounded-lg focus:outline-none"
        type="text" value={displayDate}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="MM / YY" />
    </div>
  );
}

export default CardExpirationDateInput;
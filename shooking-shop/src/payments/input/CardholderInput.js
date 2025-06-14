import React, { useState } from "react";

function CardholderInput({cardholder, setCardholder}) {
  //const [cardholder, setCardholder] = useState('');
  const [cardholderLength, setCardholderLength] = useState(0);

  const handleChange = (e) => {
    const newCardholder = e.target.value.slice(0, 30);
    setCardholder(newCardholder);
    setCardholderLength(newCardholder.length);
  }

  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <p className="text-gray-700">카드 소유자 이름</p>
        <p className="text-gray-700">{cardholderLength}/30</p>
      </div>
      <input className="w-full p-3 text-xl font-semibold bg-gray-200 rounded-lg focus:outline-none"
        name="cardholder"
        type="text" value={cardholder}
        onChange={handleChange}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
    </div>
  );
}

export default React.memo(CardholderInput);
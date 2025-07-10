import React, { useState } from "react";
import CustomInput from "../../../sample/CustomInput";

function CardholderInput({cardholder, setCardholder}) {
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
      <CustomInput className="w-full text-center"
        name="cardholder"
        type="text" value={cardholder}
        onChange={handleChange}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
    </div>
  );
}

export default React.memo(CardholderInput);
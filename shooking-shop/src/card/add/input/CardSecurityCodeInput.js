import React from "react";
import { GoQuestion } from "react-icons/go";
import CustomInput from "../../../sample/CustomInput";

function CardSecurityCodeInput({securityCode, setSecurityCode}) {
  const handleChange = (e) => {
    setSecurityCode(e.target.value);
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
      <p className="text-gray-700">보안 코드(CVC/CVV)</p>
      <div className="flex items-center">
        <CustomInput className="w-28 130:w-full text-center"
          name="card-security-code"
          type="text"
          autoComplete="off"
          value={securityCode}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={3}
          style={{ WebkitTextSecurity: 'disc', fontSize: '35px' }} />
        <GoQuestion className="mx-3 text-[35px] text-gray-300" />
      </div>
    </div>
  );
}

export default React.memo(CardSecurityCodeInput);
import React, { useRef } from "react";
import CustomInput from "../../../sample/CustomInput";

function CardPasswordInput({password, setPassword}) {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleChange = (e, index) => {
    const input = e.target.value.slice(0, 1);
    if (input && index === 0) {
      setPassword(input);
      secondInputRef.current?.focus();
    } else if (input && index === 1) {
      if(password.length > 0) {
        const newPassword = password + input;
        setPassword(newPassword.slice(0, 2));
      } else {
        setPassword(input);
      }
    } else if (!input && index === 0) {
      setPassword('');
    } else if (!input && index === 1) {
      if (password.length === 2) {
        setPassword(password.slice(0, 1));
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (index === 1 && password.length < 2) {
        e.preventDefault();
        setPassword('');
        firstInputRef.current?.focus();
      }
      return;
    }
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      return;
    }
  }

  return (
    <div className="m-4">
      <p className="text-gray-700">카드 비밀번호</p>
      <div className="grid grid-cols-4 gap-1 w-fit">
        <CustomInput className="w-12 text-center"
          name="password1"
          ref={firstInputRef}
          type="text" value={password[0] ? '●' : ''}
          onChange={(e) => handleChange(e, 0)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
          maxLength={1} />
        <CustomInput className="w-12 text-center"
          name="password2"
          ref={secondInputRef}
          type="text" value={password[1] ? '●' : ''}
          onChange={(e) => handleChange(e, 1)}
          onKeyDown={(e) => handleKeyDown(e, 1)}
          maxLength={1} />
        <p className="p-3 w-12 text-center text-xl font-semibold">●</p>
        <p className="p-3 w-12 text-center text-xl font-semibold">●</p>
      </div>
    </div>
  );
}

export default React.memo(CardPasswordInput);
import { useRef, useState } from "react";

function CardPasswordInput({password, setPassword}) {
  //const [password, setPassword] = useState('');
  //const [displayPassword, setDisplayPassword] = useState('');
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const handleChange = (e, index) => {
    const input = e.target.value.slice(0, 1);
    if (input && index === 0) {
      setPassword(input);
      //setDisplayPassword('●');
      secondInputRef.current?.focus();
    } else if (input && index === 1) {
      if(password.length > 0) {
        const newPassword = password + input;
        setPassword(newPassword.slice(0, 2));
        //setDisplayPassword('●●');
      } else {
        setPassword(input);
        //setDisplayPassword('●')
      }
    } else if (!input && index === 0) {
      setPassword('');
      //setDisplayPassword('');
    } else if (!input && index === 1) {
      if (password.length === 2) {
        setPassword(password.slice(0, 1));
        //setDisplayPassword('●');
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (index === 1 && password.length < 2) {
        e.preventDefault();
        setPassword('');
        //setDisplayPassword('');
        firstInputRef.current?.focus();
      }
      return;
    }
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      return;
    }
  }

  // const handleKeyDown = (e, index) => {
  //   if (e.key === 'Backspace') {
  //     if (index === 1 && displayPassword.length < 2) {
  //       e.preventDefault();
  //       setPassword('');
  //       setDisplayPassword('');
  //       firstInputRef.current?.focus();
  //     }
  //     return;
  //   }
  //   if (!/^\d$/.test(e.key)) {
  //     e.preventDefault();
  //     return;
  //   }
  // }

  return (
    <div className="m-4">
      <p className="text-gray-700">카드 비밀번호</p>
      <div className="grid grid-cols-4 gap-1 w-fit">
        <input className="p-3 w-12 text-center text-xl font-semibold bg-gray-200 rounded-lg focus:outline-none"
          ref={firstInputRef}
          type="text" value={password[0] ? '●' : ''}
          onChange={(e) => handleChange(e, 0)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
          maxLength={1} />
        <input className="p-3 w-12 text-center text-xl font-semibold bg-gray-200 rounded-lg focus:outline-none"
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

export default CardPasswordInput;
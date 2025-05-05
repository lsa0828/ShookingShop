import { GoQuestion } from "react-icons/go";

function CardSecurityCodeInput({securityCode, setSecurityCode}) {
  //const [securityCode, setSecurityCode] = useState('');
  //const [displayCode, setDisplayCode] = useState('');

  const maskSecurityCode = (code) => {
    return "●".repeat(code.slice(0, 3).length);
  }

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.length > securityCode.length) {
      const newDigit = input.slice(-1);
      const newSecurityCode = securityCode + newDigit;
      setSecurityCode(newSecurityCode.slice(0, 3));
      //setDisplayCode("●".repeat(newSecurityCode.length));
    } else if (input.length < securityCode.length) {
      const newSecurityCode = securityCode.slice(0, input.length);
      setSecurityCode(newSecurityCode);
      //setDisplayCode("●".repeat(newSecurityCode.length));
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
      <p className="text-gray-700">보안 코드(CVC/CVV)</p>
      <div className="flex items-center">
        <input className="w-28 130:w-full p-3 text-center text-xl font-semibold bg-gray-200 rounded-lg focus:outline-none"
          type="text" value={maskSecurityCode(securityCode)}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={3} />
        <GoQuestion className="mx-3 text-[35px] text-gray-300" />
      </div>
    </div>
  );
}

export default CardSecurityCodeInput;
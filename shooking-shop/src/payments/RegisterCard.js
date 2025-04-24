import { useState } from "react";
import CardExpirationDateInput from "./input/CardExpirationDateInput";
import CardholderInput from "./input/CardholderInput";
import CardNumberInput from "./input/CardNumberInput";
import CardPasswordInput from "./input/CardPasswordInput";
import CardSecurityCodeInput from "./input/CardSecurityCodeInput";
import CardImage from "./CardImage";

function RegisterCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardholder, setCardholder] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="flex justify-center">
      <div className="mx-6 480:mx-2 w-[480px] 480:w-full">
        <div className="flex justify-center">
          <CardImage cardNumber={cardNumber} cardholder={cardholder} expirationDate={expirationDate} />
        </div>
        <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
        <CardExpirationDateInput expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
        <CardholderInput cardholder={cardholder} setCardholder={setCardholder} />
        <CardSecurityCodeInput securityCode={securityCode} setSecurityCode={setSecurityCode} />
        <CardPasswordInput password={password} setPassword={setPassword} />
      </div>
    </div>
  );
}

export default RegisterCard;
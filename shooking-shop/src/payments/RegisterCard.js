import { useState } from "react";
import CardExpirationDateInput from "./input/CardExpirationDateInput";
import CardholderInput from "./input/CardholderInput";
import CardNumberInput from "./input/CardNumberInput";
import CardPasswordInput from "./input/CardPasswordInput";
import CardSecurityCodeInput from "./input/CardSecurityCodeInput";

function RegisterCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardholder, setCardholder] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <CardExpirationDateInput expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
      <CardholderInput cardholder={cardholder} setCardholder={setCardholder} />
      <CardSecurityCodeInput securityCode={securityCode} setSecurityCode={setSecurityCode} />
      <CardPasswordInput password={password} setPassword={setPassword} />
    </div>
  );
}

export default RegisterCard;
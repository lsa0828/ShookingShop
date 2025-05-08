import { useState } from "react";
import CardExpirationDateInput from "./input/CardExpirationDateInput";
import CardholderInput from "./input/CardholderInput";
import CardNumberInput from "./input/CardNumberInput";
import CardPasswordInput from "./input/CardPasswordInput";
import CardSecurityCodeInput from "./input/CardSecurityCodeInput";
import CardImage from "./CardImage";
import RegisterCardButton from "./RegisterCardButton";
import RegisterCardHeader from "./RegisterCardHeader";
import { useNavigate } from "react-router-dom";

function RegisterCard({addCard}) {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardholder, setCardholder] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid =
    cardNumber.length > 0 &&
    expirationDate.length === 4 &&
    cardholder.length > 0 &&
    securityCode.length === 3 &&
    password.length === 2;

  const handleRegister = async () => {
    if (!isFormValid) return;
    const newCard = {
      "cardNumber": cardNumber,
      "expirationDate": expirationDate,
      "cardholder": cardholder,
      "securityCode": securityCode,
      "password": password
    };
    addCard(newCard);
    await navigate('/pay');
  }

  return (
    <div>
      <RegisterCardHeader />
      <div className="flex justify-center">
        <div className="mx-6 480:mx-2 w-[480px] 480:w-full">
          <div className="flex justify-center">
            <CardImage card={{cardNumber, expirationDate, cardholder}} />
          </div>
          <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
          <CardExpirationDateInput expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
          <CardholderInput cardholder={cardholder} setCardholder={setCardholder} />
          <CardSecurityCodeInput securityCode={securityCode} setSecurityCode={setSecurityCode} />
          <CardPasswordInput password={password} setPassword={setPassword} />
          <RegisterCardButton isFormValid={isFormValid} handleRegister={handleRegister} />
        </div>
      </div>
    </div>
  );
}

export default RegisterCard;
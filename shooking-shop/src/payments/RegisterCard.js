import CardExpirationDateInput from "./input/CardExpirationDateInput";
import CardholderInput from "./input/CardholderInput";
import CardNumberInput from "./input/CardNumberInput";
import CardPasswordInput from "./input/CardPasswordInput";
import CardSecurityCodeInput from "./input/CardSecurityCodeInput";

function RegisterCard() {
  return (
    <div>
      <CardNumberInput />
      <CardExpirationDateInput />
      <CardholderInput />
      <CardSecurityCodeInput />
      <CardPasswordInput />
    </div>
  );
}

export default RegisterCard;
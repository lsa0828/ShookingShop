import CardExpirationDateInput from "./input/CardExpirationDateInput";
import CardholderInput from "./input/CardholderInput";
import CardNumberInput from "./input/CardNumberInput";
import CardSecurityCodeInput from "./input/CardSecurityCodeInput";

function RegisterCard() {
  return (
    <div>
      <CardNumberInput />
      <CardExpirationDateInput />
      <CardholderInput />
      <CardSecurityCodeInput />
    </div>
  );
}

export default RegisterCard;
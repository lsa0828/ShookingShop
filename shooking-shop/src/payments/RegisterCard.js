import CardExpirationDateInput from "./input/CardExpirationDateInput";
import CardholderInput from "./input/CardholderInput";
import CardNumberInput from "./input/CardNumberInput";

function RegisterCard() {
  return (
    <div>
      <CardNumberInput />
      <CardExpirationDateInput />
      <CardholderInput />
    </div>
  );
}

export default RegisterCard;
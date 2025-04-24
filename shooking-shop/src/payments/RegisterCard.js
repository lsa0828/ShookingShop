import CardExpirationDateInput from "./input/CardExpirationDateInput";
import CardNumberInput from "./input/CardNumberInput";

function RegisterCard() {
  return (
    <div>
      <CardNumberInput />
      <CardExpirationDateInput />
    </div>
  );
}

export default RegisterCard;
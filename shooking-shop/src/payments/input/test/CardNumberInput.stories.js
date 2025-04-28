import { useEffect, useState } from "react";
import CardNumberInput from "../CardNumberInput";

export default {
  title: 'Payments/input/CardNumberInput',
  component: CardNumberInput,
  args: {
    cardNumber: '',
  },
  render: (args) => {
    const [cardNumber, setCardNumber] = useState(args.cardNumber);
    useEffect(() => {
      setCardNumber(args.cardNumber);
    }, [args.cardNumber]);
    return (
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
    );
  }
};

export const Default = {
  args: {
    cardNumber: "1234567894561231"
  }
};
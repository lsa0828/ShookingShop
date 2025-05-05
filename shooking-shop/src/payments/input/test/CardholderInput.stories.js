import { useEffect, useState } from "react";
import CardholderInput from "../CardholderInput";

export default {
  title: 'Payments/input/CardholderInput',
  component: CardholderInput,
  args: {
    cardholder: '',
  },
  render: (args) => {
    const [cardholder, setCardholder] = useState(args.cardholder);
    useEffect(() => {
      setCardholder(args.cardholder);
    }, [args.cardholder]);
    return (
      <CardholderInput cardholder={cardholder} setCardholder={setCardholder} />
    );
  }
};

export const Default = {
  args: {
    cardholder: ""
  }
};
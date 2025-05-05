import { useEffect, useState } from "react";
import CardExpirationDateInput from "../CardExpirationDateInput";

export default {
  title: 'Payments/input/CardExpirationDateInput',
  component: CardExpirationDateInput,
  args: {
    expirationDate: '',
  },
  argTypes: {
    expirationDate: {control: 'text'},
  },
  render: (args) => {
    const [expirationDate, setExpirationDate] = useState(args.expirationDate);
    useEffect(() => {
      setExpirationDate(args.expirationDate);
    }, [args.expirationDate]);
    return (
      <CardExpirationDateInput expirationDate={expirationDate} setExpirationDate={setExpirationDate} />
    );
  }
}

export const Default = {
  args: {
    expirationDate: "1226"
  }
};
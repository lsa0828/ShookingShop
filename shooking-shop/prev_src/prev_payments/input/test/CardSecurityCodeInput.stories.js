import { useEffect, useState } from "react";
import CardSecurityCodeInput from "../CardSecurityCodeInput";

export default {
  title: 'Payments/input/CardSecurityCodeInput',
  component: CardSecurityCodeInput,
  args: {
    securityCode: '',
  },
  render: (args) => {
    const [securityCode, setSecurityCode] = useState(args.securityCode);
    useEffect(() => {
      setSecurityCode(args.securityCode);
    }, [args.securityCode]);
    return (
      <CardSecurityCodeInput securityCode={securityCode} setSecurityCode={setSecurityCode} />
    );
  }
};

export const Default = {
  args: {
    securityCode: "123"
  }
};
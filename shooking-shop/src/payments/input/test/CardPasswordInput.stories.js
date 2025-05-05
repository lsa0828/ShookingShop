import { useEffect, useState } from "react";
import CardPasswordInput from "../CardPasswordInput";

export default {
  title: 'Payments/input/CardPasswordInput',
  component: CardPasswordInput,
  args: {
    password: '',
  },
  render: (args) => {
    const [password, setPassword] = useState(args.password);
    useEffect(() => {
      setPassword(args.password);
    }, [args.password]);
    return (
      <CardPasswordInput password={password} setPassword={setPassword} />
    );
  }
};

export const Default = {
  args: {
    password: ""
  }
};
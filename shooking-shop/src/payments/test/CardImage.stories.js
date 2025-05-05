import CardImage from "../CardImage";

export default {
  title: 'Payments/CardImage',
  component: CardImage,
  args: {
    card: {
      "cardNumber": '',
      "expirationDate": '',
      "cardholder": ''
    },
  },
  render: (args) => {
    return (
      <CardImage card={args.card} />
    );
  }
};

export const Default = {
  args: {
    card: {
      "cardNumber": "1234567812345678",
      "expirationDate": "0124",
      "cardholder": "132"
    }
  }
};
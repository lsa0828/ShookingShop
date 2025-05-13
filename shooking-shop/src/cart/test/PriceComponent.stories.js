import PriceComponent from "../PriceComponent";

export default {
  title: 'Cart/PriceComponent',
  component: PriceComponent,
  args: {
    name: "",
    price: ""
  },
  render: (args) => {
    return (
      <PriceComponent name={args.name} price={args.price} />
    );
  }
};

export const Default = {
  args: {
    name: "상품 금액",
    price: 50000
  }
};

export const BigPrice = {
  args: {
    name: "상품 금액",
    price: 500000000000000000000000000000000000000
  }
}
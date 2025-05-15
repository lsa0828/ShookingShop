import { RecoilRoot } from "recoil";
import TotalPrice from "../TotalPrice";
import { productInCartIdsAtom } from "../../recoil/atoms/productInCartIdsAtom";
import { productInCartAtomFamily } from "../../recoil/atoms/productInCartAtomFamily";

export default {
  title: 'Cart/TotalPrice',
  component: TotalPrice,
  args: {
    price1: 0,
    price2: 0
  },
  render: (args) => {
    return (
      <RecoilRoot
        initializeState={({set}) => {
          set(productInCartIdsAtom, [1, 2]);
          set(productInCartAtomFamily(1), {
            id: 1,
            image: "temp_shoes.jpeg",
            brand: "브랜드A",
            price: args.price1,
            num: 1,
          });
          set(productInCartAtomFamily(2), {
            id: 2,
            image: "temp_shoes2.jpeg",
            brand: "브랜드B",
            price: args.price2,
            num: 2,
          });
        }}>
        <TotalPrice />
      </RecoilRoot>
    );
  }
};

export const Default = {
  args: {
    price1: 12300,
    price2: 45600
  }
};

export const LowPrice = {
  args: {
    price1: 1000,
    price2: 4500
  }
};
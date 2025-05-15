import { RecoilRoot } from "recoil";
import InCartList from "../InCartList";
import { productInCartIdsAtom } from "../../recoil/atoms/productInCartIdsAtom";
import { productInCartAtomFamily } from "../../recoil/atoms/productInCartAtomFamily";

export default {
  title: 'Cart/InCartList',
  component: InCartList,
  args: {
  },
  render: () => {
    return (
      <RecoilRoot
        initializeState={({set}) => {
          set(productInCartIdsAtom, [1, 2]);
          set(productInCartAtomFamily(1), {
            id: 1,
            image: "temp_shoes.jpeg",
            brand: "브랜드A",
            price: 38000,
            num: 1,
          });
          set(productInCartAtomFamily(2), {
            id: 2,
            image: "temp_shoes2.jpeg",
            brand: "브랜드B",
            price: 33000,
            num: 2,
          });
        }}>
        <InCartList />
      </RecoilRoot>
    );
  }
};

export const Default = {
  args: {
  }
};
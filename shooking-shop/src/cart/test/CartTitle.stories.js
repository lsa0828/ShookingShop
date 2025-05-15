import { RecoilRoot } from "recoil";
import CartTitle from "../CartTitle";
import { productIdsAtom } from "../../recoil/atoms/productIdsAtom";
import { productAtomFamily } from "../../recoil/atoms/productAtomFamily";

export default {
  title: 'Cart/CartTitle',
  component: CartTitle,
  args: {
  },
  render: () => {
    return (
      <RecoilRoot
        initializeState={({set}) => {
          set(productIdsAtom, [2, 3]);
          set(productAtomFamily(2), {
            id: 2,
            inCart: true
          });
          set(productAtomFamily(3), {
            id: 3,
            inCart: true
          });
        }}>
        <CartTitle />
      </RecoilRoot>
    );
  }
};

export const Default = {
  args: {
  }
};
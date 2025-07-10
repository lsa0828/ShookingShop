import { RecoilRoot } from "recoil";
import CartPage from "../CartPage";
import { productIdsAtom } from "../../recoil/atoms/productIdsAtom";
import { productAtomFamily } from "../../recoil/atoms/productAtomFamily";

export default {
  title: 'Cart/CartPage',
  component: CartPage,
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
        <CartPage />
      </RecoilRoot>
    );
  }
};

export const Default = {
  args: {
  }
};
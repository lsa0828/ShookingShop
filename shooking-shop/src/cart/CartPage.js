import CartHeader from "./CartHeader";
import CartTitle from "./CartTitle";
import { atom, RecoilRoot } from "recoil";
import InCartList from "./InCartList";

export const productsInCart = atom({
  key: 'productsInCart',
  default: []
});

function CartPage() {
  return (
    <RecoilRoot>
      <CartHeader />
      <CartTitle />
      <InCartList />
    </RecoilRoot>
  );
}

export default CartPage;
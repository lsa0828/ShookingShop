import CartHeader from "./CartHeader";
import CartTitle from "./CartTitle";
import { atom, RecoilRoot } from "recoil";
import InCartList from "./InCartList";
import TotalPrice from "./TotalPrice";

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
      <TotalPrice />
    </RecoilRoot>
  );
}

export default CartPage;
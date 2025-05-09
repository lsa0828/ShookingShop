import CartHeader from "./CartHeader";
import CartTitle from "./CartTitle";
import { atom } from "recoil";
import InCartList from "./InCartList";
import TotalPrice from "./TotalPrice";
import PayInCartButton from "./PayInCartButton";

export const productsInCart = atom({
  key: 'productsInCart',
  default: []
});

function CartPage() {
  return (
    <div>
      <CartHeader />
      <CartTitle />
      <InCartList />
      <TotalPrice />
      <PayInCartButton />
    </div>
  );
}

export default CartPage;
import CartHeader from "./CartHeader";
import CartTitle from "./CartTitle";
import InCartList from "./InCartList";
import TotalPrice from "./TotalPrice";
import ButtonPayInCart from "./ButtonPayInCart";

function CartPage() {
  return (
    <div>
      <CartHeader />
      <CartTitle />
      <InCartList />
      <TotalPrice />
      <ButtonPayInCart />
    </div>
  );
}

export default CartPage;
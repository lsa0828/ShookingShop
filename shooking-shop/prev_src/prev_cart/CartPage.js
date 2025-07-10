import CartHeader from "./CartHeader";
import CartTitle from "./CartTitle";
import CartList from "./CartList";
import TotalPrice from "./TotalPrice";
import ButtonPayInCart from "./ButtonPayInCart";

function CartPage() {
  return (
    <div>
      <CartHeader />
      <CartTitle />
      <CartList />
      <TotalPrice />
      <ButtonPayInCart />
    </div>
  );
}

export default CartPage;
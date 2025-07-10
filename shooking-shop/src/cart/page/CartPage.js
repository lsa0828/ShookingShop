import ButtonCardInCart from "../button/ButtonCardInCart";
import CartHeader from "../CartHeader";
import CartTitle from "../CartTitle";
import CartList from "../CartList";
import CartPrice from "../CartPrice";

function CartPage() {
  return (
    <div>
      <CartHeader />
      <CartTitle />
      <CartList />
      <CartPrice />
      <ButtonCardInCart />
    </div>
  );
}

export default CartPage;
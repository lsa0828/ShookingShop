import CartHeader from "./CartHeader";
import CartTitle from "./CartTitle";
import InCartList from "./InCartList";
import TotalPrice from "./TotalPrice";
import PayInCartButton from "./PayInCartButton";

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
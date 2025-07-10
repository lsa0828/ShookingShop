import { useRecoilValue } from "recoil";
import { cartCountSelector } from "../recoil/selectors/cartCountSelector";
import { cartTotalQuantitySelector } from "../recoil/selectors/cartTotalQuantitySelector";
import Title from "../sample/Title";

function CartTitle() {
  const cartCount = useRecoilValue(cartCountSelector);
  const cartTotalQuantity = useRecoilValue(cartTotalQuantitySelector);
  const title = "장바구니";
  const detail = `현재 ${cartCount}개의 상품이 담겨있으며 총 수량은 ${cartTotalQuantity}개입니다.`;
  return (
    <Title title={title} detail={detail} />
  );
}

export default CartTitle;
import Title from "../Title";
import { useRecoilValue } from "recoil";
import { cartNumSelector } from "../recoil/selectors/cartNumSelector";

function CartTitle() {
  const cartNum = useRecoilValue(cartNumSelector);
  const title = "장바구니";
  const detail = `현재 ${cartNum}개의 상품이 담겨있습니다.`;
  return (
    <Title title={title} detail={detail} />
  );
}

export default CartTitle;
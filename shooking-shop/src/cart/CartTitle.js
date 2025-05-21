import Title from "../Title";
import { useRecoilValue } from "recoil";
import { cartNumberSelector } from "../recoil/selectors/cartNumberSelector";
import { cartTotalNumSelector } from "../recoil/selectors/cartTotalNumSelector";

function CartTitle() {
  const cartNum = useRecoilValue(cartNumberSelector);
  const cartTotalNum = useRecoilValue(cartTotalNumSelector);
  const title = "장바구니";
  const detail = `현재 ${cartNum}개의 상품이 담겨있으며 총 수량은 ${cartTotalNum}개입니다.`;
  return (
    <Title title={title} detail={detail} />
  );
}

export default CartTitle;
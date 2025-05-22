import Title from "../Title";
import { useRecoilValue } from "recoil";
import { cartCountSelector } from "../recoil/selectors/cartCountSelector";
import { cartTotalNumSelector } from "../recoil/selectors/cartTotalNumSelector";

function CartTitle() {
  const cartCount = useRecoilValue(cartCountSelector);
  const cartTotalNum = useRecoilValue(cartTotalNumSelector);
  const title = "장바구니";
  const detail = `현재 ${cartCount}개의 상품이 담겨있으며 총 수량은 ${cartTotalNum}개입니다.`;
  return (
    <Title title={title} detail={detail} />
  );
}

export default CartTitle;
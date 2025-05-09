import { useContext } from "react";
import Title from "../Title";
import { ShookingContext } from "../App";

function CartTitle(props) {
  const { productContents } = useContext(ShookingContext);
  const cartNum = productContents.filter(product => product.inCart).length;
  const title = "장바구니";
  const detail = `현재 ${cartNum}개의 상품이 담겨있습니다.`;
  return (
    <Title title={title} detail={detail} />
  );
}

export default CartTitle;
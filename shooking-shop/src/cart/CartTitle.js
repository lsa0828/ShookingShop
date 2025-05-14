import Title from "../Title";
import { useRecoilValue } from "recoil";
import { productsAtom } from "../recoil/atoms/productsAtom";

function CartTitle() {
  const products = useRecoilValue(productsAtom);
  const cartNum = products.filter(product => product.inCart).length;
  const title = "장바구니";
  const detail = `현재 ${cartNum}개의 상품이 담겨있습니다.`;
  return (
    <Title title={title} detail={detail} />
  );
}

export default CartTitle;
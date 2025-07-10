import { useRecoilValue } from "recoil";
import Title from "../Title";
import { productIdsAtom } from "../recoil/atoms/productIdsAtom";

function ProductListTitle() {
  const products = useRecoilValue(productIdsAtom);
  const title = "신발 상품 목록";
  const detail = `현재 ${products.length}개의 상품이 있습니다.`
  return (
    <Title title={title} detail={detail} />
  );
}

export default ProductListTitle;
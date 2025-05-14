import Title from "../Title";

function ProductListTitle({ num }) {
  const title = "신발 상품 목록";
  const detail = `현재 ${num}개의 상품이 있습니다.`
  return (
    <Title title={title} detail={detail} />
  );
}

export default ProductListTitle;
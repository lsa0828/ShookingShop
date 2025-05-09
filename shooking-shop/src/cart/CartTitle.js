import Title from "../Title";

function CartTitle(props) {
  const title = "장바구니";
  const detail = `현재 0개의 상품이 담겨있습니다.`;
  return (
    <Title title={title} detail={detail} />
  );
}

export default CartTitle;
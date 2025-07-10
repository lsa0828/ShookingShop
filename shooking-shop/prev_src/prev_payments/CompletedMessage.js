import { formatPrice } from "../utils/formatPrice";

function CompletedMessage({ totalPrice, productCount }) {
  return (
    <div className="text-center">
      <b className="text-[2rem]">결제 완료!</b>
      <p className="mb-7">총 {productCount}개의 상품을 구매하셨습니다.</p>
      <p className="font-bold">총 결제 금액</p>
      <p className="font-bold text-[1.6rem] mb-7">{formatPrice(totalPrice)}</p>
    </div>
  );
}

export default CompletedMessage;
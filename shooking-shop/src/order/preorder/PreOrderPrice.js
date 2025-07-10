import Price from "../../cart/Price";

function PreOrderPrice({ totalPrice, deliveryCharge }) {
  return (
    <div>
      <div>
        <Price name={"총 상품 금액"} price={totalPrice} />
        <Price name={"배송비"} price={deliveryCharge} />
      </div>
      <hr className="border-gray-300 my-4 md:mx-2 max-mx-1" />
      <div>
        <Price name={"총 결제 금액"} price={totalPrice+deliveryCharge} />
      </div>
    </div>
  )
}

export default PreOrderPrice;
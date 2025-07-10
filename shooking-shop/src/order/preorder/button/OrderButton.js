import BlackButton from "../../../sample/button/BlackButton";

function OrderButton({ handleOrderClick }) {
  return (
    <div className="w-[560px] max-w-full mx-auto">
      <BlackButton onClick={handleOrderClick}>
        결제하기
      </BlackButton>
    </div>
  );
}

export default OrderButton;
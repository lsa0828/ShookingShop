import { useNavigate } from "react-router-dom";
import YellowButton from "../YellowButton";
import { BASE_URL } from "../mocks/config";

function CardPayButton({totalPrice, productCount, isCart}) {
  const navigate = useNavigate();
  const handleCardPay = async () => {
    if (isCart) {
      await fetch(`${BASE_URL}/api/products/incart`, {method: 'DELETE'});
    }
    navigate('/pay/completed', {state: {totalPrice: totalPrice, productCount: productCount}});
  }
  return (
    <YellowButton onClick={handleCardPay}>
      이 카드로 결제하기
    </YellowButton>
  );
}

export default CardPayButton;
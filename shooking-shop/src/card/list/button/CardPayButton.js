import { useNavigate } from "react-router-dom";
import YellowButton from "../../../sample/button/YellowButton";
import { useSetRecoilState } from "recoil";
import { selectedCardAtom } from "../../../recoil/atoms/selectedCardAtom";

function CardPayButton({card, isCart, productId}) {
  const navigate = useNavigate();
  const setSelectedCard = useSetRecoilState(selectedCardAtom);
  
  const handlePayClick = () => {
    setSelectedCard(card);
    if (isCart) {
      navigate('/preorder/cart');
    } else {
      navigate(`/preorder/${productId}`);
    }
  }

  return (
    <YellowButton onClick={handlePayClick} data-testid="pay-button">
      이 카드로 결제하기
    </YellowButton>
  );
}

export default CardPayButton;
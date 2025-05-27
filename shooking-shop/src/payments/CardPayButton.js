import { useNavigate } from "react-router-dom";
import YellowButton from "../YellowButton";
import { BASE_URL } from "../mocks/config";
import { useRecoilCallback } from "recoil";
import { numInCartIdsAtom } from "../recoil/atoms/numInCartIdsAtom";
import { numInCartAtomFamily } from "../recoil/atoms/numInCartAtomFamily";

function CardPayButton({totalPrice, productCount, isCart}) {
  const navigate = useNavigate();
  
  const resetAllNumInCart = useRecoilCallback(({ snapshot, reset }) => async() => {
    const ids = await snapshot.getPromise(numInCartIdsAtom);
    ids.forEach(id => {
      reset(numInCartAtomFamily(id));
    });
    reset(numInCartIdsAtom);
  })
  
  const handleCardPay = async () => {
    if (isCart) {
      await fetch(`${BASE_URL}/api/products/incart`, {method: 'DELETE'});
      resetAllNumInCart();
    }
    navigate('/pay/completed', {state: {totalPrice: totalPrice, productCount: productCount}});
  }
  return (
    <YellowButton onClick={handleCardPay} data-testid="pay-button">
      이 카드로 결제하기
    </YellowButton>
  );
}

export default CardPayButton;
import { useNavigate } from "react-router-dom";

function CardPayButton() {
  const navigate = useNavigate();
  const handleCardPay = () => {
    navigate('/ShookingShop');
  }
  return (
    <div className="mx-4 my-6">
      <buttton className="p-3 w-[290px] bg-yellow-400 hover:bg-yellow-200 rounded-[30px]"
        onClick={handleCardPay}>
        이 카드로 결제하기
      </buttton>
    </div>
  );
}

export default CardPayButton;
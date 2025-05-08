import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../mocks/worker";

function CardPayButton() {
  const navigate = useNavigate();
  const handleCardPay = () => {
    navigate(`${BASE_URL}/`);
  }
  return (
    <div className="m-4">
      <button className="p-3 w-[290px] bg-yellow-400 hover:bg-yellow-200 rounded-[30px]"
        onClick={handleCardPay}>
        이 카드로 결제하기
      </button>
    </div>
  );
}

export default CardPayButton;
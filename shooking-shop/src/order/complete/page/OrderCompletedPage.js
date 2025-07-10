import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../sample/Header";
import YellowButton from "../../../sample/button/YellowButton";
import CompletedMessage from "../CompletedMessage";

function OrderCompletedPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice, totalQuantity } = location.state || {};
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow justify-center items-center">
        <div className="mx-6 480:mx-2 w-[480px] 480:w-full">
          <CompletedMessage totalPrice={totalPrice} totalQuantity={totalQuantity} />
          <YellowButton onClick={() => navigate('/')} data-testid="move-product-list">상품 목록 보기</YellowButton>
        </div>
      </div>
    </div>
  );
}

export default OrderCompletedPage;
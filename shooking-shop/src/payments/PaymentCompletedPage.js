import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import YellowButton from "../YellowButton";
import CompletedMessage from "./CompletedMessage";

function PaymentCompletedPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice, productCount } = location.state || {};
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow justify-center items-center">
        <div className="mx-6 480:mx-2 w-[480px] 480:w-full">
          <CompletedMessage totalPrice={totalPrice} productCount={productCount} />
          <YellowButton onClick={() => navigate('/')} data-testid="move-product-list">상품 목록 보기</YellowButton>
        </div>
      </div>
    </div>
  );
}

export default PaymentCompletedPage;
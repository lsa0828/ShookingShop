import { useLocation, useNavigate } from "react-router-dom";
import CardList from "./CardList";
import CardListHeader from "./CardListHeader";

function PaymentsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice, productCount } = location.state || {};
  return (
    <div>
      <CardListHeader />
      <CardList addClick={() => navigate('/register')} totalPrice={totalPrice} productCount={productCount} />
    </div>
  );
}

export default PaymentsPage;
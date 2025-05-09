import { useNavigate } from "react-router-dom";
import CardList from "./CardList";
import CardListHeader from "./CardListHeader";

function PaymentsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <CardListHeader />
      <CardList addClick={() => navigate('/register')} />
    </div>
  );
}

export default PaymentsPage;
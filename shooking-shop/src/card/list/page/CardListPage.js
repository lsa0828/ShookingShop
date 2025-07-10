import { useLocation, useNavigate } from "react-router-dom";
import CardListHeader from "../CardListHeader";
import CardList from "../CardList";

function CardListPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = location.state || {};

  const handleAddClick = () => {
    navigate('/card/add');
  }

  return (
    <div>
      <CardListHeader />
      <CardList handleAddClick={handleAddClick} isCart={false} productId={productId} />
    </div>
  );
}

export default CardListPage;
import { GoArrowLeft } from "react-icons/go";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function CartHeader() {
  const navigate = useNavigate();
  return (
    <Header>
      <div className="flex items-center justify-center">
        <button onClick={() => navigate('/')}>
          <GoArrowLeft className="text-[35px] text-white" />
        </button>
      </div>
    </Header>
  );
}

export default CartHeader;
import { GoArrowLeft } from "react-icons/go";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function CartHeader() {
  const navigate = useNavigate();
  const content = (
    <div className="flex items-center justify-center">
      <button onClick={() => navigate('/')}>
        <GoArrowLeft className="text-[35px] text-white" />
      </button>
    </div>
  )
  return (
    <Header content={content} />
  );
}

export default CartHeader;
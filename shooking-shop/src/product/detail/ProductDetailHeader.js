import { useNavigate } from "react-router-dom";
import Header from "../../sample/Header";
import { GoArrowLeft } from "react-icons/go";
import CartIconButton from "../../sample/button/CartIconButton";
import PersonIconButton from "../../sample/button/PersonIconButton";

function ProductDetailHeader() {
  const navigate = useNavigate();
  const handlerBackClick = () => {
    navigate(-1);
  }
  return (
    <Header>
      <button onClick={handlerBackClick}>
        <GoArrowLeft className="text-[35px] text-white" />
      </button>
      <div className="ml-auto flex items-center gap-6">
        <CartIconButton />
        <PersonIconButton />
      </div>
    </Header>
  );
}

export default ProductDetailHeader;
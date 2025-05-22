import { GoArrowLeft } from "react-icons/go";
import Header from "../Header";
import ButtonCartIcon from "../productList/ButtonCartIcon";
import { useNavigate } from "react-router-dom";

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
      <div className="ml-auto">
        <ButtonCartIcon />
      </div>
    </Header>
  );
}

export default ProductDetailHeader;
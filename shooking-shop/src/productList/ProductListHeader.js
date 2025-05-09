import { TbShoppingBag } from "react-icons/tb";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function ProductListHeader(props) {
  const navigate = useNavigate();
  const content = (
    <div className="relative w-fit ml-auto">
      <button onClick={() => navigate('/cart')}>
        <TbShoppingBag className="text-3xl text-white" />
        <div className="absolute -bottom-1 -right-2 bg-white text-black text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
          {props.cartNum}
        </div>
      </button>
    </div>
  );

  return (
    <Header content={content} />
  );
}

export default ProductListHeader;
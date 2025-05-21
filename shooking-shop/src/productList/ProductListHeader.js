import { TbShoppingBag } from "react-icons/tb";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartNumberSelector } from "../recoil/selectors/cartNumberSelector";

function ProductListHeader() {
  const navigate = useNavigate();
  const cartNum = useRecoilValue(cartNumberSelector);
  return (
    <Header>
      <div className="relative w-fit ml-auto">
        <button onClick={() => navigate('/cart')}>
          <TbShoppingBag className="text-3xl text-white" />
          <div className="absolute -bottom-1 -right-2 bg-white text-black text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
            {cartNum}
          </div>
        </button>
      </div>
    </Header>
  );
}

export default ProductListHeader;
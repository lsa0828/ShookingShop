import { useNavigate } from "react-router-dom";
import { TbShoppingBag } from "react-icons/tb";
import { useRecoilValue } from "recoil";
import { cartCountSelector } from "../recoil/selectors/cartCountSelector";

function ButtonCartIcon() {
  const navigate = useNavigate();
  const cartCount = useRecoilValue(cartCountSelector);
  return (
    <div className="relative w-fit">
      <button onClick={() => navigate('/cart')}>
        <TbShoppingBag className="text-3xl text-white" />
        <div className="absolute -bottom-1 -right-2 bg-white text-black text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
          {cartCount}
        </div>
      </button>
    </div>
  );
}

export default ButtonCartIcon;
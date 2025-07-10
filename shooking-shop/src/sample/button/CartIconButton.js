import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartCountSelector } from "../../recoil/selectors/cartCountSelector";
import { TbShoppingBag } from "react-icons/tb";
import { useEffect, useState } from "react";

function CartIconButton() {
  const navigate = useNavigate();
  const [isValidToken, setIsValidToken] = useState(false);
  const cartCount = useRecoilValue(cartCountSelector);

  useEffect(() => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (!token) return;
    setIsValidToken(true);
  }, []);
  
  if (isValidToken) {
    return (
      <div className="relative w-fit">
        <button onClick={() => navigate('/cart')} data-testid="cart-icon">
          <TbShoppingBag className="text-3xl text-white" />
          <div className="absolute -bottom-1 -right-2 bg-white text-black text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center"
            data-testid="cart-count">
            {cartCount}
          </div>
        </button>
      </div>
    );
  }
}

export default CartIconButton;
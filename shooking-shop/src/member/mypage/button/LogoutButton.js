import { useNavigate } from "react-router-dom";
import { fetchPostLogout } from "../../../api/member";
import { useResetProductInCartAtoms } from "../../../utils/useResetProductInCartAtoms";

function LogoutButton() {
  const navigate = useNavigate();
  const resetProductInCart = useResetProductInCartAtoms();
  
  const handleLogoutClick = async () => {
    await fetchPostLogout();
    await localStorage.removeItem("ACCESS_TOKEN");
    await resetProductInCart();
    navigate('/');
  }

  return (
    <div className="my-4 w-[560px] max-w-full mx-auto px-4">
      <button className="w-full p-3 text-[#FF0000] font-semibold bg-gray-100 hover:bg-gray-200 rounded-[30px]"
        onClick={handleLogoutClick}>
        로그아웃
      </button>
    </div>
  );
}

export default LogoutButton;
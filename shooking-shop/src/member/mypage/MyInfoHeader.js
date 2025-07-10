import { useNavigate } from "react-router-dom";
import Header from "../../sample/Header";
import { GoArrowLeft } from "react-icons/go";

function MyInfoHeader() {
  const navigate = useNavigate();
  return (
    <Header>
      <div className="flex items-center justify-center">
        <button onClick={() => navigate(-1)}>
          <GoArrowLeft className="text-[35px] text-white" />
        </button>
      </div>
    </Header>
  );
}

export default MyInfoHeader;
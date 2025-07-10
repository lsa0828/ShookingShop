import { IoPersonCircle } from "react-icons/io5";
import { fetchPostValidate } from "../../api/member";
import { useNavigate } from "react-router-dom";

function PersonIconButton() {
  const navigate = useNavigate();

  const handlerPersonClick = () => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      fetchPostValidate()
        .then(data => {
          if(data) {
            navigate('/mypage');
          } else {
            localStorage.removeItem("ACCESS_TOKEN");
            navigate('/login');
          }
        })
    } else {
      navigate('/login');
    }
  }

  return (
    <div>
      <button onClick={handlerPersonClick}>
        <IoPersonCircle className="text-3xl text-white" />
      </button>
    </div>
  )
}

export default PersonIconButton;
import { GoChevronLeft, GoX } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function LeftHeader(props) {
  const navigate = useNavigate();
  const title = props.title;
  const goLeft = props.goLeft || false;
  const goX = props.goX || false;
  return (
    <div className="flex justify-between h-16 mb-2 px-4 sm:px-12 md:px-40 lg:px-64 xl:px-80">
      <div className="flex justify-center items-center">
        {goLeft ? <button className="text-[35px]"
          onClick={() => navigate(-1)}>
          <GoChevronLeft />
        </button> : ''}
        <p className="ml-5 text-xl">{title}</p>
      </div>
      {goX ? <button  className="text-[35px]"
        onClick={() => navigate('/')}><GoX /></button> : ''}
    </div>
  );
}

export default LeftHeader;
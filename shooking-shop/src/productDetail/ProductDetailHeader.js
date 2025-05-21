import { GoArrowLeft } from "react-icons/go";
import Header from "../Header";
import ButtonCartIcon from "../productList/ButtonCartIcon";
import { Link } from "react-router-dom";

function ProductDetailHeader() {
  return (
    <Header>
      <Link to="/">
        <GoArrowLeft className="text-[35px] text-white" />
      </Link>
      <div className="ml-auto">
        <ButtonCartIcon />
      </div>
    </Header>
  );
}

export default ProductDetailHeader;
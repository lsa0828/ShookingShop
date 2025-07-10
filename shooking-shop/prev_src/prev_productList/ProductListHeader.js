import Header from "../Header";
import ButtonCartIcon from "./ButtonCartIcon";

function ProductListHeader() {
  return (
    <Header>
      <div className="ml-auto">
        <ButtonCartIcon />
      </div>
    </Header>
  );
}

export default ProductListHeader;
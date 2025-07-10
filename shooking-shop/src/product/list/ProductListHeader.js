import CartIconButton from "../../sample/button/CartIconButton";
import PersonIconButton from "../../sample/button/PersonIconButton";
import Header from "../../sample/Header";

function ProductListHeader() {
  return (
    <Header>
      <div className="ml-auto flex items-center gap-6">
        <CartIconButton />
        <PersonIconButton />
      </div>
    </Header>
  );
}

export default ProductListHeader;
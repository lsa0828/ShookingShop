import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ShookingContext } from "../App";

function ProductList(props) {
  const { productContents } = useContext(ShookingContext);
  const cards = productContents.map((product) => (
    <ProductCard key={product.id} productId={product.id} />
  ))
  return (
    <div className="flex justify-center p-6 480:py-6 480:px-2">
      <div className="grid grid-cols-2 gap-4 480:gap-2">
        {cards}
      </div>
    </div>
  )
}

export default ProductList;
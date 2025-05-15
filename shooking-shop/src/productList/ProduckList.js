import ProductCard from "./ProductCard";
import { useRecoilValue } from "recoil";
import { productIdsAtom } from "../recoil/atoms/productIdsAtom";

function ProductList() {
  const productIds = useRecoilValue(productIdsAtom);
  const cards = productIds.map((id) => (
    <ProductCard key={id} id={id} />
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
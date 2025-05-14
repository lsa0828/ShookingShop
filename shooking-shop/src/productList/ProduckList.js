import ProductCard from "./ProductCard";
import { useRecoilValue } from "recoil";
import { productsAtom } from "../recoil/atoms/productsAtom";

function ProductList() {
  const products = useRecoilValue(productsAtom);
  const cards = products.map((product) => (
    <ProductCard key={product.id} id={product.id} />
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
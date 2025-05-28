import { useRecoilValue } from "recoil";
import SameBrandCard from "./SameBrandCard";
import { sameBrandProductSelectorFamily } from "../recoil/selectors/sameBrandProductSelectorFamily";

function SameBrandProducts({ product }) {
  const products = useRecoilValue(sameBrandProductSelectorFamily(product.id));
  return (
    <div className="mt-8">
      <p className="mb-2 font-bold text-xl">관련 상품</p>
      <p>{product.brand}의 다른 신발은 어떠신가요?</p>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {products.map((product) => (
          <SameBrandCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default SameBrandProducts;
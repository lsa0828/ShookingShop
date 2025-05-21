import { useParams } from "react-router-dom";
import ProductDetailHeader from "./ProductDetailHeader";
import { useRecoilValue } from "recoil";
import { productAtomFamily } from "../recoil/atoms/productAtomFamily";
import ProductInfo from "./ProductInfo";

function ProductDetailPage() {
  const { id } = useParams();
  const product = useRecoilValue(productAtomFamily(Number(id)));
  return (
    <div>
      <ProductDetailHeader />
      <div className="flex flex-grow justify-center">
        <div className="m-6 480:mx-2 w-[480px] 480:w-full">
          <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="임시 신발 사진"
            className="mb-6 w-full h-auto rounded-3xl" />
          <ProductInfo id={id} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
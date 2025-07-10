import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { productAtomFamily } from "../../../recoil/atoms/productAtomFamily";
import ProductDetailHeader from "../ProductDetailHeader";
import ProductInfo from "../ProductInfo";
import SameBrandProducts from "../SameBrandProducts";
import { productImageAtomFamily } from "../../../recoil/atoms/productImageAtomFamily";

function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);
  const product = useRecoilValue(productAtomFamily(productId));
  const image = useRecoilValue(productImageAtomFamily(productId));
  return (
    <div>
      <ProductDetailHeader />
      <div className="flex flex-grow justify-center">
        <div className="m-6 480:mx-2 w-[480px] 480:w-full">
          <img src={image.url} alt={`product${product.id}_image`}
            className="mb-6 w-full h-auto rounded-3xl" />
          <ProductInfo id={productId} />
          <SameBrandProducts product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
import { useParams } from "react-router-dom";
import ProductDetailHeader from "./ProductDetailHeader";

function ProductDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <ProductDetailHeader />
      <p>{id}</p>
    </div>
  );
}

export default ProductDetailPage;
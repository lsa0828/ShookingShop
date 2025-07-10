import { Link } from "react-router-dom";
import { productImageAtomFamily } from "../../recoil/atoms/productImageAtomFamily";
import { useRecoilValue } from "recoil";

function SameBrandProductCard({ product }) {
  const image = useRecoilValue(productImageAtomFamily(product.id));
  return (
    <Link to={`/product/${product.id}`}>
      <img src={image.url} alt={`product${product.id}_image`}
        className="w-full aspect-square object-cover rounded-3xl" />
    </Link>
  );
}

export default SameBrandProductCard;
import { Link } from "react-router-dom";

function SameBrandCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="임시 신발 사진"
        className="w-full aspect-square object-cover rounded-3xl" />
    </Link>
  );
}

export default SameBrandCard;
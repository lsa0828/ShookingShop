import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useRecoilState } from "recoil";
import { productsAtom } from "../recoil/atoms/productsAtom";
import { BASE_URL } from "../mocks/config";

function ProductCard(props) {
  const id = props.id;
  const [products, setProducts] = useRecoilState(productsAtom);
  const content = products.find(item => item.id === id);
  const [inCart, setInCart] = useState(content.inCart);
  const navigate = useNavigate();

  const handleCartClick = () => {
    setInCart(!inCart);
    fetch(`${BASE_URL}/api/products/cart/${id}`, {method: 'PATCH'})
      .then(res => res.json())
      .then(data => {
        setProducts((prev) => 
          prev.map((item) =>
            item.id === id ? data : item
          )
        )
      });
  }

  return (
    <div className="border border-gray-200 rounded-xl w-52 480:w-full h-80">
      <img src={`${process.env.PUBLIC_URL}/${content.image}`} alt="임시 신발 사진"
        className="w-full h-1/2 object-cover rounded-t-xl" />
      <div className="p-4 480:p-2 w-full h-1/2 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-semibold">{content.brand}</h4>
          <p className="text-gray-500 text-sm mt-1 line-clamp-1">{content.description}</p>
          <p className="text-lg font-medium mt-2">{formatPrice(content.price)}</p>
          <div className="flex">
            {inCart ? 
            <button className="mt-2 px-3 480:px-2 py-1 bg-gray-200 text-black text-sm rounded-2xl"
              onClick={handleCartClick}>
              담김!
            </button> :
            <button className="mt-2 px-3 480:px-2 py-1 bg-black text-white text-sm rounded-2xl"
              onClick={handleCartClick}>
              담기
            </button>
            }
            <button className="mt-2 mx-2 px-3 480:px-2 py-1 bg-yellow-300 text-black text-sm rounded-2xl"
              onClick={() => navigate(`/pay`)}>
              구매
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
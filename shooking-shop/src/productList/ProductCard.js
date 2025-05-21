import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useRecoilState } from "recoil";
import { productAtomFamily } from "../recoil/atoms/productAtomFamily";
import { BASE_URL } from "../mocks/config";
import ButtonProductCard from "./ButtonProductCard";

function ProductCard({id}) {
  const [product, setProduct] = useRecoilState(productAtomFamily(id));
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  }

  const handleCartClick = useCallback((e) => {
    e.stopPropagation();
    fetch(`${BASE_URL}/api/products/cart/${id}`, {method: 'PATCH'})
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id, setProduct]);

  const handlePayClick = useCallback((e) => {
    e.stopPropagation();
    navigate('/pay', {state: {totalPrice: product.price, productCount: 1}});
  }, [navigate, product.price]);

  return (
    <div className="border border-gray-200 rounded-xl w-52 480:w-full h-80 cursor-pointer"
      onClick={handleCardClick}>
      <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="임시 신발 사진"
        className="w-full h-1/2 object-cover rounded-t-xl" />
      <div className="p-4 480:p-2 w-full h-1/2 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-semibold">{product.brand}</h4>
          <p className="text-gray-500 text-sm mt-1 line-clamp-1">{product.description}</p>
          <p className="text-lg font-medium mt-2">{formatPrice(product.price)}</p>
          <div className="flex">
            {product.inCart ? 
            <ButtonProductCard className="bg-gray-200 hover:bg-gray-100"
              onClick={handleCartClick}>
              담김!
            </ButtonProductCard> :
            <ButtonProductCard className="bg-black text-white hover:bg-gray-600"
              onClick={handleCartClick}>
              담기
            </ButtonProductCard>
            }
            <ButtonProductCard className="mx-2 bg-yellow-300 hover:bg-yellow-200"
              onClick={handlePayClick}>
              구매
            </ButtonProductCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
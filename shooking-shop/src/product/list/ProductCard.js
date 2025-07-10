import { useRecoilCallback, useRecoilValue, useSetRecoilState } from "recoil";
import { productAtomFamily } from "../../recoil/atoms/productAtomFamily";
import { productInCartIdsAtom } from "../../recoil/atoms/productInCartIdsAtom";
import { productInCartAtomFamily } from "../../recoil/atoms/productInCartAtomFamily";
import { productImageAtomFamily } from "../../recoil/atoms/productImageAtomFamily";
import { useNavigate } from "react-router-dom";
import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { fetchPatchCartById } from "../../api/cart";
import ProductCardButton from "./button/ProductCardButton";

function ProductCard({id}) {
  const product = useRecoilValue(productAtomFamily(id));
  const image = useRecoilValue(productImageAtomFamily(id));
  const setProductInCartIds = useSetRecoilState(productInCartIdsAtom);
  const productInCart = useRecoilValue(productInCartAtomFamily(id));
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/product/${id}`);
  }

  const toggleCart = useRecoilCallback(({set, reset}) => () => {
    fetchPatchCartById(id)
      .then(data => {
        if (data) {
          setProductInCartIds((prev) => {
            if (prev.includes(data.id)) return prev;
            return [...prev, data.id];
          });
          set(productInCartAtomFamily(id), data);
        } else {
          setProductInCartIds((prev) => prev.filter(productId => productId !== id));
          reset(productInCartAtomFamily(id));
        }
      });
  });

  const handleInCartClick = (e) => {
    e.stopPropagation();
    toggleCart();
  }

  const handleCardClick = (e) => {
    e.stopPropagation();
    navigate('/card', {state: {productId: product.id}});
  }

  return (
    <div className="border border-gray-200 rounded-xl w-52 480:w-full h-80 cursor-pointer"
      onClick={handleDetailClick} data-testid="product-card">
      <img src={image?.url || `${process.env.PUBLIC_URL}/temp_shoes.jpeg`} alt={`product${product.id}_image`}
        className="w-full h-1/2 object-cover rounded-t-xl" />
      <div className="p-4 480:p-2 w-full h-1/2 flex flex-col justify-between">
        <div>
          <p className="text-lg font-semibold">{product.brand}</p>
          <p className="text-gray-500 text-sm mt-1 line-clamp-1">{product.description}</p>
          <p className="text-lg font-medium mt-2">{formatPrice(product.price)}</p>
          <div className="flex">
            {(productInCart?.quantity || 0) > 0 ? 
            <ProductCardButton className="bg-gray-200 hover:bg-gray-100"
              onClick={handleInCartClick}>
              담김!
            </ProductCardButton> :
            <ProductCardButton className="bg-black text-white hover:bg-gray-600"
              onClick={handleInCartClick}>
              담기
            </ProductCardButton>
            }
            <ProductCardButton className="mx-2 bg-yellow-300 hover:bg-yellow-200"
              onClick={handleCardClick}>
              구매
            </ProductCardButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
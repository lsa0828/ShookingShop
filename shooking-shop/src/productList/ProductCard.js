import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from "recoil";
import { productAtomFamily } from "../recoil/atoms/productAtomFamily";
import ButtonProductCard from "./ButtonProductCard";
import { numInCartIdsAtom } from "../recoil/atoms/numInCartIdsAtom";
import { numInCartAtomFamily } from "../recoil/atoms/numInCartAtomFamily";
import { fetchPatchInCartById } from '../api/product';

function ProductCard({id}) {
  const product = useRecoilValue(productAtomFamily(id));
  const setNumInCartIds = useSetRecoilState(numInCartIdsAtom);
  const numInCart = useRecoilValue(numInCartAtomFamily(id));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  }

  const toggleCart = useRecoilCallback(({set, reset}) => () => {
    fetchPatchInCartById(id)
      .then(data => {
        if (data.num > 0) {
          setNumInCartIds((prev) => {
            if (prev.includes(data.id)) return prev;
            return [...prev, data.id];
          });
          set(numInCartAtomFamily(id), data);
        } else {
          setNumInCartIds((prev) => prev.filter(id => id !== data.id));
          reset(numInCartAtomFamily(id));
        }
      });
  })

  const handleCartClick = useCallback((e) => {
    e.stopPropagation();
    toggleCart();
  }, [toggleCart]);

  const handlePayClick = useCallback((e) => {
    e.stopPropagation();
    navigate('/pay', {state: {totalPrice: product.price, productCount: 1}});
  }, [navigate, product.price]);

  return (
    <div className="border border-gray-200 rounded-xl w-52 480:w-full h-80 cursor-pointer"
      onClick={handleClick} data-testid="product-card">
      <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="임시 신발 사진"
        className="w-full h-1/2 object-cover rounded-t-xl" />
      <div className="p-4 480:p-2 w-full h-1/2 flex flex-col justify-between">
        <div>
          <p className="text-lg font-semibold">{product.brand}</p>
          <p className="text-gray-500 text-sm mt-1 line-clamp-1">{product.description}</p>
          <p className="text-lg font-medium mt-2">{formatPrice(product.price)}</p>
          <div className="flex">
            {numInCart ? 
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
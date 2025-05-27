import { useCallback } from "react";
import { formatPrice } from "../utils/formatPrice";
import { useRecoilState, useRecoilValue } from "recoil";
import ControlNum from "./ControlNum";
import { numInCartAtomFamily } from "../recoil/atoms/numInCartAtomFamily";
import { productAtomFamily } from "../recoil/atoms/productAtomFamily";
import { fetchPatchInCartByIdAndNum } from "../api/product";

function ProductInCart({ id }) {
  const product = useRecoilValue(productAtomFamily(id));
  const [numInCart, setNumInCart] = useRecoilState(numInCartAtomFamily(id));

  const changeNum = useCallback((newNum) => {
    fetchPatchInCartByIdAndNum(id, newNum)
      .then(data => {
        setNumInCart(data);
      });
  }, [id, setNumInCart]);

  const handlerMinus = useCallback(() => {
    if(numInCart.num > 1) {
      changeNum(Number(numInCart.num) - 1);
    }
  }, [numInCart, changeNum]);

  const handlerPlus = useCallback(() => {
    changeNum(Number(numInCart.num) + 1);
  }, [numInCart, changeNum]);

  return (
    <div className="flex items-center gap-16">
      <div className="w-32 h-32 rounded-xl flex-shrink-0">
        <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="임시 신발 사진"
          className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="flex flex-col justify-between h-full py-2 flex-grow">
        <div className="mb-4">
          <p className="text-md font-semibold text-gray-600 line-clamp-1">{product.brand}</p>
          <p className="text-2xl font-bold text-gray-800">{formatPrice(product.price)}</p>
        </div>
        <div className="mt-2">
          <ControlNum handlerMinus={handlerMinus} handlerPlus={handlerPlus} num={numInCart.num} />
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
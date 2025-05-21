import { useCallback } from "react";
import { formatPrice } from "../utils/formatPrice";
import { useRecoilState } from "recoil";
import { BASE_URL } from "../mocks/config";
import { productInCartAtomFamily } from "../recoil/atoms/productInCartAtomFamily";
import ControlNum from "./ControlNum";

function ProductInCart({ id }) {
  const [product, setProduct] = useRecoilState(productInCartAtomFamily(id));
  const { image, brand, price, num } = product;

  const changeNum = useCallback((newNum) => {
    fetch(`${BASE_URL}/api/products/incart/${id}&${newNum}`, {method: 'PATCH'})
      .then(res => res.json())
      .then(data => {
        if (JSON.stringify(product) === JSON.stringify(data)) {
          return;
        }
        setProduct(data);
      });
  }, [id, product, setProduct]);

  const handlerMinus = useCallback(() => {
    if(Number(num) > 1) {
      changeNum(Number(num) - 1);
    }
  }, [num, changeNum]);

  const handlerPlus = useCallback(() => {
    changeNum(Number(num) + 1);
  }, [num, changeNum]);

  return (
    <div className="flex items-center gap-16">
      <div className="w-32 h-32 rounded-xl flex-shrink-0">
        <img src={`${process.env.PUBLIC_URL}/${image}`} alt="임시 신발 사진"
          className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="flex flex-col justify-between h-full py-2 flex-grow">
        <div className="mb-4">
          <p className="text-md font-semibold text-gray-600 line-clamp-1">{brand}</p>
          <p className="text-2xl font-bold text-gray-800">{formatPrice(price)}</p>
        </div>
        <div className="mt-2">
          <ControlNum handlerMinus={handlerMinus} handlerPlus={handlerPlus} num={num} />
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
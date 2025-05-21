import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import ControlNum from "../cart/ControlNum";
import BlackButton from "../BlackButton";
import { BASE_URL } from "../mocks/config";
import { useRecoilState } from "recoil";
import { productAtomFamily } from "../recoil/atoms/productAtomFamily";
import { productInCartAtomFamily } from "../recoil/atoms/productInCartAtomFamily";

function ProductInfo({ id }) {
  const [product, setProduct] = useRecoilState(productAtomFamily(Number(id)));
  const [productInCart, setProductInCart] = useRecoilState(productInCartAtomFamily(Number(id)));
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (productInCart) {
      setNum(productInCart.num);
    }
  }, [productInCart]);

  const handlerMinus = () => {
    if(num > 0) {
      setNum(Number(num) - 1);
    }
  }

  const handlerPlus = () => {
    setNum(Number(num) + 1);
  }

  const handlerInCart = () => {
    fetch(`${BASE_URL}/api/products/incart/${product.id}&${num}`, {method: 'PATCH'})
      .then(res => res.json())
      .then(data => {
        setProductInCart(data);
        setProduct({...product, inCart:true});
      });
  }

  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <div>
          <p className="font-bold text-3xl">{product.brand}</p>
          <p className="text-gray-600">{product.description}</p>
          <p className="mt-1 font-semibold text-xl">{formatPrice(product.price)}</p>
        </div>
        <ControlNum handlerMinus={handlerMinus} handlerPlus={handlerPlus}
          num={String(num).padStart(2, '0')} />
      </div>
      <BlackButton onClick={handlerInCart}>장바구니 담기</BlackButton>
    </div>
  );
}

export default ProductInfo;
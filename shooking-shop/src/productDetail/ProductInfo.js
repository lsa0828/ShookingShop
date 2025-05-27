import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import ControlNum from "../cart/ControlNum";
import BlackButton from "../BlackButton";
import { BASE_URL } from "../mocks/config";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { productAtomFamily } from "../recoil/atoms/productAtomFamily";
import { numInCartAtomFamily } from "../recoil/atoms/numInCartAtomFamily";
import { numInCartIdsAtom } from "../recoil/atoms/numInCartIdsAtom";
import Toast from "../Toast";

function ProductInfo({ id }) {
  const product = useRecoilValue(productAtomFamily(Number(id)));
  const setNumInCartIds = useSetRecoilState(numInCartIdsAtom);
  const [numInCart, setNumInCart] = useRecoilState(numInCartAtomFamily(Number(id)));
  const [num, setNum] = useState(0);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (numInCart) {
      setNum(numInCart.num);
    }
  }, [numInCart]);

  const handlerMinus = () => {
    if(num > 0) {
      setNum(Number(num) - 1);
    }
  }

  const handlerPlus = () => {
    setNum(Number(num) + 1);
  }

  const handlerCartClick = () => {
    fetch(`${BASE_URL}/api/products/incart/${product.id}/${num}`, {method: 'PATCH'})
      .then(res => res.json())
      .then(data => {
        if (data.num > 0) {
          setNumInCartIds((prev) => {
            if (prev.includes(data.id)) return prev;
            return [...prev, data.id];
          });
          setNumInCart(data);
        } else {
          setNumInCartIds((prev) => prev.filter(id => id !== data.id));
          setNumInCart(null);
        }
      });
    setToastMessage(`장바구니에 ${num}개 담김`);
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
      <BlackButton onClick={handlerCartClick} data-testid="detail-in-cart">장바구니 담기</BlackButton>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </div>
  );
}

export default ProductInfo;
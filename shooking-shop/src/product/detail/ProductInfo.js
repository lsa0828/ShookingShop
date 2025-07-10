import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { productAtomFamily } from "../../recoil/atoms/productAtomFamily";
import { productInCartIdsAtom } from "../../recoil/atoms/productInCartIdsAtom";
import { productInCartAtomFamily } from "../../recoil/atoms/productInCartAtomFamily";
import { useEffect, useState } from "react";
import { fetchPatchCartByIdAndQuantity } from "../../api/cart";
import { formatPrice } from "../../utils/formatPrice";
import ControlQuantity from "../../sample/ControlQuantity";
import BlackButton from "../../sample/button/BlackButton";
import Toast from "../../sample/Toast";

function ProductInfo({ id }) {
  const product = useRecoilValue(productAtomFamily(id));
  const setProductInCartIds = useSetRecoilState(productInCartIdsAtom);
  const [productInCart, setProductInCart] = useRecoilState(productInCartAtomFamily(id));
  const [quantity, setQuantity] = useState(1);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (productInCart) {
      setQuantity(productInCart.quantity);
    }
  }, [productInCart]);

  const handlerMinus = () => {
    if(quantity > 0) {
      setQuantity(Number(quantity) - 1);
    }
  }

  const handlerPlus = () => {
    setQuantity(Number(quantity) + 1);
  }

  const handlerCartClick = () => {
    fetchPatchCartByIdAndQuantity(product.id, quantity)
      .then(data => {
        if (data && data.quantity > 0) {
          setProductInCartIds((prev) => {
            if (prev.includes(data.id)) return prev;
            return [...prev, data.id];
          });
          setProductInCart(data);
        } else {
          setProductInCartIds((prev) => prev.filter(id => id !== product.id));
          setProductInCart(null);
        }
      });
    setToastMessage(`장바구니에 ${quantity}개 담김`);
  }

  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <div>
          <p className="font-bold text-3xl">{product.brand}</p>
          <p className="text-gray-600">{product.description}</p>
          <p className="mt-1 font-semibold text-xl">{formatPrice(product.price)}</p>
        </div>
        <ControlQuantity handlerMinus={handlerMinus} handlerPlus={handlerPlus}
          quantity={String(quantity).padStart(2, '0')} />
      </div>
      <BlackButton onClick={handlerCartClick} data-testid="detail-in-cart">장바구니 담기</BlackButton>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </div>
  );
}

export default ProductInfo;
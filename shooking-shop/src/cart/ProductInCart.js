import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { productInCartAtomFamily } from "../recoil/atoms/productInCartAtomFamily";
import { productImageAtomFamily } from "../recoil/atoms/productImageAtomFamily";
import { useCallback } from "react";
import { fetchDeleteCartById, fetchPatchCartByIdAndQuantity } from "../api/cart";
import { formatPrice } from "../utils/formatPrice";
import ControlQuantity from "../sample/ControlQuantity";
import { IoTrashOutline } from "react-icons/io5";
import { productInCartIdsAtom } from "../recoil/atoms/productInCartIdsAtom";

function ProductInCart({ id }) {
  const [productInCart, setProductInCart] = useRecoilState(productInCartAtomFamily(id));
  const resetProductInCart = useResetRecoilState(productInCartAtomFamily(id));
  const setCartIds = useSetRecoilState(productInCartIdsAtom);
  const image = useRecoilValue(productImageAtomFamily(id));

  const changeQuantity = useCallback((quantity) => {
    fetchPatchCartByIdAndQuantity(id, quantity)
      .then(data => {
        setProductInCart(data);
      });
  }, [id, setProductInCart]);

  const handlerMinus = useCallback(() => {
    if(productInCart.quantity > 1) {
      changeQuantity(Number(productInCart.quantity) - 1);
    }
  }, [productInCart, changeQuantity]);

  const handlerPlus = useCallback(() => {
    changeQuantity(Number(productInCart.quantity) + 1);
  }, [productInCart, changeQuantity]);

  const handlerDelete = useCallback(() => {
    fetchDeleteCartById(id);
    resetProductInCart();
    setCartIds(prev => prev.filter(productId => productId !== id));
  }, [id, resetProductInCart, setCartIds]);

  return (
    <div className="flex items-center gap-16 480:gap-6">
      <div className="w-32 h-32 rounded-xl flex-shrink-0">
        <img src={image?.url} alt={`product${id}_image`}
          className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="flex flex-col justify-between h-full py-2 flex-grow">
        <div className="mb-4">
          <p className="text-md font-semibold text-gray-600 line-clamp-1">{productInCart.brand}</p>
          <p className="text-2xl font-bold text-gray-800">{formatPrice(productInCart.price)}</p>
        </div>
        <div className="mt-2">
          <ControlQuantity handlerMinus={handlerMinus} handlerPlus={handlerPlus} quantity={productInCart.quantity} />
        </div>
      </div>
      <div>
        <button onClick={handlerDelete}>
          <IoTrashOutline className="text-2xl text-gray-600 hover:text-gray-400" />
        </button>
      </div>
    </div>
  );
}

export default ProductInCart;
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { productAtomFamily } from "../../recoil/atoms/productAtomFamily";
import { productImageAtomFamily } from "../../recoil/atoms/productImageAtomFamily";
import { productInCartAtomFamily } from "../../recoil/atoms/productInCartAtomFamily";
import { formatPrice } from "../../utils/formatPrice";
import PreOrderProductDetail from "./PreOrderProductDetail";

function PreOrderProduct({ productId, isCart }) {
  const product = useRecoilValue(productAtomFamily(productId));
  const image = useRecoilValue(productImageAtomFamily(productId));
  
  const productInCartLoadable = useRecoilValueLoadable(productInCartAtomFamily(productId));
  const productInCart = isCart ? productInCartLoadable.contents : null;
  const productQuantity = isCart ? productInCart.quantity : 1;
  const productTotalPrice = isCart ? (productInCart.quantity * productInCart.price) : product.price;
  
  return (
    <div className="flex items-center gap-3 sm:gap-16 bg-gray-100 my-2 p-2 rounded-lg">
      <div className="w-36 h-36 360:w-16 flex-shrink-0">
        <img src={image?.url} alt={`product${productId}_image`}
          className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="flex flex-col justify-between h-full py-2 flex-grow">
        <div className="mb-2">
          <p className="text-md font-semibold text-gray-800 line-clamp-1">{product.brand}</p>
          <p className="text-md font-semibold text-gray-500 line-clamp-1">{product.description}</p>
        </div>
        <div className="bg-gray-200 rounded-md text-sm text-gray-500">
          <PreOrderProductDetail name="상품 금액" detail={formatPrice(product.price)} />
          <PreOrderProductDetail name="선택 수량" detail={`x ${productQuantity}개`} />
        </div>
        <div className="font-semibold">
          <PreOrderProductDetail name="결제 금액" detail={formatPrice(productTotalPrice)} />
        </div>
      </div>
    </div>
  );
}

export default PreOrderProduct;
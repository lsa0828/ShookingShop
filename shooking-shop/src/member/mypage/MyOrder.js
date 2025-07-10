import { useRecoilValue } from "recoil";
import { productImageAtomFamily } from "../../recoil/atoms/productImageAtomFamily";
import PreOrderProductDetail from "../../order/preorder/PreOrderProductDetail";
import { formatPrice } from "../../utils/formatPrice";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function MyOrder({ order }) {
  const image = useRecoilValue(productImageAtomFamily(order.productId));
  const price = order.price;
  const quantity = order.quantity;
  const totalPrice = price * quantity;
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="border border-gray-200 rounded-lg my-2 p-2">
        <div className="flex items-center gap-3 sm:gap-16">
          <div className="w-36 h-36 360:w-16 flex-shrink-0">
            <img src={image?.url} alt={`product${order.productId}_image`}
              className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="flex flex-col justify-between h-full py-2 flex-grow">
            <div className="mb-2">
              <p className="text-md font-semibold text-gray-800 line-clamp-1">{order.brand}</p>
              <p className="text-md font-semibold text-gray-500 line-clamp-1">{order.description}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center gap-2 text-sm cursor-pointer mt-1 ml-auto"
            onClick={() => setVisible(!visible)}>
            <p>주문 정보</p>
            {visible ? (
              <IoIosArrowUp className="w-4 h-4" />
            ) : (
              <IoIosArrowDown className="w-4 h-4" />
            )}
          </div>
        </div>
        {visible && (
          <div className="bg-gray-100 rounded-md text-sm text-gray-500">
            <PreOrderProductDetail name="주문 날짜" detail={order.orderedAt} />
            <PreOrderProductDetail name="결제 카드 번호" detail={`${order.cardNumber}...`} />
            <PreOrderProductDetail name="상품 금액" detail={formatPrice(price)} />
            <PreOrderProductDetail name="선택 수량" detail={`x ${quantity}개`} />
            <PreOrderProductDetail name="결제 금액" detail={formatPrice(totalPrice)}
              className="font-bold" />
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrder;
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { fetchPostOrderByCart } from "../../../../api/order";
import PreOrderList from "../PreOrderList";
import OrderButton from "../../button/OrderButton";
import { cartTotalPriceSelector } from "../../../../recoil/selectors/cartTotalPriceSelector";
import { cartTotalQuantitySelector } from "../../../../recoil/selectors/cartTotalQuantitySelector";
import { useResetProductInCartAtoms } from "../../../../utils/useResetProductInCartAtoms";
import { selectedCardAtom } from "../../../../recoil/atoms/selectedCardAtom";
import PreOrderHeader from "../../PreOrderHeader";
import CustomPreOrder from "../../CustomPreOrder";
import CardImage from "../../../../card/CardImage";
import PreOrderPrice from "../../PreOrderPrice";
import { cartDeliveryChargeSelector } from "../../../../recoil/selectors/cartDeliveryChargeSelector";

function PreOrderInCartPage() {
  const navigate = useNavigate();
  const card = useRecoilValue(selectedCardAtom);
  const cartTotalPrice = useRecoilValue(cartTotalPriceSelector);
  const cartDeliveryCharge = useRecoilValue(cartDeliveryChargeSelector);
  const cartTotalQuantity = useRecoilValue(cartTotalQuantitySelector);
  const resetProductInCartAtoms = useResetProductInCartAtoms();

  const handleOrderClick = async () => {
    await fetchPostOrderByCart(card.id);
    await resetProductInCartAtoms();
    navigate('/order/completed', {state: {totalPrice: cartTotalPrice + cartDeliveryCharge, totalQuantity: cartTotalQuantity}});
  }

  return (
    <div>
      <PreOrderHeader />
      <CustomPreOrder title={'주문 상품'}>
        <PreOrderList />
      </CustomPreOrder>
      <CustomPreOrder title={'결제 카드'}>
        <CardImage card={card} />
      </CustomPreOrder>
      <CustomPreOrder title={'총 결제 금액'}>
        <PreOrderPrice totalPrice={cartTotalPrice} deliveryCharge={cartDeliveryCharge} />
      </CustomPreOrder>
      <OrderButton handleOrderClick={handleOrderClick} />
    </div>
  );
}

export default PreOrderInCartPage;
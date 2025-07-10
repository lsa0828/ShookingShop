import { useNavigate, useParams } from "react-router-dom";
import PreOrderProduct from "../../PreOrderProduct";
import OrderButton from "../../button/OrderButton";
import { fetchPostOrder } from "../../../../api/order";
import { productAtomFamily } from "../../../../recoil/atoms/productAtomFamily";
import { useRecoilValue } from "recoil";
import PreOrderHeader from "../../PreOrderHeader";
import CustomPreOrder from "../../CustomPreOrder";
import CardImage from "../../../../card/CardImage";
import { selectedCardAtom } from "../../../../recoil/atoms/selectedCardAtom";
import PreOrderPrice from "../../PreOrderPrice";

function PreOrderPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const productId = Number(id);
  const card = useRecoilValue(selectedCardAtom);
  const product = useRecoilValue(productAtomFamily(productId));
  const totalQuantity = 1;
  const totalPrice = product.price * totalQuantity;
  const deliveryCharge = totalPrice >= 100000 ? 0 : 3000;
  
  const handleOrderClick = async () => {
    await fetchPostOrder(productId, card.id, 1);
    navigate('/order/completed', {state: {totalPrice: totalPrice + deliveryCharge, totalQuantity: totalQuantity}});
  }

  return (
    <div>
      <PreOrderHeader />
      <CustomPreOrder title={'주문 상품'}>
        <PreOrderProduct productId={productId} isCart={false} />
      </CustomPreOrder>
      <CustomPreOrder title={'결제 카드'}>
        <CardImage card={card} />
      </CustomPreOrder>
      <CustomPreOrder title={'총 결제 금액'}>
        <PreOrderPrice totalPrice={totalPrice} deliveryCharge={deliveryCharge} />
      </CustomPreOrder>
      <OrderButton handleOrderClick={handleOrderClick} />
    </div>
  );
}

export default PreOrderPage;
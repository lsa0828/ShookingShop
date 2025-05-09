import { useRecoilValue } from "recoil";
import { productsInCart } from "./CartPage";
import PriceComponent from "./PriceComponent";

function TotalPrice() {
  const products = useRecoilValue(productsInCart);
  const productTotalPrice = products.reduce((acc, product) => {
      return acc + product.price * product.num;
    }, 0);
  const deliveryCharge = productTotalPrice >= 100000 ? 0 : 3000;
  return (
    <div className="px-6 480:px-4">
      <div>
        <PriceComponent name={"상품 금액"} price={productTotalPrice} />
        <PriceComponent name={"배송비"} price={deliveryCharge} />
      </div>
      <hr className="border-gray-300 my-4 mx-1 sm:mx-6 md:mx-32 lg:mx-56 xl:mx-80" />
      <div>
        <PriceComponent name={"총 금액"} price={productTotalPrice+deliveryCharge} />
      </div>
    </div>
  );
}

export default TotalPrice;
import { useRecoilValue } from "recoil";
import ProductInCart from "./ProductInCart";
import { productInCartIdsAtom } from "../recoil/atoms/productInCartIdsAtom";

function InCartList() {
  const productInCartIds = useRecoilValue(productInCartIdsAtom);
  return (
    <div className="pt-6 px-6 480:px-4">
      {productInCartIds.map((id) => (
        <div key={id}>
          <div className="flex justify-center">
            <ProductInCart id={id} />
          </div>
          <hr className="border-gray-300 my-4 mx-1 sm:mx-6 md:mx-32 lg:mx-56 xl:mx-80" />
        </div>
      ))}
    </div>
  );
}

export default InCartList;
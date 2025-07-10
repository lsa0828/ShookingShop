import { useRecoilValue } from "recoil";
import { productInCartIdsAtom } from "../../../recoil/atoms/productInCartIdsAtom";
import PreOrderProduct from "../PreOrderProduct";

function PreOrderList() {
  const productInCartIds = useRecoilValue(productInCartIdsAtom);
  return (
    <div>
      {productInCartIds.map((id) => (
        <PreOrderProduct key={id} productId={id} isCart={true} />
      ))}
    </div>
  );
}

export default PreOrderList;
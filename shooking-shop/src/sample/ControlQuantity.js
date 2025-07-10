import { IoAdd, IoRemove } from "react-icons/io5";
import QuantityHandleButton from "./button/QuantityHandleButton";

function ControlQuantity({handlerMinus, handlerPlus, quantity}) {
  return (
    <div className="flex items-center gap-2">
      <QuantityHandleButton onClick={handlerMinus} disabled={quantity <= 1}>
        <IoRemove />
      </QuantityHandleButton>
      <p className="px-2 text-lg text-center" data-testid="product-num">{quantity}</p>
      <QuantityHandleButton onClick={handlerPlus} data-testid="plus-button">
        <IoAdd />
      </QuantityHandleButton>
    </div>
  );
}

export default ControlQuantity;
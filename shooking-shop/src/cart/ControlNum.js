import { IoAdd, IoRemove } from "react-icons/io5";
import ButtonHandleNum from "./ButtonHandleNum";

function ControlNum({handlerMinus, handlerPlus, num}) {
  return (
    <div className="flex items-center gap-2">
      <ButtonHandleNum onClick={handlerMinus}>
        <IoRemove />
      </ButtonHandleNum>
      <p className="px-2 text-lg text-center" data-testid="product-num">{num}</p>
      <ButtonHandleNum onClick={handlerPlus} data-testid="plus-button">
        <IoAdd />
      </ButtonHandleNum>
    </div>
  );
}

export default ControlNum;
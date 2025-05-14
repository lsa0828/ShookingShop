import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { formatPrice } from "../utils/format";

function ProductInCart(props) {
  const { product, numHandler } = props;
  const [num, setNum] = useState(product.num);

  const handlerMinus = () => {
    if(num > 1) {
      const newNum = num-1;
      setNum(newNum);
      numHandler(product.id, newNum);
    }
  }

  const handlerPlus = () => {
    const newNum = num+1;
    setNum(newNum);
    numHandler(product.id, newNum);
  }

  return (
    <div className="flex items-center gap-16">
      <div className="w-32 h-32 rounded-xl flex-shrink-0">
        <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt="임시 신발 사진"
          className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="flex flex-col justify-between h-full py-2 flex-grow">
        <div className="mb-4">
          <p className="text-md font-semibold text-gray-600 line-clamp-1">{product.brand}</p>
          <p className="text-2xl font-bold text-gray-800">{formatPrice(product.price)}</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button className="px-1 py-1 bg-gray-200 text-xl rounded-xl"
            onClick={handlerMinus}>
            <IoRemove />
          </button>
          <p className="px-2 text-lg text-center">{num}</p>
          <button className="px-1 py-1 bg-gray-200 text-xl rounded-xl"
            onClick={handlerPlus}>
            <IoAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
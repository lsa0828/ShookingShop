import { formatPrice } from "../utils/formatPrice";

function Price(props) {
  return (
    <div className="flex flex-wrap items-center justify-between w-[320px] sm:w-[400px] lg:w-[520px] mx-auto px-2">
      <p className="text-lg font-bold text-gray-800">{props.name}</p>
      <p className="text-2xl font-bold text-gray-800 break-words">{formatPrice(props.price)}</p>
    </div>
  )
}

export default Price;
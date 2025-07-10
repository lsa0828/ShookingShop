import { formatPrice } from "../utils/formatPrice";

function PriceComponent(props) {
  return (
    <div className="flex flex-wrap items-center justify-between mx-2 sm:mx-24 md:mx-56 lg:mx-80 xl:mx-[500px]">
      <p className="text-lg font-bold text-gray-800">{props.name}</p>
      <p className="text-2xl font-bold text-gray-800 break-words max-w-[160px]">{formatPrice(props.price)}</p>
    </div>
  )
}

export default PriceComponent;
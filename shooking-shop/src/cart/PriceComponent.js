function PriceComponent(props) {
  const formatPrice = props.price.toLocaleString('ko-KR') + '원';
  return (
    <div className="flex items-center justify-between mx-2 sm:mx-24 md:mx-56 lg:mx-80 xl:mx-[500px]">
      <p className="text-lg font-bold text-gray-800">{props.name}</p>
      <p className="text-2xl font-bold text-gray-800">{formatPrice}</p>
    </div>
  )
}

export default PriceComponent;
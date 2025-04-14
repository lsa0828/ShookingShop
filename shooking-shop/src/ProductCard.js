function ProductCard() {
  return (
    <div className="border border-gray-200 rounded-xl w-full max-w-sm">
      <img src="temp_shoes.jpeg" alt="임시 신발 사진"
        className="w-full h-1/2 object-cover rounded-t-xl" />
      <div className="p-4 w-full h-1/2 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-semibold">브랜드A</h4>
          <p className="text-gray-500 text-sm mt-1">편안하고 착용감이 좋은 신발</p>
          <p className="text-lg font-medium mt-2">35,000원</p>
          <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded-2xl">담기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
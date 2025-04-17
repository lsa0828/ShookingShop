import { useState } from "react";

function ProductCard(props) {
  const content = props.content;
  const [inCart, setInCart] = useState(false);
  const handleCartClick = () => {
    setInCart(!inCart);
    props.addInCart(!inCart);
  }
  return (
    <div className="border border-gray-200 rounded-xl w-52 480:w-full h-80">
      <img src={`${process.env.PUBLIC_URL}/${content.image}`} alt="임시 신발 사진"
        className="w-full h-1/2 object-cover rounded-t-xl" />
      <div className="p-4 480:p-2 w-full h-1/2 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-semibold">{content.brand}</h4>
          <p className="text-gray-500 text-sm mt-1 line-clamp-1">{content.description}</p>
          <p className="text-lg font-medium mt-2">{content.price}</p>
          {inCart ? 
          <button className="mt-2 px-3 480:px-2 py-1 bg-gray-200 text-black text-sm rounded-2xl"
            onClick={handleCartClick}>
            담김!
          </button> :
          <button className="mt-2 px-3 480:px-2 py-1 bg-black text-white text-sm rounded-2xl"
            onClick={handleCartClick}>
            담기
          </button>
          }
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
import React from "react";

const ProductCardButton = React.memo(({children, className, onClick}) => {
  return (
    <button className={`mt-2 px-3 480:px-2 py-1 ${className} text-sm rounded-2xl`}
      onClick={onClick}>
      {children}
    </button>
  )
});

export default ProductCardButton;
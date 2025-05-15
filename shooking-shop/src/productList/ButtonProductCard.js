import React from "react";

function ProductCardButton({children, className, onClick}) {
  return (
    <button className={`mt-2 px-3 480:px-2 py-1 ${className} text-sm rounded-2xl`}
      onClick={onClick}>
      {children}
    </button>
  )
};

export default React.memo(ProductCardButton);
import React from "react";

function ButtonHandleNum({children, onClick}) {
  return (
    <button className="px-1 py-1 bg-gray-200 text-xl rounded-xl"
      onClick={onClick}>
      {children}
    </button>
  );
}

export default React.memo(ButtonHandleNum);
import React from "react";

const CustomInput = React.forwardRef(({ className = "", ...props }, ref) => {
  const baseClasses = "p-3 text-xl font-semibold bg-gray-200 rounded-lg focus:outline-none";
  return <input ref={ref} className={`${baseClasses} ${className}`} {...props} />;
});

export default CustomInput;
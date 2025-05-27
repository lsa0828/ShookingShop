function ButtonHandleNum({children, onClick, ...props}) {
  return (
    <button className="px-1 py-1 bg-gray-200 text-xl rounded-xl"
      onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default ButtonHandleNum;
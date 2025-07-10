function QuantityHandleButton({children, onClick, disabled, ...props}) {
  return (
    <button className={`p-1 bg-gray-200 text-xl rounded-xl ${disabled ? 'invisible' : ''}`}
      onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default QuantityHandleButton;
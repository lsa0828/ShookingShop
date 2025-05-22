function BlackButton({children, onClick}) {
  return (
    <div className="m-4">
      <button className="w-full p-3 bg-black hover:bg-gray-800 text-white rounded-[30px]"
        onClick={onClick}>{children}</button>
    </div>
  );
}

export default BlackButton;
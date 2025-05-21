function YellowButton({children, onClick}) {
  return (
    <div className="m-4">
      <button className="w-full p-3 bg-yellow-400 hover:bg-yellow-200 rounded-[30px]"
        onClick={onClick}>{children}</button>
    </div>
  );
}

export default YellowButton;
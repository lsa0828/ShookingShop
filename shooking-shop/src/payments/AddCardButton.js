import { IoAdd } from "react-icons/io5";

function AddCardButton({isNew, onClick}) {
  return (
    <div>
      <div className="flex justify-center">
        {isNew ? <p className="text-gray-700">새로운 카드를 등록해주세요.</p> : ''}
      </div>
      <button className="flex justify-center items-center m-4 w-[290px] h-[180px] bg-gray-100 text-gray-500 text-[2rem] font-bold rounded-lg hover:bg-gray-200"
        onClick={onClick}>
        <IoAdd />
      </button>
    </div>
  );
}

export default AddCardButton;
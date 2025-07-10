import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import Modal from "../../sample/Modal";
import CardList from "../../card/list/CardList";
import AddCardInput from "../../card/add/AddCardInput";

function ModalCard({ onClose }) {
  const [isAdd, setIsAdd] = useState(false);

  const handleAddClick = () => {
    setIsAdd(true);
  }

  const handleAfterAddClick = () => {
    setIsAdd(false);
  }

  return (
    <Modal onClose={onClose}>
      {!isAdd ? (
        <>
          <b className="text-xl">보유 카드</b>
          <CardList handleAddClick={handleAddClick} isCart={true} />
        </>
      ) : (
        <>
          <div className="flex items-center">
            <button className="text-2xl mr-2"
              onClick={handleAddClick}>
              <GoChevronLeft />
            </button>
            <b className="text-xl">카드 추가</b>
          </div>
          <AddCardInput GoClick={handleAfterAddClick} />
        </>
      )}
    </Modal>
  );
}

export default ModalCard;
import { useState } from "react";
import Modal from "../Modal";
import CardList from "../payments/CardList";
import RegisterCardInput from "../payments/RegisterCardInput";
import { GoChevronLeft } from "react-icons/go";

function ModalPayments({ onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  if (!isRegister) {
    return (
      <Modal onClose={onClose}>
        <b className="text-xl">보유 카드</b>
        <CardList addClick={() => setIsRegister(true)} />
      </Modal>
    );
  } else {
    return (
      <Modal onClose={onClose}>
        <div className="flex items-center">
          <button className="text-2xl mr-2"
            onClick={() => setIsRegister(false)}>
            <GoChevronLeft />
          </button>
          <b className="text-xl">카드 추가</b>
        </div>
        <RegisterCardInput registerClick={() => setIsRegister(false)} />
      </Modal>
    );
  }
}

export default ModalPayments;
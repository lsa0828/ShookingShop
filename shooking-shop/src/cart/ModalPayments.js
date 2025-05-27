import { useEffect, useState } from "react";
import Modal from "../Modal";
import CardList from "../payments/CardList";
import RegisterCardInput from "../payments/RegisterCardInput";
import { GoChevronLeft } from "react-icons/go";
import { fetchGetCardList } from "../api/card";

function ModalPayments({ onClose, totalPrice, productCount }) {
  const [isRegister, setIsRegister] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchGetCardList()
      .then(data => setCards(data));
  }, []);

  const handleRegisterClick = async () => {
    await fetchGetCardList()
      .then(data => setCards(data));
    setIsRegister(false);
  }

  return (
    <Modal onClose={onClose}>
      {!isRegister ? (
        <>
          <b className="text-xl">보유 카드</b>
          <CardList cards={cards} addClick={() => setIsRegister(true)}
            totalPrice={totalPrice} productCount={productCount} isCart={true} />
        </>
      ) : (
        <>
          <div className="flex items-center">
            <button className="text-2xl mr-2"
              onClick={handleRegisterClick}>
              <GoChevronLeft />
            </button>
            <b className="text-xl">카드 추가</b>
          </div>
          <RegisterCardInput registerClick={handleRegisterClick} />
        </>
      )}
    </Modal>
  );
}

export default ModalPayments;
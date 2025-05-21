import AddCardButton from "./AddCardButton";
import CardImage from "./CardImage";
import CardPayButton from "./CardPayButton";
import { useRecoilValue } from "recoil";
import { cardsAtom } from "../recoil/atoms/cardsAtom";

function CardList({addClick, totalPrice, productCount, isCart}) {
  const cards = useRecoilValue(cardsAtom);
  const isNew = cards.length === 0;
  return (
    <div className="flex justify-center">
      <div>
        {cards.map((card) => (
          <div key={card.id} className="mb-12">
            <CardImage card={card} />
            <CardPayButton totalPrice={totalPrice} productCount={productCount} isCart={isCart} />
          </div>
        ))}
        <AddCardButton isNew={isNew} onClick={addClick} />
      </div>
    </div>
  );
}

export default CardList;
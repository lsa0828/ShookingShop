import AddCardButton from "./AddCardButton";
import CardImage from "./CardImage";
import CardPayButton from "./CardPayButton";
import { useRecoilValue } from "recoil";
import { cardState } from "../App";

function CardList({addClick}) {
  const cards = useRecoilValue(cardState);
  const isNew = cards.length === 0;
  return (
    <div className="flex justify-center">
      <div>
        {cards.map((card, index) => (
          <div key={index} className="mb-12">
            <CardImage card={card} />
            <CardPayButton />
          </div>
        ))}
        <AddCardButton isNew={isNew} onClick={addClick} />
      </div>
    </div>
  );
}

export default CardList;
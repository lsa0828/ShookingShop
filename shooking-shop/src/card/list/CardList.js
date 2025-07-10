import { useEffect, useState } from "react";
import { fetchGetCardList } from "../../api/card";
import CardImage from "../CardImage";
import CardPayButton from "./button/CardPayButton";
import MoveToAddCardButton from "./button/MoveToAddCardButton";

function CardList({handleAddClick, isCart, productId}) {
  const [cards, setCards] = useState([]);
  const isEmpty = cards.length === 0;

  useEffect(() => {
    fetchGetCardList()
      .then(data => setCards(data));
  }, []);

  return (
    <div className="flex justify-center">
      <div>
        {cards.map((card) => (
          <div key={card.id} className="mb-12">
            <CardImage card={card} />
            <CardPayButton card={card} isCart={isCart} productId={productId} />
          </div>
        ))}
        <MoveToAddCardButton isEmpty={isEmpty} handleAddClick={handleAddClick} />
      </div>
    </div>
  );
}

export default CardList;
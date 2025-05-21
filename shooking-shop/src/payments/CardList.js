import AddCardButton from "./AddCardButton";
import CardImage from "./CardImage";
import CardPayButton from "./CardPayButton";
import { useEffect, useState } from "react";
import { BASE_URL } from "../mocks/config";

function CardList({addClick, totalPrice, productCount, isCart}) {
  const [cards, setCards] = useState([]);
  const isNew = cards.length === 0;

  useEffect(() => {
    fetch(`${BASE_URL}/api/cards`, {method: 'GET'})
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

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
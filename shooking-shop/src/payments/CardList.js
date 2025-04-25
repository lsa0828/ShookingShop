import { useState } from "react";
import CardListHeader from "./CardListHeader";
import AddCardButton from "./AddCardButton";

function CardList() {
  const [cards, setCards] = useState([]);
  return (
    <div>
      <CardListHeader />
      <div className="flex justify-center">
        <AddCardButton isNew={true} />
      </div>
    </div>
  );
}

export default CardList;
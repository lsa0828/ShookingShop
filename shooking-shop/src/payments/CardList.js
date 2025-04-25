import { useState } from "react";
import CardListHeader from "./CardListHeader";

function CardList() {
  const [cards, setCards] = useState([]);
  return (
    <div>
      <CardListHeader />
    </div>
  );
}

export default CardList;
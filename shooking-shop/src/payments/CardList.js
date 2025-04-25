import CardListHeader from "./CardListHeader";
import AddCardButton from "./AddCardButton";
import CardImage from "./CardImage";
import CardPayButton from "./CardPayButton";

function CardList({cards}) {
  const isNew = cards.length === 0;
  return (
    <div>
      <CardListHeader />
      <div className="flex justify-center">
        <div>
          {cards.map((card, index) => (
            <div key={index} className="mb-12">
              <CardImage card={card} />
              <CardPayButton />
            </div>
          ))}
          <AddCardButton isNew={isNew} />
        </div>
      </div>
    </div>
  );
}

export default CardList;
import ProductCard from "./ProductCard";

function ProductList(props) {
  const cards = [];
  const cardContents = props.cardContents;
  for(let i=0; i<cardContents.length; i++) {
    cards.push(<ProductCard key={i} content={cardContents[i]} addInCart={props.addInCart} />);
  }
  return (
    <div className="flex justify-center p-6 480:py-6 480:px-2">
      <div className="grid grid-cols-2 gap-4 480:gap-2">
        {cards}
      </div>
    </div>
  )
}

export default ProductList;
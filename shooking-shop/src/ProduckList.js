import ProductCard from "./ProductCard";

function ProductList() {
  const cards = [];
  for(let i=0; i<6; i++) {
    cards.push(<ProductCard key={i} />);
  }
  return (
    <div className="w-full flex justify-center p-4">
      <div className="grid grid-cols-2 gap-4">
        {cards}
      </div>
    </div>
  )
}

export default ProductList;
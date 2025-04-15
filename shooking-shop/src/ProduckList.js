import ProductCard from "./ProductCard";

function ProductList() {
  const cards = [];
  const cardContents = [
    {image: "temp_shoes.jpeg", brand: "브랜드A", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드B", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드C", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드D", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드E", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드F", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
  ]
  for(let i=0; i<cardContents.length; i++) {
    cards.push(<ProductCard key={i} content={cardContents[i]} />);
  }
  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-2 gap-4">
        {cards}
      </div>
    </div>
  )
}

export default ProductList;
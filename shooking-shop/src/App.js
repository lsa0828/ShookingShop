import { useState } from 'react';
import Header from './Header';
import ProductList from './ProduckList';
import Title from './Title';

function App() {
  const [cartNum, setCartNum] = useState(0);
  const cardContents = [
    {image: "temp_shoes.jpeg", brand: "브랜드A", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드B", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드C", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드D", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드E", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
    {image: "temp_shoes.jpeg", brand: "브랜드F", description: "편안하고 착용감이 좋은 신발", price: "35,000원"},
  ]
  const addInCart = (isAdd) => {
    if(isAdd) {
      setCartNum(cartNum + 1);
    } else {
      setCartNum(cartNum - 1);
    }
  }
  return (
    <div>
      <Header cartNum={cartNum} />
      <Title num={cardContents.length} />
      <ProductList cardContents={cardContents} addInCart={addInCart} />
    </div>
  );
}

export default App;

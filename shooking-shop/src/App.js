import { useState } from 'react';
import Header from './Header';
import ProductList from './ProduckList';
import Title from './Title';

function App() {
  const [cartNum, setCartNum] = useState(0);
  const cardContents = [
    {image: "temp_shoes.jpeg", brand: "브랜드A", description: "곰돌이 아기신발 운동화 아동 스니커즈", price: "35,000원", inCart: false},
    {image: "temp_shoes2.jpeg", brand: "브랜드B", description: "편안하고 착용감이 좋은 신발", price: "35,000원", inCart: false},
    {image: "temp_shoes3.jpeg", brand: "브랜드C", description: "편리한 건강신발 간호신발 효도화", price: "35,000원", inCart: false},
    {image: "temp_shoes4.jpeg", brand: "브랜드D", description: "알바 구두 단화 찍찍이 발편한 로퍼 근무화", price: "35,000원", inCart: false},
    {image: "temp_shoes5.jpeg", brand: "브랜드E", description: "신상 슈즈 추천템, 올해 추천 신발", price: "35,000원", inCart: false},
    {image: "temp_shoes6.jpeg", brand: "브랜드F", description: "남성 신발", price: "35,000원", inCart: false},
    {image: "temp_shoes7.jpeg", brand: "브랜드F", description: "여성 컴포트화", price: "35,000원", inCart: false},
  ]
  for(let i = 0; i < cardContents.length; i++) {
    if(cardContents[i].inCart) {
      setCartNum(cartNum + 1);
    }
  }
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

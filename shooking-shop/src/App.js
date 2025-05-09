import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './productList/ProductListPage';
import RegisterCard from './payments/RegisterCard';
import CardList from './payments/CardList';
import { createContext, useEffect, useState } from 'react';
import CartPage from './cart/CartPage';
import { BASE_URL } from './mocks/config';

export const ShookingContext = createContext();

function App() {
  const [productContents, setProductContents] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProductContents(data));
    fetch(`${BASE_URL}/api/cards`)
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  const updateIsCart = async (id) => {
    const res = await fetch(`${BASE_URL}/api/products/cart/${id}`, {method: 'PATCH'});
    const updatedProduct = await res.json();
    setProductContents((prevContents) =>
      prevContents.map((item) =>
        item.id === id ? updatedProduct : item
      )
    );
  }

  const addCard = async (newCard) => {
    const res = await fetch(`${BASE_URL}/api/cards/add`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newCard)
    });
    const savedCard = await res.json();
    setCards((prevCards) => [...prevCards, savedCard]);
  }

  return (
    <ShookingContext.Provider value={{productContents, updateIsCart}}>
      <BrowserRouter basename={BASE_URL}>
        <Routes>
          <Route path="" element={<ProductListPage />} />
          <Route path="/pay" element={<CardList cards={cards} />} />
          <Route path="/register" element={<RegisterCard addCard={addCard} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ShookingContext.Provider>
  );
}

export default App;
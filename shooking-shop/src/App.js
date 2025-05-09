import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './productList/ProductListPage';
import { createContext, useEffect, useState } from 'react';
import CartPage from './cart/CartPage';
import { BASE_URL } from './mocks/config';
import { atom, useSetRecoilState } from 'recoil';
import PaymentsPage from './payments/PaymentsPage';
import RegisterCardPage from './payments/RegisterCardPage';

export const ShookingContext = createContext();

export const cardState = atom({
  key: 'cardState',
  default: []
});

function App() {
  const [productContents, setProductContents] = useState([]);
  const setCards = useSetRecoilState(cardState);

  useEffect(() => {
    fetch(`${BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProductContents(data));
    fetch(`${BASE_URL}/api/cards`)
      .then(res => res.json())
      .then(data => setCards(data));
  }, [setCards]);

  const updateIsCart = async (id) => {
    const res = await fetch(`${BASE_URL}/api/products/cart/${id}`, {method: 'PATCH'});
    const updatedProduct = await res.json();
    setProductContents((prevContents) =>
      prevContents.map((item) =>
        item.id === id ? updatedProduct : item
      )
    );
  }

  return (
    <ShookingContext.Provider value={{productContents, updateIsCart}}>
      <BrowserRouter basename={BASE_URL}>
        <Routes>
          <Route path="" element={<ProductListPage />} />
          <Route path="/pay" element={<PaymentsPage />} />
          <Route path="/register" element={<RegisterCardPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ShookingContext.Provider>
  );
}

export default App;
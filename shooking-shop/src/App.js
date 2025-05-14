import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './productList/ProductListPage';
import { useEffect } from 'react';
import CartPage from './cart/CartPage';
import { BASE_URL } from './mocks/config';
import { useSetRecoilState } from 'recoil';
import PaymentsPage from './payments/PaymentsPage';
import RegisterCardPage from './payments/RegisterCardPage';
import { productsAtom } from './recoil/atoms/productsAtom';
import { cardsAtom } from './recoil/atoms/cardsAtom';

function App() {
  const setProducts = useSetRecoilState(productsAtom);
  const setCards = useSetRecoilState(cardsAtom);

  useEffect(() => {
    fetch(`${BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
    fetch(`${BASE_URL}/api/cards`)
      .then(res => res.json())
      .then(data => setCards(data));
  }, [setProducts, setCards]);

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route path="" element={<ProductListPage />} />
        <Route path="/pay" element={<PaymentsPage />} />
        <Route path="/register" element={<RegisterCardPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './productList/ProductListPage';
import { useEffect } from 'react';
import CartPage from './cart/CartPage';
import { BASE_URL } from './mocks/config';
import { useSetRecoilState } from 'recoil';
import PaymentsPage from './payments/PaymentsPage';
import RegisterCardPage from './payments/RegisterCardPage';
import { cardsAtom } from './recoil/atoms/cardsAtom';
import PaymentCompletedPage from './payments/PaymentCompletedPage';

function App() {
  const setCards = useSetRecoilState(cardsAtom);

  useEffect(() => {
    fetch(`${BASE_URL}/api/cards`)
      .then(res => res.json())
      .then(data => setCards(data));
  }, [setCards]);

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route path="" element={<ProductListPage />} />
        <Route path="/pay" element={<PaymentsPage />} />
        <Route path="/pay/completed" element={<PaymentCompletedPage />} />
        <Route path="/register" element={<RegisterCardPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
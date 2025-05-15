import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './productList/ProductListPage';
import { useEffect } from 'react';
import CartPage from './cart/CartPage';
import { BASE_URL } from './mocks/config';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import PaymentsPage from './payments/PaymentsPage';
import RegisterCardPage from './payments/RegisterCardPage';
import { productAtomFamily } from './recoil/atoms/productAtomFamily';
import { productIdsAtom } from './recoil/atoms/productIdsAtom';
import { cardsAtom } from './recoil/atoms/cardsAtom';

function App() {
  const setProductIds = useSetRecoilState(productIdsAtom);
  const setCards = useSetRecoilState(cardsAtom);

  const setProductAtoms = useRecoilCallback(({set}) => () => {
    fetch(`${BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProductIds(data.map(p => p.id));
        data.forEach((product) => {
          set(productAtomFamily(product.id), product)
        });
      });
  });

  useEffect(() => {
    setProductAtoms();
    fetch(`${BASE_URL}/api/cards`)
      .then(res => res.json())
      .then(data => setCards(data));
  });

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
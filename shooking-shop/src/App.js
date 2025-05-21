import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './productList/ProductListPage';
import { useEffect } from 'react';
import CartPage from './cart/CartPage';
import { BASE_URL } from './mocks/config';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import PaymentsPage from './payments/PaymentsPage';
import RegisterCardPage from './payments/RegisterCardPage';
import { cardsAtom } from './recoil/atoms/cardsAtom';
import PaymentCompletedPage from './payments/PaymentCompletedPage';
import NotFoundPage from './NotFoundPage';
import ProductDetailPage from './productDetail/ProductDetailPage';
import { productIdsAtom } from './recoil/atoms/productIdsAtom';
import { productAtomFamily } from './recoil/atoms/productAtomFamily';
import { numInCartAtomFamily } from './recoil/atoms/numInCartAtomFamily';
import { numInCartIdsAtom } from './recoil/atoms/numInCartIdsAtom';

function App() {
  const setProductIds = useSetRecoilState(productIdsAtom);
  const setNumInCartIds = useSetRecoilState(numInCartIdsAtom);
  const setCards = useSetRecoilState(cardsAtom);

  const setProductAtoms = useRecoilCallback(({set}) => () => {
    fetch(`${BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProductIds(data.map(p => p.id));
        data.forEach((product) => {
          set(productAtomFamily(product.id), product);
        });
      });
  });

  const setNumInCartAtoms = useRecoilCallback(({set}) => () => {
    fetch(`${BASE_URL}/api/products/incart`)
      .then(res => res.json())
      .then(data => {
        setNumInCartIds(data.map(p => p.id));
        data.forEach((product) => {
          set(numInCartAtomFamily(product.id), product);
        });
      })
  });

  useEffect(() => {
    setProductAtoms();
    setNumInCartAtoms();
    fetch(`${BASE_URL}/api/cards`)
      .then(res => res.json())
      .then(data => setCards(data));
  }, [setProductAtoms, setNumInCartAtoms, setCards]);

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route path="" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/pay" element={<PaymentsPage />} />
        <Route path="/pay/completed" element={<PaymentCompletedPage />} />
        <Route path="/register" element={<RegisterCardPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
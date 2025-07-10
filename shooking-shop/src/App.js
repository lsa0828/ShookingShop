import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { BASE_URL } from './mocks/config';
import ProductListPage from './product/list/page/ProductListPage';
import ProductDetailPage from './product/detail/page/ProductDetailPage';
import MemberRegisterPage from './member/register/page/MemberRegisterPage';
import MemberLoginPage from './member/login/page/MemberLoginPage';
import CartPage from './cart/page/CartPage';
import CardListPage from './card/list/page/CardListPage';
import AddCardPage from './card/add/page/AddCardPage';
import PreOrderPage from './order/preorder/single/page/PreOrderPage';
import PreOrderInCartPage from './order/preorder/cart/page/PreOrderInCartPage';
import OrderCompletedPage from './order/complete/page/OrderCompletedPage';
import NotFoundPage from './NotFoundPage';
import { fetchPostValidate } from './api/member';
import { useSetProductInCartAtoms } from './utils/useSetProductInCartAtoms';
import { useResetProductInCartAtoms } from './utils/useResetProductInCartAtoms';
import { useSetProductAtoms } from './utils/useSetProductAtoms';
import MyInfoPage from './member/mypage/page/MyInfoPage';

function App() {
  const setProductAtoms = useSetProductAtoms();
  const setProductInCartAtoms = useSetProductInCartAtoms();
  const resetProductInCartAtoms = useResetProductInCartAtoms();

  useEffect(() => {
    setProductAtoms();
    if (localStorage.getItem("ACCESS_TOKEN")) {
      fetchPostValidate()
        .then(data => {
          if(data) {
            setProductInCartAtoms();
          } else {
            localStorage.removeItem("ACCESS_TOKEN");
          }
        })
        .catch(error => {
          console.log("token validation failed", error);
          localStorage.removeItem("ACCESS_TOKEN");
        })
    } else {
      resetProductInCartAtoms();
    }
  }, [setProductAtoms, setProductInCartAtoms, resetProductInCartAtoms]);

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/register" element={<MemberRegisterPage />} />
        <Route path="/login" element={<MemberLoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/card" element={<CardListPage />} />
        <Route path="/card/add" element={<AddCardPage />} />
        <Route path="/preorder/:id" element={<PreOrderPage />} />
        <Route path="/preorder/cart" element={<PreOrderInCartPage />} />
        <Route path="/order/completed" element={<OrderCompletedPage />} />
        <Route path="/mypage" element={<MyInfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
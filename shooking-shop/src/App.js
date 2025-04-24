import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './productList/ProductListPage';
import PaymentsPage from './payments/PaymentsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ShookingShop" element={<ProductListPage />} />
        <Route path="/ShookingShop/pay" element={<PaymentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

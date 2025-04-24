import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './productList/ProductListPage';
import RegisterCard from './payments/RegisterCard';
import CardList from './payments/CardList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ShookingShop" element={<ProductListPage />} />
        <Route path="/ShookingShop/pay" element={<CardList />} />
        <Route path="/ShookingShop/register" element={<RegisterCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

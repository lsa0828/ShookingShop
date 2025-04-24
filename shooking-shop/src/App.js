import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './productList/ProductListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

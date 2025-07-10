import ProductList from './ProduckList';
import ProductListHeader from './ProductListHeader';
import ProductListTitle from './ProductListTitle';

function ProductListPage() {
  return (
    <div>
      <ProductListHeader />
      <ProductListTitle />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
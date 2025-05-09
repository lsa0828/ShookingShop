import { useContext } from 'react';
import ProductList from './ProduckList';
import { ShookingContext } from '../App';
import ProductListHeader from './ProductListHeader';
import ProductListTitle from './ProductListTitle';

function ProductListPage() {
  const { productContents } = useContext(ShookingContext);
  const cartNum = productContents.filter(product => product.inCart).length;
  return (
    <div>
      <ProductListHeader cartNum={cartNum} />
      <ProductListTitle num={productContents.length} />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
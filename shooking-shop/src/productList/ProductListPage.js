import { useContext } from 'react';
import Title from './Title';
import ProductList from './ProduckList';
import { ShookingContext } from '../App';
import ProductListHeader from './ProductListHeader';

function ProductListPage() {
  const { productContents } = useContext(ShookingContext);
  const cartNum = productContents.filter(product => product.inCart).length;
  return (
    <div>
      <ProductListHeader cartNum={cartNum} />
      <Title num={productContents.length} />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
import { useContext } from 'react';
import Header from './Header';
import Title from './Title';
import ProductList from './ProduckList';
import { ShookingContext } from '../App';

function ProductListPage() {
  const { productContents } = useContext(ShookingContext);
  const cartNum = productContents.filter(product => product.inCart).length;
  return (
    <div>
      <Header cartNum={cartNum} />
      <Title num={productContents.length} />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
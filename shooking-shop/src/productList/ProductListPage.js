import ProductList from './ProduckList';
import ProductListHeader from './ProductListHeader';
import ProductListTitle from './ProductListTitle';
import { useRecoilValue } from 'recoil';
import { productsAtom } from '../recoil/atoms/productsAtom';

function ProductListPage() {
  const products = useRecoilValue(productsAtom);
  const cartNum = products.filter(product => product.inCart).length;
  return (
    <div>
      <ProductListHeader cartNum={cartNum} />
      <ProductListTitle num={products.length} />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
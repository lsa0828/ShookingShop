import ProductList from './ProduckList';
import ProductListHeader from './ProductListHeader';
import ProductListTitle from './ProductListTitle';
import { useRecoilValue } from 'recoil';
import { cartNumSelector } from '../recoil/selectors/cartNumSelector';
import { productIdsAtom } from '../recoil/atoms/productIdsAtom';

function ProductListPage() {
  const productIds = useRecoilValue(productIdsAtom);
  const cartNum = useRecoilValue(cartNumSelector);
  return (
    <div>
      <ProductListHeader cartNum={cartNum} />
      <ProductListTitle num={productIds.length} />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
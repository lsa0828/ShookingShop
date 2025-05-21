import ProductList from './ProduckList';
import ProductListHeader from './ProductListHeader';
import ProductListTitle from './ProductListTitle';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { productIdsAtom } from '../recoil/atoms/productIdsAtom';
import { BASE_URL } from '../mocks/config';
import { productAtomFamily } from '../recoil/atoms/productAtomFamily';
import { useEffect } from 'react';

function ProductListPage() {
  const setProductIds = useSetRecoilState(productIdsAtom);

  const setProductAtoms = useRecoilCallback(({set}) => () => {
    fetch(`${BASE_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProductIds(data.map(p => p.id));
        data.forEach((product) => {
          set(productAtomFamily(product.id), product)
        });
      });
  });

  useEffect(() => {
    setProductAtoms();
  }, [setProductAtoms]);

  return (
    <div>
      <ProductListHeader />
      <ProductListTitle />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
import { useRecoilState } from "recoil";
import ProductInCart from "./ProductInCart";
import { productsInCart } from "./CartPage";
import { useEffect } from "react";
import { BASE_URL } from "../mocks/config";

function InCartList() {
  const [products, setProducts] = useRecoilState(productsInCart);
  
  useEffect(() => {
    fetch(`${BASE_URL}/api/products/incart`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [setProducts]);

  const numHandler = (id, newNum) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? {...p, num: newNum} : p
      )
    );
    fetch(`${BASE_URL}/api/products/incart/${id}&${newNum}`, {method: 'PATCH'});
  };

  return (
    <div className="pt-6 px-6 480:px-4">
      {products.map((product, index) => (
        <div key={index}>
          <div className="flex justify-center">
            <ProductInCart product={product} numHandler={numHandler} />
          </div>
          <hr className="border-gray-300 my-4 mx-1 sm:mx-6 md:mx-32 lg:mx-56 xl:mx-80" />
        </div>
      ))}
    </div>
  );
}

export default InCartList;
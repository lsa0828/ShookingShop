import CartHeader from "./CartHeader";
import CartTitle from "./CartTitle";
import InCartList from "./InCartList";
import TotalPrice from "./TotalPrice";
import ButtonPayInCart from "./ButtonPayInCart";
import { useRecoilCallback, useSetRecoilState } from "recoil";
import { productInCartIdsAtom } from "../recoil/atoms/productInCartIdsAtom";
import { BASE_URL } from "../mocks/config";
import { productInCartAtomFamily } from "../recoil/atoms/productInCartAtomFamily";
import React, { useEffect } from "react";

function CartPage() {
  const setProductInCartIds = useSetRecoilState(productInCartIdsAtom);
  
  const setProductInCartAtoms = useRecoilCallback(({set}) => () => {
    fetch(`${BASE_URL}/api/products/incart`)
      .then(res => res.json())
      .then(data => {
        setProductInCartIds(data.map(p => p.id));
        data.forEach((product) => {
          set(productInCartAtomFamily(product.id), product)
        })
      });
  });
    
  useEffect(() => {
    setProductInCartAtoms();
  }, [setProductInCartAtoms]);

  return (
    <div>
      <CartHeader />
      <CartTitle />
      <InCartList />
      <TotalPrice />
      <ButtonPayInCart />
    </div>
  );
}

export default CartPage;
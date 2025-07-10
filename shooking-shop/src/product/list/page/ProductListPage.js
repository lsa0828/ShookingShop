import { useEffect } from "react";
import { useResetProductInCartAtoms } from "../../../utils/useResetProductInCartAtoms";
import { useSetProductAtoms } from "../../../utils/useSetProductAtoms";
import { useSetProductInCartAtoms } from "../../../utils/useSetProductInCartAtoms";
import ProductList from "../ProductList";
import ProductListHeader from "../ProductListHeader";
import { fetchPostValidate } from "../../../api/member";

function ProductListPage() {
  const setProductAtoms = useSetProductAtoms();
  const setProductInCartAtoms = useSetProductInCartAtoms();
  const resetProductInCartAtoms = useResetProductInCartAtoms();
  
  useEffect(() => {
    setProductAtoms();
    if (localStorage.getItem("ACCESS_TOKEN")) {
      fetchPostValidate()
        .then(data => {
          if(data) {
            setProductInCartAtoms();
          } else {
            localStorage.removeItem("ACCESS_TOKEN");
          }
        })
    } else {
      resetProductInCartAtoms();
    }
  }, [setProductAtoms, setProductInCartAtoms, resetProductInCartAtoms]);

  return (
    <div>
      <ProductListHeader />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
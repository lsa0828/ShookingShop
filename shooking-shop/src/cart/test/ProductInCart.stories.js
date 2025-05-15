import { RecoilRoot } from "recoil";
import ProductInCart from "../ProductInCart";
import { productInCartAtomFamily } from "../../recoil/atoms/productInCartAtomFamily";

export default {
  title: 'Cart/ProductInCart',
  component: ProductInCart,
  args: {
    id: "",
    product: {
      id: "",
      image: "",
      brand: "",
      price: "",
      num: ""
    },
  },
  render: (args) => {
    return (
      <RecoilRoot
        initializeState={({set}) => {
          set(productInCartAtomFamily(args.id), args.product);
        }}>
        <ProductInCart id={args.id} />
      </RecoilRoot>
    );
  }
};

export const Default = {
  args: {
    id: 1,
    product: {
      id: 1,
      image: "temp_shoes7.jpeg",
      brand: "브랜드1234",
      price: 25500000,
      num: 1
    },
  }
};

export const NotImage = {
  args: {
    id: 1,
    product: {
      id: 1,
      image: "",
      brand: "브랜드1",
      price: 25500,
      num: 3
    },
  }
};

export const BigNum = {
  args: {
    id: 1,
    product: {
      id: 1,
      image: "temp_shoes7.jpeg",
      brand: "브랜드1",
      price: 25500,
      num: 33333
    },
  }
}

export const LongBrand = {
  args: {
    id: 1,
    product: {
      id: 1,
      image: "temp_shoes7.jpeg",
      brand: "브랜드111111111111111111111111111111111111111111111111111111111111",
      price: 25500,
      num: 33333
    },
  }
}
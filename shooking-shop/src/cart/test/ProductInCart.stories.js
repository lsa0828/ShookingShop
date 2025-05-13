import ProductInCart from "../ProductInCart";

export default {
  title: 'Cart/ProductInCart',
  component: ProductInCart,
  args: {
    product: {
      "id": "",
      "image": "",
      "brand": "",
      "price": "",
      "num": ""
    },
  },
  render: (args) => {
    return (
      <ProductInCart product={args.product} />
    );
  }
};

export const Default = {
  args: {
    product: {
      "id": 1,
      "image": "temp_shoes7.jpeg",
      "brand": "브랜드1234",
      "price": 25500000,
      "num": 1
    },
  }
};

export const NotImage = {
  args: {
    product: {
      "id": 1,
      "image": "",
      "brand": "브랜드1",
      "price": 25500,
      "num": 3
    },
  }
};

export const BigNum = {
  args: {
    product: {
      "id": 1,
      "image": "temp_shoes7.jpeg",
      "brand": "브랜드1",
      "price": 25500,
      "num": 33333
    },
  }
}

export const LongBrand = {
  args: {
    product: {
      "id": 1,
      "image": "temp_shoes7.jpeg",
      "brand": "브랜드111111111111111111111111111111111111111111111111111111111111",
      "price": 25500,
      "num": 33333
    },
  }
}
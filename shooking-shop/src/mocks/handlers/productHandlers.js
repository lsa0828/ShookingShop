import { http, HttpResponse } from "msw";
import { BASE_URL } from "../config";

const products = [
  {id: 1, image: "temp_shoes.jpeg", brand: "브랜드A", description: "곰돌이 아기신발 운동화 아동 스니커즈", price: 38000, inCart: false},
  {id: 2, image: "temp_shoes2.jpeg", brand: "브랜드B", description: "편안하고 착용감이 좋은 신발", price: 33000, inCart: true},
  {id: 3, image: "temp_shoes3.jpeg", brand: "브랜드C", description: "편리한 건강신발 간호신발 효도화", price: 27000, inCart: true},
  {id: 4, image: "temp_shoes4.jpeg", brand: "브랜드D", description: "알바 구두 단화 찍찍이 발편한 로퍼 근무화", price: 19000, inCart: false},
  {id: 5, image: "temp_shoes5.jpeg", brand: "브랜드E", description: "신상 슈즈 추천템, 올해 추천 신발", price: 26000, inCart: false},
  {id: 6, image: "temp_shoes6.jpeg", brand: "브랜드F", description: "남성 신발", price: 24000, inCart: false},
  {id: 7, image: "temp_shoes7.jpeg", brand: "브랜드F", description: "여성 컴포트화", price: 31000, inCart: false},
];

const cartMap = {
  2: 2,
  3: 1
};

export const productHandlers = [
  http.get(`${BASE_URL}/api/products`, () => {
    return HttpResponse.json(products);
  }),
  http.patch(`${BASE_URL}/api/products/cart/:id`, ({ params }) => {
    const { id } = params;
    const product = products.find(p => p.id === Number(id));
    if (product) {
      product.inCart = !product.inCart;
      if(product.inCart) {
        cartMap[product.id] = 1;
      } else {
        delete cartMap[product.id];
      }
      return HttpResponse.json(product);
    } else {
      return HttpResponse.json({message: 'Product not found'}, {status: 404});
    }
  }),
  http.get(`${BASE_URL}/api/products/incart`, () => {
    const inCartProducts = products
      .filter(p => cartMap[p.id])
      .map(p => ({
        id: p.id, 
        image: p.image,
        brand: p.brand,
        price: p.price,
        num: cartMap[p.id]
      }));
    return HttpResponse.json(inCartProducts);
  }),
  http.patch(`${BASE_URL}/api/products/incart/:id&:num`, ({ params }) => {
    const { id, num } = params;
    const product = products.find(p => p.id === Number(id));
    if (product) {
      product.inCart = true;
      cartMap[product.id] = num;
      return HttpResponse.json({id: product.id, image: product.image, brand: product.brand, price: product.price, num: cartMap[product.id]});
    } else {
      return HttpResponse.json({message: 'Product not found'}, {status: 404});
    }
  }),
  http.delete(`${BASE_URL}/api/products/incart`, () => {
    Object.keys(cartMap).forEach((key) => {
      const id = Number(key);
      const product = products.find((p) => p.id === id);
      if (product) {
        product.inCart = false;
      }
      delete cartMap[id];
    });
    return HttpResponse.json({message: 'Success Cart Initialization'});
  })
];
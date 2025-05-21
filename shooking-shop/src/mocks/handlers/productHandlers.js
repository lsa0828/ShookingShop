import { http, HttpResponse } from "msw";
import { BASE_URL } from "../config";

const products = [
  {id: 1, image: "temp_shoes.jpeg", brand: "브랜드A", description: "곰돌이 아기신발 운동화 아동 스니커즈", price: 38000},
  {id: 2, image: "temp_shoes2.jpeg", brand: "브랜드B", description: "편안하고 착용감이 좋은 신발", price: 33000},
  {id: 3, image: "temp_shoes3.jpeg", brand: "브랜드C", description: "편리한 건강신발 간호신발 효도화", price: 27000},
  {id: 4, image: "temp_shoes4.jpeg", brand: "브랜드D", description: "알바 구두 단화 찍찍이 발편한 로퍼 근무화", price: 19000},
  {id: 5, image: "temp_shoes5.jpeg", brand: "브랜드E", description: "신상 슈즈 추천템, 올해 추천 신발", price: 26000},
  {id: 6, image: "temp_shoes6.jpeg", brand: "브랜드F", description: "남성 신발", price: 24000},
  {id: 7, image: "temp_shoes7.jpeg", brand: "브랜드F", description: "여성 컴포트화", price: 31000},
];

let numsInCart = [
  {id: 2, num: 2},
  {id: 3, num: 1}
];

export const productHandlers = [
  http.get(`${BASE_URL}/api/products`, () => {
    return HttpResponse.json(products);
  }),
  http.get(`${BASE_URL}/api/products/incart`, () => {
    return HttpResponse.json(numsInCart);
  }),
  http.get(`${BASE_URL}/api/products/incart/:id`, ({ params }) => {
    const { id } = params;
    const productId = Number(id);
    const product = products.find(p => p.id === productId);
    if (!product) {
      return HttpResponse.json({message: 'Product not found'}, {status: 404});
    }
    const itemInCart = numsInCart.find(p => p.id === productId);
    if (itemInCart) {
      return HttpResponse.json({id: productId, num: itemInCart.num});
    } else {
      return HttpResponse.json({id: productId, num: 0});
    }
  }),
  http.patch(`${BASE_URL}/api/products/incart/:id`, ({ params }) => {
    const { id } = params;
    const productId = Number(id);
    const product = products.find(p => p.id === productId);
    if (!product) {
      return HttpResponse.json({message: 'Product not found'}, {status: 404});
    }
    const itemInCart = numsInCart.find(p => p.id === productId);
    if (itemInCart) {
      numsInCart = numsInCart.filter(p => p.id !== productId);
      return HttpResponse.json({id: productId, num: 0});
    } else {
      numsInCart.push({id: productId, num: 1});
      return HttpResponse.json({id: productId, num: 1});
    }
  }),
  http.patch(`${BASE_URL}/api/products/incart/:id/:num`, ({ params }) => {
    const { id, num } = params;
    const productId = Number(id);
    const parsedNum = Number(num);
    const product = products.find(p => p.id === productId);
    if (!product) {
      return HttpResponse.json({message: 'Product not found'}, {status: 404});
    }
    const itemInCart = numsInCart.find(p => p.id === productId);
    if (num > 0) {
      if (itemInCart) {
        itemInCart.num = parsedNum;
      } else {
        numsInCart.push({id: productId, num: parsedNum});
      }
    } else {
      if (itemInCart) {
        numsInCart = numsInCart.filter(p => p.id !== productId);
      }
    }
    return HttpResponse.json({id: productId, num: parsedNum});
  }),
  http.delete(`${BASE_URL}/api/products/incart`, () => {
    numsInCart = [];
    return HttpResponse.json({message: 'Success Cart Initialization'});
  })
];
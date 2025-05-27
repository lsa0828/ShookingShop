import { BASE_URL } from "../mocks/config";

export const fetchGetProductList = () => {
  return fetch(`${BASE_URL}/api/products`, {method: 'GET'})
    .then(res => res.json());
}

export const fetchGetProductsInCart = () => {
  return fetch(`${BASE_URL}/api/products/incart`, {method: 'GET'})
    .then(res => res.json());
}

export const fetchPatchInCartById = (id) => {
  return fetch(`${BASE_URL}/api/products/incart/${id}`, {method: 'PATCH'})
    .then(res => res.json());
}

export const fetchPatchInCartByIdAndNum = (id, num) => {
  return fetch(`${BASE_URL}/api/products/incart/${id}/${num}`, {method: 'PATCH'})
    .then(res => res.json());
}
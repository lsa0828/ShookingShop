import { call } from "./config/ApiService";

export const fetchGetProductList = () => {
  return call('/api/product/all', 'GET', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchGetProductImage = (productId) => {
  return call(`/api/product/image/${productId}`, 'GET', null)
    .then((response) => {
      if (response) {
        return response;
      }
    });
}
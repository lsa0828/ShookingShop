import { call } from "./config/ApiService";

export const fetchGetProductListInCart = () => {
  return call('/api/cart', 'GET', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchGetQuantityOfProductInCart = (productId) => {
  return call(`/api/cart/${productId}`, 'GET', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchPatchCartById = (productId) => {
  return call(`/api/cart/${productId}`, 'PATCH', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchPatchCartByIdAndQuantity = (productId, quantity) => {
  return call(`/api/cart/${productId}/${quantity}`, 'PATCH', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchDeleteCartList = () => {
  return call('/api/cart', 'DELETE', null);
}

export const fetchDeleteCartById = (productId) => {
  return call(`/api/cart/${productId}`, 'DELETE', null);
}
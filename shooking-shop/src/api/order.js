import { call } from "./config/ApiService"

export const fetchGetOrderList = () => {
  return call('/api/order', 'GET', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchPostOrder = (productId, cardId, quantity) => {
  return call(`/api/order/${productId}/${cardId}/${quantity}`, 'POST', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchPostOrderByCart = (cardId) => {
  return call(`/api/order/cart/${cardId}`, 'POST', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    })
}
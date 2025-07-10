import { call } from "./config/ApiService";

export const fetchGetCardList = () => {
  return call('/api/card', 'GET', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchGetCard = (cardId) => {
  return call(`/api/card/${cardId}`, 'GET', null)
    .then((response) => {
      if (response) {
        return response.data;
      }
    })
}

export const fetchPostCard = (newCard) => {
  return call('/api/card/add', 'POST', newCard)
    .then((response) => {
      if (response) {
        return response.data;
      }
    });
}

export const fetchDeleteCard = (cardId) => {
  return call(`/api/card/${cardId}`, 'DELETE', null);
}
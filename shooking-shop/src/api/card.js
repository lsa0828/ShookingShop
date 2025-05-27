import { BASE_URL } from "../mocks/config";

export const fetchGetCardList = () => {
  return fetch(`${BASE_URL}/api/cards`, {method: 'GET'})
    .then(res => res.json());
}

export const fetchPostCard = (newCard) => {
  return fetch(`${BASE_URL}/api/cards/add`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newCard)
  });
}
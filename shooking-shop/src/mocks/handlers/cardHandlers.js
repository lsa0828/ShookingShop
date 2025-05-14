import { http, HttpResponse } from "msw";
import { BASE_URL } from "../config";
/*
const cards = [
  {
    "id": "random",
    "cardNumber": "1234567890123456",
    "expirationDate": "0326",
    "cardholder": "lee",
    "securityCode": "123",
    "password": "12"
  }
];*/

const cards = [];

export const cardHandlers = [
  http.get(`${BASE_URL}/api/cards`, () => {
    return HttpResponse.json(cards);
  }),
  http.post(`${BASE_URL}/api/cards/add`, async ({ request }) => {
    const newCard = await request.json();
    const newId = crypto.randomUUID();
    newCard.id = newId;
    cards.push(newCard);
    return HttpResponse.json(newCard);
  })
];
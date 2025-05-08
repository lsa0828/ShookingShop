import { http, HttpResponse } from "msw";

const cards = [
  {
    "cardNumber": "1234567890123456",
    "expirationDate": "0326",
    "cardholder": "lee",
    "securityCode": "123",
    "password": "12"
  }
];

export const cardHandlers = [
  http.get('/api/cards', () => {
    return HttpResponse.json(cards);
  }),
  http.post('/api/cards/add', async ({ request }) => {
    const newCard = await request.json();
    cards.push(newCard);
    return HttpResponse.json(newCard);
  })
];
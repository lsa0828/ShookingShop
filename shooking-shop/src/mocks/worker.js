import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

export const BASE_URL = process.env.NODE_ENV === 'production' ? '/ShookingShop' : '';
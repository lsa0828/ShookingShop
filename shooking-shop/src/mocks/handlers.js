import { cardHandlers } from "./handlers/cardHandlers";
import { productHandlers } from "./handlers/productHandlers";

export const handlers = [...productHandlers, ...cardHandlers];
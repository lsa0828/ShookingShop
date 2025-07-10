import React from "react";
import { maskDate } from "./utils/maskDate";
import { maskNumber } from "./utils/maskNumber";

function CardImage({ card }) {
  return (
    <div className="m-4 pt-12 px-4 w-full max-w-[300px] h-[180px] sm:h-[180px] h-[160px] bg-[#353535] text-white text-xl tracking-widest rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.25)] mx-auto">
      <div className="mb-3 w-14 h-8 bg-[#C8BB70] rounded-lg" />
      <p className="flex justify-center mb-1 min-h-[1.75rem] break-all text-center">
        {maskNumber(card.cardNumber)}
      </p>
      <div className="flex justify-between px-1">
        <p className="truncate max-w-[60%]">{card.cardholder?.slice(0, 30) || 'NAME'}</p>
        <p className="whitespace-nowrap">{maskDate(card.expirationDate) || 'MM/YY'}</p>
      </div>
    </div>
  );
}

export default React.memo(CardImage);
import React from "react";
import { maskDate } from "./input/utils/maskDate";
import { maskNumber } from "./input/utils/maskNumber";

function CardImage({card}) {
  return (
    <div className="m-4 pt-16 px-6 w-[300px] h-[180px] bg-[#353535] text-white text-xl tracking-widest rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.25)]">
      <div className="mb-3 w-14 h-8 bg-[#C8BB70] rounded-lg" />
      <p className="flex justify-center mb-1 min-h-[1.75rem]">{maskNumber(card.cardNumber)}</p>
      <div className="flex justify-between px-1">
        <p>{card.cardholder.slice(0, 30) || 'NAME'}</p>
        <p>{maskDate(card.expirationDate) || 'MM/YY'}</p>
      </div>
    </div>
  );
}

export default React.memo(CardImage);
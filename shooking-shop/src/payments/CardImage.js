function CardImage({cardNumber, cardholder, expirationDate}) {
  const maskedCardNumber = cardNumber
    .split('')
    .map((d, i) => (i < 8 ? d : '●'))
    .join('')
    .replace(/(.{4})/g, '$1 ')
    .replace(/\s$/, '');
  const maskedExpirationDate = expirationDate
    .replace(/(.{2})/g, '$1/').replace(/\/$/, '');
  
  return (
    <div className="m-4 pt-16 px-6 w-[290px] h-[180px] bg-[#353535] text-white text-xl tracking-widest rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.25)]">
      <div className="mb-3 w-14 h-8 bg-[#C8BB70] rounded-lg"></div>
      <p className="flex justify-center mb-1 min-h-[1.75rem]">{maskedCardNumber}</p>
      <div className="flex justify-between px-1">
        <p>{cardholder || 'NAME'}</p>
        <p>{maskedExpirationDate || 'MM/YY'}</p>
      </div>
    </div>
  );
}

export default CardImage;
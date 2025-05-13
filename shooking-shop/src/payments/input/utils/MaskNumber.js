export const maskNumber = (digits) => {
  const maskedDigits = digits.replace(/\D/g, '').slice(0, 16)
    .split('')
    .map((d, i) => (i < 8 ? d : '●'))
    .join('');
  return maskedDigits.replace(/(.{4})/g, '$1-').replace(/-$/, '');
};
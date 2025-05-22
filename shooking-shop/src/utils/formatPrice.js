export const formatPrice = (price) => {
  if (typeof price !== 'number') return '-원';
  return price.toLocaleString('ko-KR') + '원';
}
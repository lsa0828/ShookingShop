export const maskDate = (date) => {
  if (date.length >= 2) {
    const mm = date.slice(0, 2);
    if (Number(mm) < 1 || Number(mm) > 12) return '';
    return date.slice(0, 4).replace(/(.{2})/g, '$1 / ').replace(/ \/ $/, '');
  } else if (date.length === 1) {
    if (['0', '1'].includes(date[0])) {
      return date.slice(0, 4).replace(/(.{2})/g, '$1 / ').replace(/ \/ $/, '');
    } else {
      return '';
    }
  } else {
    return '';
  }
};
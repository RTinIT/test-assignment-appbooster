const addZero = (v) => {
  return +v < 10 ? "0" + v : v;
};

const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  return `${year}-${month}-${day}`;
};

const handleRate = (amount, rate) => {
  const res = (amount * rate).toFixed(2);
  if (+res > Number.MAX_SAFE_INTEGER) return "Warning! The digit is too big.";
  if (+res < Number.MIN_SAFE_INTEGER) return "Warning! The digit is too small.";
  return res;
};

export { getDate, handleRate };

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

export { getDate };

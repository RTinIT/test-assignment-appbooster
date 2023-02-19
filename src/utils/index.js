const getKey = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};

const getValue = (str, num = 1) => {
  const arr = str.split(" ");
  return arr[num];
};

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

export { getKey, getValue, getDate };

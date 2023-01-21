export const getKey = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};

export const getValue = (str, num = 1) => {
  const arr = str.split(" ");
  return arr[num];
};

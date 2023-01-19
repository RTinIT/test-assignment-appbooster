export const getKey = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};

export const round = (value) => {
  if (typeof value === "string") {
    const num = +value;
    return num.toFixed(2);
  }
  console.log(value);
  return value.toFixed(2);
};

export const getValue = (str, num = 1) => {
  const arr = str.split(" ");
  return arr[num];
};

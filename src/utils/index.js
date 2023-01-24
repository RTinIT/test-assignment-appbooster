export const getKey = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};

export const getValue = (str, num = 1) => {
  const arr = str.split(" ");
  return arr[num];
};

export const ifIsEmptySetMessage = (value, setMessage, message) => {
  if (!value) {
    setMessage(message);
    return 0;
  } else {
    setMessage("");
    return 1;
  }
};

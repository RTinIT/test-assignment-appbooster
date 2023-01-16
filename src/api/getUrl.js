export const getUrl = (params) => {
  const baseUrl =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

  if (!params) {
    return baseUrl;
  }

  return `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${params}.json`;
};

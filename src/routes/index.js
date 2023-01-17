import Converter from "../pages/Converter";
import CurrencyExchangeRate from "../pages/CurrencyExchangeRate";

export const routes = [
  { path: "/test-assignment-appbooster/converter", element: Converter },
  {
    path: "/test-assignment-appbooster/currencies-exchange-rate",
    element: CurrencyExchangeRate,
    exact: true,
  },
];

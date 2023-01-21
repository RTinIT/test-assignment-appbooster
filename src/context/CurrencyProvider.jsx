import React, { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getUrl } from "../api/getUrl";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [input, setInput] = useState("15 usd in rub");
  const [allCurrenciesCodes] = useFetch(getUrl());
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const [amount, selectedCurrency, , targetCurrency] = input.split(" ");

    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCurrency}/${targetCurrency}.json`
    )
      .then((data) => data.json())
      .then((data) => setResult(amount * data[targetCurrency]));
  };

  const setCurrency = (value) => {
    setInput(value);
  };

  return (
    <CurrencyContext.Provider
      value={{
        input,
        result,
        setCurrency,
        handleSubmit,
        allCurrenciesCodes,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

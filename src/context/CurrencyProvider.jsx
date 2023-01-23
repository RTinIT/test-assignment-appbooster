import React, { createContext, useContext, useState } from "react";
import { useCurrencyNames } from "./CurrencyNamesProvider";
import { baseUrl } from "../api/baseUrl";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [input, setInput] = useState("15 usd in rub");
  const [result, setResult] = useState("");
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState(() => {
    const [, selCurr] = input.split(" ");
    return selCurr;
  });
  const { data } = useCurrencyNames();

  const handleSubmit = (event) => {
    event.preventDefault();
    const [amount, selectedCurrency, , targetCurrency] = input.split(" ");

    fetch(`${baseUrl}/${selectedCurrency}/${targetCurrency}.json`)
      .then((data) => data.json())
      .then((data) => {
        const rate = (amount * data[targetCurrency]).toFixed(2);
        setResult(rate);
      });
  };

  const setCurrency = (value) => {
    setInput(value);
    const [, newCurrCode] = value.split(" ");
    setSelectedCurrencyCode(newCurrCode);
  };

  const getSelectedCurrName = () => {
    if (!data) return;
    return data[selectedCurrencyCode];
  };

  return (
    <CurrencyContext.Provider
      value={{
        input,
        result,
        setCurrency,
        handleSubmit,
        selectedCurrencyCode,
        selectedCurrencyName: getSelectedCurrName(),
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

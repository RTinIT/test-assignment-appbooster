import React, { createContext, useContext, useState } from "react";
import { useCurrencyNames } from "./CurrencyNamesProvider";
import { baseUrl } from "../api/baseUrl";
import { ifIsEmptySetMessage } from "../utils";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [input, setInput] = useState("15 usd in rub");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState(() => {
    const [, selCurr] = input.split(" ");
    return selCurr;
  });
  const { data } = useCurrencyNames();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!ifIsEmptySetMessage(input, setMessage, "Empty input")) return;

    const [amount, selectedCurrency, , targetCurrency] = input.split(" ");

    fetch(`${baseUrl}/${selectedCurrency}/${targetCurrency}.json`)
      .then((data) => data.json())
      .then((data) => {
        const rate = (amount * data[targetCurrency]).toFixed(2);
        setResult(rate);
      })
      .catch((err) => setMessage("Please follow the example: "));
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
        message,
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

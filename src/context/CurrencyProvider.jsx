import React, { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getUrl } from "../api/getUrl";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [input, setInput] = useState("15 usd in rub");
  const [allCurrenciesCodes] = useFetch(getUrl());

  const setCurrency = (value) => {
    setInput(value);
  };

  return (
    <CurrencyContext.Provider
      value={{
        input,
        setCurrency,
        allCurrenciesCodes,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

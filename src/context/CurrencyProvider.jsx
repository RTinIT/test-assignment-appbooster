import React, { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getUrl } from "../api/getUrl";
import { getKey } from "../utils";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    "United States dollar"
  );
  const [toCurrency, setToCurrency] = useState("Russian ruble");
  const [, , allCurrenciesCodes] = useFetch(getUrl());
  const [coefficient, setCoefficient] = useState("");
  const [toAllCurrenciesCoef, setToAllCurrenciesCoef] = useState({});

  const setCurrency = (currency) => {
    setSelectedCurrency(currency);
  };

  const selectToCurrency = (currency) => {
    setToCurrency(currency);
  };

  const getExchangeRate = async () => {
    const currencyCodeFrom = getKey(allCurrenciesCodes, selectedCurrency);
    const currencyCodeTo = getKey(allCurrenciesCodes, toCurrency);

    const resp = await fetch(getUrl(currencyCodeFrom));

    const result = await resp.json();

    setCoefficient(result[currencyCodeFrom][currencyCodeTo]);
    setToAllCurrenciesCoef(result[currencyCodeFrom]);
  };

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        setCurrency,
        toCurrency,
        selectToCurrency,
        allCurrenciesCodes,
        coefficient,
        setCoefficient,
        toAllCurrenciesCoef,
        getExchangeRate,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

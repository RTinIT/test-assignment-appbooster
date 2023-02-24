import React, { useContext, createContext } from "react";
import { allCurrenciesUrls } from "../api/baseUrl";
import useFetch from "../hooks/useFetch";

const CurrencyNamesContext = createContext();

export const useCurrencyNames = () => useContext(CurrencyNamesContext);

export const CurrencyNamesProvider = ({ children }) => {
  const { data, loading, error } = useFetch(allCurrenciesUrls);

  const getAllNames = () => {
    if (!data) return;
    return Object.values(data);
  };

  const getAllCurrPair = () => {
    if (!data) return;
    return Object.entries(data);
  };

  return (
    <CurrencyNamesContext.Provider
      value={{
        data,
        loading,
        error,
        getAllNames,
        getAllCurrPair,
      }}
    >
      {children}
    </CurrencyNamesContext.Provider>
  );
};

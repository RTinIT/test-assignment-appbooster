import React, { useState, useEffect, useContext, createContext } from "react";
import { baseUrl } from "../api/baseUrl";

const CurrencyNamesContext = createContext();

export const useCurrencyNames = () => useContext(CurrencyNamesContext);

export const CurrencyNamesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}.json`)
      .then((data) => data.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

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

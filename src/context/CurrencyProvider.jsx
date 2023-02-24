import React, { createContext, useContext, useState, useEffect } from "react";
import { useCurrencyNames } from "./CurrencyNamesProvider";
import { baseUrls } from "../api/baseUrl";
import { fetchWithFallback, handleRate } from "../utils";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [fromName, setFromName] = useState("United States dollar");
  const [toName, setToName] = useState("Russian ruble");
  const [fromCode, setFromCode] = useState("usd");
  const [amount, setAmount] = useState(1);

  const [result, setResult] = useState(null);
  const { getAllCurrPair } = useCurrencyNames();

  const handleSubmit = (event) => {
    event.preventDefault();
    const codeTo = getCode(toName);
    const [withCurDate, latest] = baseUrls;
    const urls = [
      `${withCurDate}/${fromCode}/${codeTo}.json`,
      `${latest}/${fromCode}/${codeTo}.json`,
    ];

    fetchWithFallback(urls)
      // fetch(`${baseUrls}/${fromCode}/${codeTo}.json`)
      .then((data) => data.json())
      .then((data) => {
        const { date } = data;
        const rate = {
          date,
          rate: handleRate(amount, data[codeTo]),
        };
        setResult(rate);
      })
      .catch((err) => console.log(err.message));
  };

  const getCode = (curr) => {
    const allCurrPair = getAllCurrPair();
    const [code, name] = allCurrPair.find(([code, name]) => name === curr);
    return code;
  };

  const saveFromCode = (currName) => {
    const code = getCode(currName);
    setFromCode(code);
  };

  return (
    <CurrencyContext.Provider
      value={{
        result,
        fromName,
        setFromName,
        toName,
        setToName,
        fromCode,
        saveFromCode,
        amount,
        setAmount,
        handleSubmit,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

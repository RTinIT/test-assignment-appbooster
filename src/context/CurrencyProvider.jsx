import React, { createContext, useContext, useState } from "react";
import { useCurrencyNames } from "./CurrencyNamesProvider";
import { baseUrl } from "../api/baseUrl";

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

    fetch(`${baseUrl}/${fromCode}/${codeTo}.json`)
      .then((data) => data.json())
      .then((data) => {
        const { date } = data;
        const rate = {
          date,
          rate: (amount * data[codeTo]).toFixed(2),
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

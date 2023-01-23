import React, { useState } from "react";
import { useCurrencyNames } from "../context/CurrencyNamesProvider";
import { useCurrency } from "../context/CurrencyProvider";
import { getKey } from "../utils";

const useSearch = () => {
  const [search, setSearch] = useState("dollar");
  const [message, setMessage] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { data, getAllNames, getAllCurrPair } = useCurrencyNames();

  const saveSearch = (value) => {
    setSearch(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (!search) {
      setMessage(["Please, enter some word."]);
      return;
    }
    const allCurr = getAllCurrPair();
    const matchedCurr = allCurr.filter((currency) => {
      const [code, name] = currency;
      return name.toLowerCase().includes(search.toLowerCase());
    });

    setSearchResult([...matchedCurr]);
  };

  return {
    search,
    message,
    saveSearch,
    handleSearch,
    searchResult,
  };
};

export default useSearch;

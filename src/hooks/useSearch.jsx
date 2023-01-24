import React, { useState } from "react";
import { useCurrencyNames } from "../context/CurrencyNamesProvider";
import { ifIsEmptySetMessage } from "../utils";

const useSearch = () => {
  const [search, setSearch] = useState("dollar");
  const [message, setMessage] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { getAllCurrPair } = useCurrencyNames();

  const saveSearch = (value) => {
    setSearch(value);
  };

  const findMatches = (list, search) => {
    const matchedCurrencies = list.filter((currency) => {
      const [code, name] = currency;
      return name.toLowerCase().includes(search.toLowerCase());
    });
    return matchedCurrencies;
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const allNamesAndCodesOfCurrency = getAllCurrPair();
    const matchedCurrencies = findMatches(allNamesAndCodesOfCurrency, search);
    setSearchResult([...matchedCurrencies]);

    ifIsEmptySetMessage(
      matchedCurrencies.length,
      setMessage,
      "There is no matches"
    );
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

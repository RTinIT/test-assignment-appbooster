import React, { useState } from "react";
import { useCurrency } from "../context/CurrencyProvider";
import { getKey } from "../utils";

const useSearch = () => {
  const [search, setSearch] = useState("dollar");
  const [message, setMessage] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { allCurrenciesCodes } = useCurrency();

  const saveSearch = (value) => {
    setSearch(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (!search) {
      setMessage(["Please, enter some word."]);
      return;
    }
    const allCurrenciesNames = Object.values(allCurrenciesCodes);
    const matchedNames = allCurrenciesNames.filter((curName) =>
      curName.toLowerCase().includes(search.toLowerCase())
    );
    const shortNames = matchedNames.map(
      (name) => `${getKey(allCurrenciesCodes, name)} (${name})`
    );
    setSearchResult([...shortNames]);
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

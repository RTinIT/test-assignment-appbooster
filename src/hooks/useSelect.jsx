import { useState } from "react";
import { useCurrencyNames } from "../context/CurrencyNamesProvider";

const useSelect = (setCurrency, setCode) => {
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState("");
  const [searchRes, setSearchRes] = useState(null);
  const { getAllNames } = useCurrencyNames();

  const selectItem = (item) => {
    if (setCode) setCode(item);
    setCurrency(item);
    setIsActive((v) => !v);
    setSearch("");
    setSearchRes(null);
  };

  const doSearch = () => {
    if (search) {
      const data = getAllNames();
      setSearchRes(() => getMatches(data, search));
    } else {
      setSearchRes(null);
    }
  };

  const getMatches = (data, search) => {
    return data.filter((e) => e.toLowerCase().includes(search.toLowerCase()));
  };

  return {
    selectItem,
    doSearch,
    isActive,
    setIsActive,
    search,
    setSearch,
    searchRes,
    setSearchRes,
  };
};

export default useSelect;

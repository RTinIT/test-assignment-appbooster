import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { getKey } from "../utils";
import { getUrl } from "../api/getUrl";
import SelectComponent from "../components/SelectComponent";
import { useCurrency } from "../context/CurrencyProvider";

const Converter = () => {
  const {
    selectedCurrency,
    setCurrency,
    toCurrency,
    selectToCurrency,
    allCurrenciesCodes,
    coefficient,
    getExchangeRate,
  } = useCurrency();

  const [count, setCount] = useState(1);

  return (
    <section className="converter">
      <h1>Currency Converter</h1>
      <SelectComponent
        title="From : "
        value={selectedCurrency}
        onChange={(e) => setCurrency(e.target.value)}
        data={allCurrenciesCodes}
      />
      <SelectComponent
        title="to : "
        value={toCurrency}
        onChange={(e) => selectToCurrency(e.target.value)}
        data={allCurrenciesCodes}
      />
      <>
        <h2>Enter count : </h2>
        <input value={count} onChange={(e) => setCount(e.target.value)} />
        <button onClick={getExchangeRate}>Get result</button>
        <h2>Result : </h2>
        <p>
          {coefficient && coefficient * count}{" "}
          <span>{coefficient && toCurrency}</span>
        </p>
      </>
    </section>
  );
};

export default Converter;

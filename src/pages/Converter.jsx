import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { getKey } from "../utils";
import { getUrl } from "../api/getUrl";
import SelectComponent from "../components/SelectComponent";

const Converter = () => {
  const [selectFromCurrency, setSelectFromCurrency] = useState("");
  const [selectToCurrency, setSelectToCurrency] = useState("");
  const [count, setCount] = useState(1);
  const [coefficient, setCoefficient] = useState("");

  const [loading, error, data] = useFetch(getUrl());

  const getCurrency = async () => {
    const currencyCodeFrom = getKey(data, selectFromCurrency);
    const currencyCodeTo = getKey(data, selectToCurrency);

    const resp = await fetch(getUrl(currencyCodeFrom));

    const result = await resp.json();

    setCoefficient(result[currencyCodeFrom][currencyCodeTo]);
  };
  return (
    <section className="converter">
      <h1>Currency Converter</h1>
      <SelectComponent
        title="From : "
        value={selectFromCurrency}
        onChange={(e) => setSelectFromCurrency(e.target.value)}
        data={data}
      />
      <SelectComponent
        title="to : "
        value={selectToCurrency}
        onChange={(e) => setSelectToCurrency(e.target.value)}
        data={data}
      />
      <>
        <h2>Enter count : </h2>
        <input value={count} onChange={(e) => setCount(e.target.value)} />
        <button onClick={getCurrency}>Get result</button>
        <h2>Result : </h2>
        <p>
          {coefficient && coefficient * count}{" "}
          <span>{coefficient && selectToCurrency}</span>
        </p>
      </>
    </section>
  );
};

export default Converter;

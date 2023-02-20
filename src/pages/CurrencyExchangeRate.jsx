import React from "react";
import Table from "../components/Table";
import { useCurrency } from "../context/CurrencyProvider";
import { baseUrl } from "../api/baseUrl";
import Title from "../components/Title";
import useFetch from "../hooks/useFetch";

const CurrencyExchangeRate = () => {
  const { fromCode, fromName } = useCurrency();
  const { data, loading, error } = useFetch(`${baseUrl}/${fromCode}.json`);

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return (
      <h1>
        {error}: {error.message}
      </h1>
    );

  return (
    <section className="currency-exchange-rate">
      <Title highlight={fromName}> exchange rates:</Title>
      <div>
        <Table rate={data[fromCode]} />
      </div>
    </section>
  );
};

export default CurrencyExchangeRate;

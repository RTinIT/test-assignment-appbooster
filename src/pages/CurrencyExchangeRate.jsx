import React from "react";
import Table from "../components/Table";
import { useCurrency } from "../context/CurrencyProvider";
import { baseUrls } from "../api/baseUrl";
import Title from "../components/Title";
import useFetch from "../hooks/useFetch";

const CurrencyExchangeRate = () => {
  const { fromCode, fromName } = useCurrency();
  const { data, loading, error } = useFetch([
    `${baseUrls[0]}/${fromCode}.json`,
    `${baseUrls[1]}/${fromCode}.json`,
  ]);

  if (loading) return <h2>Loading...</h2>;
  if (error)
    return (
      <h2>
        {error}: {error.message}
      </h2>
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

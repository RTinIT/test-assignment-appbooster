import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { useCurrency } from "../context/CurrencyProvider";
import { baseUrl } from "../api/baseUrl";
import Title from "../components/Title";

const CurrencyExchangeRate = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rate, setRate] = useState();
  const { fromCode, fromName } = useCurrency();

  useEffect(() => {
    fetch(`${baseUrl}/${fromCode}.json`)
      .then((data) => data.json())
      .then((data) => setRate(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

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
        <Table rate={rate[fromCode]} />
      </div>
    </section>
  );
};

export default CurrencyExchangeRate;

import React from "react";
import { getUrl } from "../api/getUrl";
import { useCurrency } from "../context/CurrencyProvider";
import useFetch from "../hooks/useFetch";
import { getValue } from "../utils";

const CurrencyExchangeRate = () => {
  const { allCurrenciesCodes, input } = useCurrency();
  const [rate] = useFetch(getUrl(getValue(input)));

  return (
    <section className="currency-exchange-rate">
      <h2>Currency Exchange Rate</h2>
      <div>
        <h3>1 {getValue(input)} =</h3>
        <ul>
          {Object.values(allCurrenciesCodes).map((currency, i) => (
            <li key={i}>
              <span>{rate && Object.values(rate[getValue(input)])[i]}</span>{" "}
              {currency}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CurrencyExchangeRate;

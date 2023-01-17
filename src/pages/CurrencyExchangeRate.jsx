import React from "react";
import { useCurrency } from "../context/CurrencyProvider";

const CurrencyExchangeRate = () => {
  const { selectedCurrency, allCurrenciesCodes, toAllCurrenciesCoef } =
    useCurrency();

  const filterPopularCurrency = (currencies) => {
    if (!currencies) return;
    const { eur, rub, usd } = currencies;
    return [
      { name: eur, abbr: "eur" },
      { name: rub, abbr: "rub" },
      { name: usd, abbr: "usd" },
    ];
  };

  return (
    <section className="currency-exchange-rate">
      <h2>Currency Exchange Rate</h2>
      <div>
        <h3>1 {selectedCurrency} = </h3>
        <div>
          <h3>Popular</h3>
          <ul>
            {allCurrenciesCodes &&
              filterPopularCurrency(allCurrenciesCodes).map((it, i) => (
                <li key={i}>
                  <span>{toAllCurrenciesCoef[it.abbr]}</span> {it.name}
                </li>
              ))}
          </ul>
        </div>
        <h3>All</h3>
        <ul>
          {allCurrenciesCodes &&
            Object.values(allCurrenciesCodes).map((currency, i) => (
              <li key={i}>
                <span>{Object.values(toAllCurrenciesCoef)[i]}</span> {currency}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default CurrencyExchangeRate;

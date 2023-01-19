import React, { useState } from "react";
import { useCurrency } from "../context/CurrencyProvider";

const Converter = () => {
  const { input, setCurrency, allCurrenciesCodes } = useCurrency();
  const [result, setResult] = useState("");
  const [showList, setShowList] = useState(false);

  const handle = (event) => {
    event.preventDefault();
    const [amount, selectedCurrency, , targetCurrency] = input.split(" ");

    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCurrency}/${targetCurrency}.json`
    )
      .then((data) => data.json())
      .then((data) => setResult(amount * data[targetCurrency]));
  };

  return (
    <section className="converter">
      <h1>Currency Converter</h1>
      <button onClick={() => setShowList((active) => !active)}>
        Currencies
      </button>
      <div className="content" style={{ position: "relative" }}>
        <aside className={showList ? "active" : ""}>
          <ul>
            {allCurrenciesCodes &&
              Object.values(allCurrenciesCodes).map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "350px",
                    borderBottom: "1px solid #000",
                    padding: "2px 0",
                  }}
                >
                  <span>{c}</span>
                  <span>{Object.keys(allCurrenciesCodes)[i]}</span>
                </li>
              ))}
          </ul>
        </aside>

        <form onSubmit={handle}>
          <input value={input} onChange={(e) => setCurrency(e.target.value)} />
          <p>Result:</p>
          <input value={result} readOnly />
          <button>Get result</button>
        </form>
      </div>
    </section>
  );
};

export default Converter;

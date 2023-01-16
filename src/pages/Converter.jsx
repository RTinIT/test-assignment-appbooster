import React from "react";

const Converter = () => {
  return (
    <section className="converter">
      <section>
        <h1>Currency Converter</h1>
        <div>
          <h2>From : </h2>
          <select
            value={selectFromCurrency}
            onChange={(e) => setSelectFromCurrency(e.target.value)}
          >
            {data &&
              Object.values(data).map((e, i) => <option key={i}>{e}</option>)}
          </select>
        </div>
        <div>
          <h2>to : </h2>
          <select
            value={selectToCurrency}
            onChange={(e) => setSelectToCurrency(e.target.value)}
          >
            {data &&
              Object.values(data).map((e, i) => <option key={i}>{e}</option>)}
          </select>
        </div>
        <>
          <h2>Enter count : </h2>
          <input value={count} onChange={(e) => setCount(e.target.value)} />
          <button onClick={getCurrency}>Get result</button>
          <h2>Result : </h2>
          <p>
            {coefficient * count} <span>{selectToCurrency}</span>
          </p>
        </>
      </section>
    </section>
  );
};

export default Converter;

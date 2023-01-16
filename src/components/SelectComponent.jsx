import React from "react";

const SelectComponent = ({ title, value, onChange = (it) => it, data }) => {
  const currencies = data ? Object.values(data) : [];
  return (
    <div>
      <h2>{title}</h2>
      <select value={value} onChange={onChange}>
        {currencies.map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;

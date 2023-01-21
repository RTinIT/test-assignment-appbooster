import React from "react";
import styled from "styled-components";
import CurrencyList from "./CurrencyList";
import Currency from "./Currency";

const StyledOutputField = styled.div`
  display: flex;
  gap: 158px;
  width: 100%;
`;

const OutputInfoField = ({ searchResult }) => {
  return (
    <StyledOutputField>
      <h3 style={{ flex: "1" }}>Short name:</h3>
      <CurrencyList>
        {searchResult.map((shortName, i) => (
          <Currency key={i}>{shortName}</Currency>
        ))}
      </CurrencyList>
    </StyledOutputField>
  );
};

export default OutputInfoField;

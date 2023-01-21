import React from "react";
import styled from "styled-components";

const StyledCurrencyList = styled.ul`
  display: flex;
  flex: 3;
  flex-wrap: wrap;
  gap: 5px 25px;
  padding: 0;
`;

const CurrencyList = ({ children }) => {
  return <StyledCurrencyList>{children}</StyledCurrencyList>;
};

export default CurrencyList;

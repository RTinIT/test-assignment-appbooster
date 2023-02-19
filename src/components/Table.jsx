import React from "react";
import styled from "styled-components";
import { useCurrencyNames } from "../context/CurrencyNamesProvider";
import TCell from "./TCell";

const StyledTable = styled.table`
  text-align: left;
  overflow: hidden;
  width: 66%;
  margin: 0 auto;
  display: table;

  @media (max-width: 1044px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    font-size: 0.8em;
  }
`;

const StyledTr = styled.tr`
  &:nth-child(odd) {
    background-color: #fff;
  }

  &:nth-child(even) {
    background-color: var(--bg-color);
  }
`;

const StyledTh = styled.th`
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
  background: #1f273930;
`;

const Table = ({ rate }) => {
  const { getAllCurrPair } = useCurrencyNames();
  const AllCurrPair = getAllCurrPair();

  return (
    <StyledTable>
      <thead>
        <StyledTr>
          <StyledTh>Currency</StyledTh>
          <StyledTh>Rate</StyledTh>
        </StyledTr>
      </thead>
      <tbody>
        {AllCurrPair &&
          AllCurrPair.map((curr, i) => (
            <TCell
              key={i}
              col1={curr[1]}
              col2={Object.values(rate)[i].toFixed(2)}
            />
          ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

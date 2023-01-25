import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useCurrencyNames } from "../context/CurrencyNamesProvider";
import TCell from "./TCell";

const StyledTable = styled.table`
  text-align: left;
  overflow: hidden;
  width: 60%;
  margin: 0 auto;
  display: table;
  padding: 4em 0 4em 0;
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
  color: #185875;
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
  background: #1f273930;
`;

const Table = ({ rate, search, makeScroll }) => {
  const tRef = useRef(null);
  const { getAllCurrPair } = useCurrencyNames();

  const AllCurrPair = getAllCurrPair();

  useEffect(() => {
    if (!rate) makeScroll(tRef);
  }, [search]);

  if (!rate) {
    return (
      <StyledTable ref={tRef}>
        <thead>
          <StyledTr>
            <StyledTh>Currency</StyledTh>
            <StyledTh>Short name</StyledTh>
          </StyledTr>
        </thead>
        <tbody>
          {search.map((curr, i) => (
            <TCell key={i} col1={curr[1]} col2={curr[0]} />
          ))}
        </tbody>
      </StyledTable>
    );
  }

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

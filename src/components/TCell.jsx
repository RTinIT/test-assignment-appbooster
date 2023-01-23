import React from "react";
import styled from "styled-components";

const StyledTr = styled.tr`
  &:nth-child(odd) {
    background-color: #fff;
  }

  &:nth-child(even) {
    background-color: var(--bg-color);
  }
`;

const StyledTd = styled.td`
  font-weight: normal;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
`;

const TCell = ({ col1, col2 }) => {
  return (
    <StyledTr>
      <StyledTd>{col1}</StyledTd>
      <StyledTd>{col2}</StyledTd>
    </StyledTr>
  );
};

export default TCell;

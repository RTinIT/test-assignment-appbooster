import React from "react";
import styled from "styled-components";

const StyledCurrency = styled.li`
  padding: 5px;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgb(45, 35, 66, 0.4) 0 2px 4px,
    rgb(45, 35, 66, 0.3) 0 2px 13px -3px, #d6d6e7 0 3px 0 inset;
  color: #1c172e;
  background: #fcfcfd;
`;

const Currency = ({ children }) => {
  return <StyledCurrency>{children}</StyledCurrency>;
};

export default Currency;

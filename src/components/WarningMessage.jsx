import React, { useState } from "react";
import styled from "styled-components";

const StyledMessage = styled.p`
  color: var(--warning-color);
  font-size: 18px;
`;
const StyledExample = styled.span`
  color: var(--warning-color);
  font-size: 18px;
`;

const WarningMessage = ({ children = "Warning!", addExample = false }) => {
  const [example] = useState(`"1 usd in rub"`);
  return (
    <StyledMessage>
      {children}
      {addExample && <StyledExample>{example}</StyledExample>}
    </StyledMessage>
  );
};

export default WarningMessage;

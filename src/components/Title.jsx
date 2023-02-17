import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 1.4em;

  @media (max-width: 960px) {
    font-size: 1.2em;
  }
  @media (max-width: 360px) {
    font-size: 1em;
  }
`;

const StyledSpan = styled.span`
  background: yellow;
`;

const Title = ({ children, highlight }) => {
  return (
    <StyledTitle>
      {highlight && <StyledSpan>{highlight}</StyledSpan>}
      {children}
    </StyledTitle>
  );
};

export default Title;

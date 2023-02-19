import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 1.4em;
  font-weight: 800;
  text-shadow: 1px 0px 3px var(--font-color);
  color: #f9f5ff;

  @media (max-width: 960px) {
    font-size: 1.2em;
  }
  @media (max-width: 360px) {
    font-size: 1em;
  }
`;

const StyledSpan = styled.span`
  background: #004dff;
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

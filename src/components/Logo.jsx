import React from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-size: 1.4em;
  font-weight: 800;
  text-shadow: 0px 0px 2px var(--logo-shadow);
  color: var(--bg-color);
  text-align: start;

  @media (max-width: 960px) {
    font-size: 1.2em;
  }
  @media (max-width: 360px) {
    font-size: 1em;
  }
`;

const Logo = ({ children }) => {
  return <StyledLogo>{children}</StyledLogo>;
};

export default Logo;

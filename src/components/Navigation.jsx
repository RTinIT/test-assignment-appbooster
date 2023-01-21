import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2em;
`;

const Navigation = () => {
  return (
    <Nav className="navigation">
      <Button isLink={true} to="/test-assignment-appbooster/converter">
        Converter
      </Button>
      <Button
        isLink={true}
        to="/test-assignment-appbooster/currencies-exchange-rate"
      >
        All currencies
      </Button>
    </Nav>
  );
};

export default Navigation;

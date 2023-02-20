import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 17%;
  gap: 0.2em;

  @media (max-width: 1044px) {
    padding: 2em 7%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Navigation = () => {
  return (
    <Nav className="navigation">
      <Logo>currency converter</Logo>
      <Wrapper>
        <NavLink to="/test-assignment-appbooster/converter">
          <FaArrowCircleLeft size={22} color="#004dff" />
        </NavLink>
        <NavLink to="/test-assignment-appbooster/currencies-exchange-rate">
          <FaArrowCircleRight size={22} color="#004dff" />
        </NavLink>
      </Wrapper>
    </Nav>
  );
};

export default Navigation;

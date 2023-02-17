import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid lightgrey;
  outline: none;
  font-size: 1em;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
  box-sizing: border-box;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: 2px solid grey;
  }

  @media (max-width: 960px) {
    max-width: none;
  }
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;

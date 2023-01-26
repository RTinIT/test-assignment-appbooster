import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  padding: 20px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 1em;
  }
`;

const Form = ({ children, onSubmit = (it) => it }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;

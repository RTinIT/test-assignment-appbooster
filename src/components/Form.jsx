import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.3fr 1fr;
  gap: 15px 5px;
  grid-template-areas:
    "amount from to"
    "result result btn";

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px 5px;
    grid-template-areas:
      "amount"
      "from"
      "to"
      "result"
      "btn";
  }
`;

const Form = ({ children, onSubmit = (it) => it }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;

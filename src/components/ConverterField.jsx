import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { useCurrency } from "../context/CurrencyProvider";

const StyledConverter = styled.section`
  flex: 3;
  padding: 50px 20px;
  border-radius: 4px;
  background: var(--bg-color);
`;

const ConverterField = () => {
  const { input, setCurrency, result, handleSubmit } = useCurrency();

  return (
    <StyledConverter>
      <h1>Currency Converter</h1>
      <Form onSubmit={handleSubmit}>
        <Input value={input} onChange={(e) => setCurrency(e.target.value)} />
        <p>Result:</p>
        <Input value={result} readOnly />
        <Button>Send</Button>
      </Form>
    </StyledConverter>
  );
};

export default ConverterField;

import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Title from "./Title";
import WarningMessage from "./WarningMessage";
import { useCurrency } from "../context/CurrencyProvider";
import Select from "./Select";

const StyledConverter = styled.section`
  width: 70%;
  padding: 20px 20px;
  border-radius: 4px;
  background: var(--bg-color);
`;

const StyledTitle = styled.h1`
  @media (max-width: 960px) {
    font-size: 1.2em;
  }
  @media (max-width: 360px) {
    font-size: 1em;
  }
`;

const StyledNumberInput = styled.div`
  width: 42%;
`;

const StyledParagraph = styled.p`
  margin: 0;
`;

const ConverterField = () => {
  const {
    input,
    message,
    setCurrency,
    result,
    handleSubmit,
    from,
    setFrom,
    to,
    setTo,
    amount,
    setAmount,
  } = useCurrency();

  return (
    <StyledConverter>
      <Title>Currency Converter</Title>
      <Form onSubmit={handleSubmit}>
        <StyledParagraph>From:</StyledParagraph>
        <StyledNumberInput>
          <Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </StyledNumberInput>
        <Select currency={from} setCurrency={setFrom} />
        <StyledParagraph>To:</StyledParagraph>
        <Select currency={to} setCurrency={setTo} />
        <StyledParagraph>Result:</StyledParagraph>
        <StyledNumberInput>
          <Input value={result} readOnly />
        </StyledNumberInput>
        <Button>Send</Button>
      </Form>
      {message && <WarningMessage addExample={true}>{message}</WarningMessage>}
    </StyledConverter>
  );
};

export default ConverterField;

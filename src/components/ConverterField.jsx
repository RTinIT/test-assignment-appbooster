import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Title from "./Title";
import { useCurrency } from "../context/CurrencyProvider";
import Select from "./Select";

const StyledConverter = styled.section`
  width: 70%;
  padding: 20px 20px;
  border-radius: 4px;
  background: var(--bg-color);

  @media (max-width: 1044px) {
    width: 95%;
  }
`;

const Wrapper = styled.div`
  grid-area: ${(props) => props.gridArea};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: ${(props) => props.padding || 0};
`;

const StyledParagraph = styled.p`
  margin: 0;
  align-self: flex-start;
`;

const Substr = styled.span`
  margin-top: 20px;
  font-size: 15px;

  @media (max-width: 600px) {
    margin-top: 10px;
    font-size: 14px;
  }
`;

const Output = styled.h3`
  width: 100%;
  margin: 0;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  padding: 12px 0;
`;

const ConverterField = () => {
  const {
    result,
    handleSubmit,
    fromName,
    setFromName,
    toName,
    setToName,
    saveFromCode,
    amount,
    setAmount,
  } = useCurrency();

  return (
    <StyledConverter>
      <Title>Currency Converter</Title>
      <Form onSubmit={handleSubmit}>
        <Wrapper gridArea="amount">
          <StyledParagraph>Amount</StyledParagraph>
          <InputWrapper>
            <Input
              value={amount}
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
          </InputWrapper>
        </Wrapper>
        <Wrapper gridArea="from">
          <StyledParagraph>From</StyledParagraph>
          <Select
            currency={fromName}
            setCurrency={setFromName}
            setCode={saveFromCode}
          />
        </Wrapper>
        <Wrapper gridArea="to">
          <StyledParagraph>To</StyledParagraph>
          <Select currency={toName} setCurrency={setToName} />
        </Wrapper>
        <Wrapper gridArea="result">
          <Output>{result ? result.rate : "Click to convert"}</Output>
          <Substr>
            {result
              ? `Last updated ${result.date}`
              : "The last updated date will be here"}
          </Substr>
        </Wrapper>
        <Wrapper gridArea="btn">
          <Button>Convert</Button>
        </Wrapper>
      </Form>
    </StyledConverter>
  );
};

export default ConverterField;

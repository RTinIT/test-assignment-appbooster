import React from "react";
import styled from "styled-components";
import ConverterField from "../components/ConverterField";

const StyledSection = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  padding: 0 40px;
`;

const Converter = () => {
  return (
    <StyledSection>
      <ConverterField />
    </StyledSection>
  );
};

export default Converter;

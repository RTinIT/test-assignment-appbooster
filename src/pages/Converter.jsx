import React from "react";
import styled from "styled-components";
import Search from "../components/Search";
import useSearch from "../hooks/useSearch";
import ConverterField from "../components/ConverterField";
import Table from "../components/Table";

const StyledSection = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

const Converter = () => {
  const { search, message, saveSearch, handleSearch, searchResult } =
    useSearch();

  const makeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledSection>
      <ConverterField />
    </StyledSection>
  );
};

export default Converter;

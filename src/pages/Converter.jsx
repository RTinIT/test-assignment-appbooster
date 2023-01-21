import React from "react";
import styled from "styled-components";
import Search from "../components/Search";
import useSearch from "../hooks/useSearch";
import ConverterField from "../components/ConverterField";
import OutputInfoField from "../components/OutputInfoField";

const StyledSection = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Converter = () => {
  const { search, message, saveSearch, handleSearch, searchResult } =
    useSearch();

  return (
    <StyledSection>
      <Search
        search={search}
        setSearch={saveSearch}
        message={message}
        handleSearch={handleSearch}
      />
      <ConverterField />
      {searchResult.length ? (
        <OutputInfoField searchResult={searchResult} />
      ) : (
        ""
      )}
    </StyledSection>
  );
};

export default Converter;

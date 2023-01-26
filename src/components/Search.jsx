import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import WarningMessage from "./WarningMessage";

const InfoField = styled.aside`
  padding: 0 20px;
  border-radius: 4px;
  background: var(--bg-color);
  width: 70%;
`;

const TextField = styled.div`
  padding: 10px;
`;

const Search = ({
  search,
  message,
  setSearch = (it) => it,
  handleSearch = (it) => it,
}) => {
  return (
    <InfoField>
      <TextField>
        <p>Forgot the short name of currency?</p>
        <p>Use search!</p>
      </TextField>
      <Form>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Show all"
        />
        <Button onClick={handleSearch}>Search</Button>
      </Form>
      {message && <WarningMessage>{message}</WarningMessage>}
    </InfoField>
  );
};

export default Search;

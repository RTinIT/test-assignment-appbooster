import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

const InfoField = styled.aside`
  flex: 1.5;
  padding: 0 20px;
`;

const TextField = styled.div`
  padding: 10px;
  background: var(--bg-color);
  border-radius: 4px;
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
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button onClick={handleSearch}>Search</Button>
      </Form>
      {!search && <p>{message}</p>}
    </InfoField>
  );
};

export default Search;

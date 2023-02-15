import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { useCurrencyNames } from "../context/CurrencyNamesProvider";
import { useCurrency } from "../context/CurrencyProvider";
import Input from "./Input";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 220px;
  min-width: 5em;
  padding: 12px;
  border-radius: 4px;
  border: 1.5px solid lightgrey;
  outline: none;
  font-size: 1em;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
`;
const StyledHead = styled.div`
  position: relative;
  text-align: start;
  font-size: 1em;
  width: 100%;
  outline: none;
  cursor: pointer;
`;
const StyledHeadSpan = styled.span`
  padding: 10px 5px;
`;
const rotate = keyframes`
  from {transform: rotateZ(0deg)}
  to {transform: rotateZ(-180deg)}
`;
const arrowStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  padding: 0,
};
const searchStyles = {
  position: "absolute",
  top: 3,
  right: 2,
  padding: 0,
};

const StyledArrow = styled.span`
  animation: ${rotate} 2s linear;
`;

const StyledContent = styled.div`
  ${(props) => (props.active ? { display: "block" } : { display: "none" })}
  position: relative;
`;

const StyledSearchBar = styled.div`
  position: relative;
`;

const StyledSelectItems = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  max-height: 200px;
  overflow-y: scroll;
  position: absolute;
  top: 110%;
  left: 0;
  background: #fff;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 5px;
    background: #cdcdcd;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background: #cdcdcd;
  }
`;
const StyledSelectItem = styled.li`
  list-style: none;
  margin-top: 12px;
  cursor: pointer;
`;

const Select = ({ currency, setCurrency }) => {
  const [isActive, setIsActive] = useState(false);
  const [search, setSearch] = useState("");
  const [searchRes, setSearchRes] = useState(null);
  const { getAllNames } = useCurrencyNames();

  const selectItem = (item) => {
    setCurrency(item);
    setIsActive((v) => !v);
    setSearch("");
    setSearchRes(null);
  };

  const doSearch = () => {
    if (search) {
      const data = getAllNames();
      setSearchRes(() => {
        return data.filter((e) =>
          e.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      setSearchRes(null);
    }
  };

  return (
    <StyledWrapper>
      <StyledHead onClick={() => setIsActive((v) => !v)}>
        <StyledHeadSpan>{currency}</StyledHeadSpan>
        {isActive ? (
          <FaAngleUp size={22} style={arrowStyles} />
        ) : (
          <FaAngleDown size={22} style={arrowStyles} />
        )}
      </StyledHead>
      <StyledContent active={isActive}>
        <StyledSearchBar>
          <FaSearch size={20} style={searchStyles} />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={doSearch}
            placeholder="Search"
          />
        </StyledSearchBar>
        <StyledSelectItems>
          {/*    change id for key using uuid     */}
          {searchRes &&
            searchRes.map((e, i) => (
              <StyledSelectItem onClick={() => selectItem(e)} key={i}>
                {e}
              </StyledSelectItem>
            ))}
        </StyledSelectItems>
      </StyledContent>
    </StyledWrapper>
  );
};

export default Select;

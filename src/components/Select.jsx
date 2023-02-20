import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { useCurrencyNames } from "../context/CurrencyNamesProvider";
import useSelect from "../hooks/useSelect";
import Input from "./Input";

const StyledWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid lightgrey;
  outline: none;
  font-size: 1em;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
  position: relative;
`;

const StyledHead = styled.div`
  position: relative;
  text-align: start;
  font-size: 1em;
  width: 93%;
  outline: none;
  padding: 10px;
  cursor: pointer;
`;

const StyledHeadSpan = styled.span`
  width: 90%;
  padding: 0;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const iconStyles = {
  position: "absolute",
  top: 10,
  right: 10,
  padding: 0,
};

const StyledContent = styled.div`
  ${(props) => (props.active ? { display: "block" } : { display: "none" })}
  position: absolute;
  width: 100%;
  top: 46px;
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
  top: 108%;
  left: 0;
  background: #fff;
  z-index: 2;
  box-shadow: 0px 0px 5px 0px blue;
  border-radius: 4px;

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
  padding: 5px 0 5px 10px;
  cursor: pointer;

  &:hover {
    background: var(--bg-color);
  }
`;

const Select = ({ currency, setCurrency, setCode }) => {
  const {
    selectItem,
    doSearch,
    isActive,
    setIsActive,
    search,
    setSearch,
    searchRes,
  } = useSelect(setCurrency, setCode);

  return (
    <StyledWrapper>
      <StyledHead onClick={() => setIsActive((v) => !v)}>
        <StyledHeadSpan>{currency}</StyledHeadSpan>
        {isActive ? (
          <FaAngleUp size={22} style={iconStyles} />
        ) : (
          <FaAngleDown size={22} style={iconStyles} />
        )}
      </StyledHead>
      <StyledContent active={isActive}>
        <StyledSearchBar>
          <FaSearch size={20} style={iconStyles} opacity={0.5} />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={doSearch}
            placeholder="Type to search"
          />
        </StyledSearchBar>
        <StyledSelectItems>
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

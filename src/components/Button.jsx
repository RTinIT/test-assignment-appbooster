import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button3D = styled.button`
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgb(45, 35, 66, 0.4) 0 2px 4px,
    rgb(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 7px 0 inset;
  cursor: pointer;
  color: #1c172e;
  transition: 0.2s;
  font-size: 18px;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgb(45, 35, 66, 0.4) 0 2px 4px,
      rgb(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgb(45, 35, 66, 0.4) 0 4px 8px,
      rgb(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 -3px 0 inset;
    transform: translateY(-0.2em);
  }
`;

const ButtonLink = styled(NavLink)`
  display: block;
  width: 130px;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;

  &:hover {
    transform: translateY(-0.33em);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 500px) {
    padding: 0.5em 0.7em;
    width: 100px;
  }
`;

const Button = ({
  isLink = false,
  onClick = (it) => it,
  children,
  ...childrenProps
}) => {
  return (
    <Button3D onClick={onClick}>
      {isLink ? (
        <ButtonLink {...childrenProps}>{children}</ButtonLink>
      ) : (
        <ButtonLink as={"span"}>{children}</ButtonLink>
      )}
    </Button3D>
  );
};

export default Button;

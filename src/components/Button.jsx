import React from "react";
import styled from "styled-components";

const Button3D = styled.button`
  color: #fff;
  border-radius: 5px;
  padding: 14px 40px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 15px;
  background: #004dff;
  background: linear-gradient(0deg, #004dff 0%, #004dff 100%);
  border: none;

  &:before {
    height: 0%;
    width: 2px;
  }

  &:hover {
    outline: none;
    box-shadow: inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;

const Button = ({ children, onClick = (it) => it }) => {
  return <Button3D onClick={onClick}>{children}</Button3D>;
};

export default Button;

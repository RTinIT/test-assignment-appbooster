import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bgColor: "#fff",
  fontColor: "#010b3c",
  hover: "#cdcdcd",
  logoShadow: "#242424",
  btnShadow: "#0000001a",
  tHead: "#1f273930",
  tCellOdd: "#d4d6d92b",
  tCellEven: "#d4d6d96e",
  textHighlight: "#fdff77fa",
};

export const darkTheme = {
  bgColor: "#242424",
  fontColor: "#ffffffa6",
  hover: "#303030",
  logoShadow: "#fff",
  btnShadow: "#000",
  tHead: "#000000e0",
  tCellOdd: "#d4d6d921",
  tCellEven: "#d4d6d90f",
  textHighlight: "#d4d6d90f",
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-color: ${(props) => props.theme.fontColor};
    --title-size: 2em;
    --text-size: 1.5em;
    --bg-color: ${(props) => props.theme.bgColor};
    --hover: ${(props) => props.theme.hover};
    --logo-shadow: ${(props) => props.theme.logoShadow};
    --btn-shadow: ${(props) => props.theme.btnShadow};
    --table-head-bg:${(props) => props.theme.tHead};
    --cell-odd-bg:${(props) => props.theme.tCellOdd};
    --cell-even-bg:${(props) => props.theme.tCellEven};
    --text-highlight:${(props) => props.theme.textHighlight};


    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: var(--font-color);
  }

  #root {
    width: 100%;
    min-height: 100vh;
    text-align: center;
  }

  body {
    min-height: 100vh;
    background: var(--bg-color);
    transition: all .3s;
  }

  h1 {
    font-size: var(--title-size);
    line-height: 1.1;
  }

  li {
    list-style: none;
    text-align: start;
    background: var(--bg-color);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

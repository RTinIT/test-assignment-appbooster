import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --font-color: #010b3c;
    --title-size: 2em;
    --text-size: 1.5em;
    --bg-color: #f5f5f5;

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
  }

  h1 {
    font-size: var(--title-size);
    line-height: 1.1;
  }

  li {
    list-style: none;
    text-align: start;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

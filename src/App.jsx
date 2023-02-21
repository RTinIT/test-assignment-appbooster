import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import styled from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";

const StyledApp = styled.div`
  width: 100%;
`;

const App = () => {
  const { theme, switchTheme } = useTheme();
  return (
    <>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <StyledApp>
          <Navigation theme={theme} switchTheme={switchTheme} />
          <AppRouter />
        </StyledApp>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;

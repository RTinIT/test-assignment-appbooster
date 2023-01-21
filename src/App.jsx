import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const StyledApp = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <>
      <StyledApp>
        <Navigation />
        <AppRouter />
      </StyledApp>
      <GlobalStyles />
    </>
  );
};

export default App;

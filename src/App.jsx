import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import styled from "styled-components";
import "./App.css";

const StyledApp = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <StyledApp>
      <Navigation />
      <AppRouter />
    </StyledApp>
  );
};

export default App;

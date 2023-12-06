import "./App.css";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MainSection from "./components/MainSection/MainSection";

function App() {
  
  return (
    <>
      <Header />
      <Main>
        <MainSection />
      </Main>
      <GlobalStyle />
    </>
  );
}

export default App;

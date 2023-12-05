// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MainSection from './components/MainSection/MainSection';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main>
        <MainSection />
      </Main>
    </>
  );
}

export default App

import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MainSection from "./components/MainSection/MainSection";
import { getDate, getSymbols } from "./service/Api";
import getFormatedDate from "./helpers/getFormatedDate";

function App() {
  const [symbols, setSymbols] = useState(null);
  const [currencyUAH, setCurrencyUAH] = useState(null);
  useEffect(() => {
    getSymbols()
      .then((response) => setSymbols(response.data.symbols))
      .catch(() => {
        throw new Error("Reqest failed!");
      });
    const currentDate = getFormatedDate();
    getDate(currentDate, "UAH")
      .then((response) => setCurrencyUAH(response.data.rates))
      .catch(() => {
        throw new Error("Reqest failed!");
      });
  }, []);

  if (!currencyUAH) return;
  return (
    <>
      <Header currencyUAH={currencyUAH} />
      <Main>
        <MainSection symbols={symbols} />
      </Main>
    </>
  );
}

export default App;

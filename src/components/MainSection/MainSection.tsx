import getFormatedDate from "../../helpers/getFormatedDate";
import { getDate, getSymbols } from "../../service/Api";
import SelectComp from "../SelectComp/SelectComp";
import {
  MainInput,
  MainInputLabel,
  MainSectionBlock,
  MainSectionWrapper,
} from "./MainSection.styled";
import { ChangeEvent, useEffect, useState } from "react";
import store from "store";

export default function MainSection() {
  const [symbols, setSymbols] = useState(store.get("symbols") || null);
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [inputFromValue, setInputFromValue] = useState(0);
  const [inputToValue, setInputToValue] = useState(0);
  const [selectFromCurrency, setSelectFromCurrency] = useState(
    Object.keys(store.get("symbols"))[0] || ""
  );
  const [selectToCurrency, setSelectToCurrency] = useState(
    Object.keys(store.get("symbols"))[0] || ""
  );

  useEffect(() => {
    if (store.get("symbols")) return;
    getSymbols()
      .then((response) => {
        store.set("symbols", response.data.symbols);
        setSymbols(response.data.symbols);
        const firstKey = Object.keys(response.data.symbols)[0];
        setSelectFromCurrency(firstKey);
        setSelectToCurrency(firstKey);
      })
      .catch(() => {
        throw new Error("Reqest failed!");
      });
  }, []);

  useEffect(() => {
    if (!selectFromCurrency) return;
    const currentDate = getFormatedDate();
    getDate(currentDate, selectFromCurrency)
      .then((response) => {
        if (response.data.base === "USD") {
          store.set("CurrentExchangeRateUSD", response.data.rates);
        }
        if (response.data.base === "EUR") {
          store.set("CurrentExchangeRateEUR", response.data.rates);
        }
        store.set("CurrentExchangeRate", response.data.rates);
        setCurrentExchangeRate(response.data.rates);
      })
      .catch(() => {
        throw new Error("Reqest failed!");
      });
  }, [selectFromCurrency]);

  useEffect(() => {
    if (!currentExchangeRate) return;
console.log("Eff",currentExchangeRate[selectToCurrency],inputFromValue);

    setInputToValue(
      currentExchangeRate[selectToCurrency] * inputFromValue
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputFromValue, selectFromCurrency, selectToCurrency]);

  useEffect(() => {
    if (!currentExchangeRate) return;

    setInputFromValue(
      inputToValue / currentExchangeRate[selectToCurrency]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputToValue]);

  const handleInputFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const numberValue = Number(e.target.value);
    setInputFromValue(numberValue);
  };

  const handleInputToChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(e.target.value);
    setInputToValue(numberValue);
  };

  return (
    <>
      <MainSectionWrapper>
        <MainSectionBlock>
          <MainInputLabel>
            Convert from:
            <MainInput
              type="number"
              value={inputFromValue}
              onChange={handleInputFromChange}
              placeholder="0.00"
            />
            {symbols && (
              <SelectComp
                symbols={symbols}
                value={selectFromCurrency}
                onChange={setSelectFromCurrency}
              />
            )}
          </MainInputLabel>
          <MainInputLabel>
            Convert to:
            <MainInput
              type="number"
              value={inputToValue}
              onChange={handleInputToChange}
              placeholder="0.00"
            />
            {symbols && (
              <SelectComp
                symbols={symbols}
                value={selectToCurrency}
                onChange={setSelectToCurrency}
              />
            )}
          </MainInputLabel>
        </MainSectionBlock>
      </MainSectionWrapper>
    </>
  );
}

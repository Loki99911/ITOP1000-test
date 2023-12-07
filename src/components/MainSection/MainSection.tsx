import getFormatedDate from "../../helpers/getFormatedDate";
// import { roundingValue } from "../../helpers/roundingValue";
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
import Spinner from "../Spinner/Spinner";

export default function MainSection() {
  const [symbols, setSymbols] = useState(store.get("symbols") || null);
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [inputFromValue, setInputFromValue] = useState<number | "">("");
  const [inputToValue, setInputToValue] = useState<number | "">("");
  const [selectFromCurrency, setSelectFromCurrency] = useState(
    Object.keys(store.get("symbols") || {})[0] || ""
  );
  const [selectToCurrency, setSelectToCurrency] = useState(
    Object.keys(store.get("symbols") || {})[0] || ""
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (store.get("symbols")) return;
    setIsLoading(true);
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
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!selectFromCurrency) return;
    setIsLoading(true);
    const currentDate = getFormatedDate();
    getDate(currentDate, selectFromCurrency)
      .then((response) => {
        setCurrentExchangeRate(response.data.rates);
        updateInputTo();
      })
      .catch(() => {
        throw new Error("Reqest failed!");
      })
      .finally(() => setIsLoading(false));
  }, [selectFromCurrency]);

  useEffect(() => {
    updateInputTo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputFromValue, currentExchangeRate, selectToCurrency]); //, selectToCurrency

  useEffect(() => {
    updateInputFrom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputToValue]);

  const updateInputFrom = () => {
    if (!currentExchangeRate) return;
    if (typeof inputToValue !== "number") return;
    const newInputFromValue =
      inputToValue / currentExchangeRate![selectToCurrency];
    if (newInputFromValue === inputFromValue) return;
    setInputFromValue(newInputFromValue);
  };

  const updateInputTo = () => {
    if (!currentExchangeRate) return;
    if (typeof inputFromValue !== "number") return;
    const newInputToValue =
      currentExchangeRate![selectToCurrency] * inputFromValue;
    setInputToValue(newInputToValue);
  };

  const handleInputFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(e.target.value);
    if (numberValue) {
      setInputFromValue(numberValue);
    } else {
      setInputFromValue("");
      setInputToValue("");
    }
  };

  const handleInputToChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(e.target.value);
    if (numberValue) {
      setInputToValue(numberValue);
    } else {
      setInputFromValue("");
      setInputToValue("");
    }
  };

  return (
    <>
      <MainSectionWrapper>
        <MainSectionBlock>
          <MainInputLabel>
            Convert from:
            <MainInput
              type="number"
              // value={roundingValue(inputFromValue)}
              value={inputFromValue}
              onChange={handleInputFromChange}
              placeholder="0.00"
              disabled={isLoading}
            />
            {!isLoading ? (
              <SelectComp
                symbols={symbols}
                value={selectFromCurrency}
                onChange={setSelectFromCurrency}
              />
            ) : (
              <Spinner />
            )}
          </MainInputLabel>
          <MainInputLabel>
            Convert to:
            <MainInput
              type="number"
              // value={roundingValue(inputToValue)}
              value={inputToValue}
              onChange={handleInputToChange}
              placeholder="0.00"
              disabled={isLoading}
            />
            {!isLoading ? (
              <SelectComp
                symbols={symbols}
                value={selectToCurrency}
                onChange={setSelectToCurrency}
              />
            ) : (
              <Spinner />
            )}
          </MainInputLabel>
        </MainSectionBlock>
      </MainSectionWrapper>
    </>
  );
}

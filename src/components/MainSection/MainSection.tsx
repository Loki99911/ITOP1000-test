// import SVGFromSprite from '../SVGFromSprite/SVGFromSprite';
import getFormatedDate from "../../helpers/getFormatedDate";
import { getDate } from "../../service/Api";
import SelectComp from "../SelectComp/SelectComp";
import { MainSectionWrapper } from "./MainSection.styled";
import { ChangeEvent, useEffect, useState } from "react";
import { IProps } from "./types";

export default function MainSection({ symbols }: IProps) {
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");
  const [selectFromCurrency, setSelectFromCurrency] = useState("");
  const [selectToCurrency, setSelectToCurrency] = useState("");

  const handleInputFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!currentExchangeRate) return;
    const value = Number(e.target.value) * currentExchangeRate;
    setInputFromValue(String(value));
  };

  const handleInputToChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputToValue(e.target.value);
  };

  useEffect(() => {
    const currentDate = getFormatedDate();
    getDate(currentDate, selectFromCurrency)
      .then((response) => setCurrentExchangeRate(response.data.rates))
      .catch(() => {
        throw new Error("Reqest failed!");
      });
  }, [selectFromCurrency]);

  return (
    <>
      <MainSectionWrapper>
        <div>
          <label>
            convert from:
            <input
              type="text"
              value={inputFromValue}
              onChange={handleInputFromChange}
            />
            {symbols && (
              <SelectComp
                symbols={symbols}
                value={selectFromCurrency}
                onChange={setSelectFromCurrency}
              />
            )}
          </label>
          <br />
          <label>
            convert to:
            <input
              type="text"
              value={inputToValue}
              onChange={handleInputToChange}
            />
            {symbols && (
              <SelectComp
                symbols={symbols}
                value={selectToCurrency}
                onChange={setSelectToCurrency}
              />
            )}
          </label>
        </div>
      </MainSectionWrapper>
    </>
  );
}

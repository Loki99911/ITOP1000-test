import { useEffect, useState } from "react";
import Container from "../Container/Container";

import {
  HeaderWrapper,
  HeaderBlock,
  HeaderTitle,
  HeaderLogo,
  UAHWrapper,
  HeaderTitleAccent,
} from "./Header.styled";
import { getDate } from "../../service/Api";
import getFormatedDate from "../../helpers/getFormatedDate";
import { ICurrencyUAH } from "./types";

export default function Header() {
  const [currencyUAH, setCurrencyUAH] = useState<ICurrencyUAH | null>(null);

  useEffect(() => {
    const currentDate = getFormatedDate();
    getDate(currentDate, "UAH")
      .then((response) => {
        const rates = response.data.rates;
        if (
          rates &&
          typeof rates === "object" &&
          "USD" in rates &&
          "EUR" in rates
        ) {
          setCurrencyUAH(rates);
        } else {
          throw new Error("Invalid data format!");
        }
      })
      .catch(() => {
        throw new Error("Request failed!");
      });
  }, []);
  
  return (
    <HeaderWrapper>
      <Container>
        <HeaderBlock>
          <HeaderLogo>Currency</HeaderLogo>
          <UAHWrapper>
            <HeaderTitle>
              <HeaderTitleAccent>UAH/USD:</HeaderTitleAccent>
              {currencyUAH ? (1 / currencyUAH.USD).toFixed(2) : "--"}
            </HeaderTitle>
            <HeaderTitle>
              <HeaderTitleAccent>UAH/EUR:</HeaderTitleAccent>
              {currencyUAH ? (1 / currencyUAH.EUR).toFixed(2) : "--"}
            </HeaderTitle>
          </UAHWrapper>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
  );
}

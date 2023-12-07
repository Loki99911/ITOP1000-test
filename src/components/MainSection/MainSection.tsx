// import getFormatedDate from "../../helpers/getFormatedDate";
import { roundingValue } from "../../helpers/roundingValue";
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
    // const currentDate = getFormatedDate();
    // getDate(currentDate, selectFromCurrency)
    //   .then((response) => {
    //     setCurrentExchangeRate(response.data.rates);
    //     updateInputTo();
    //   })
    //   .catch(() => {
    //     throw new Error("Reqest failed!");
    //   })
    //   .finally(() => setIsLoading(false));
    let data;
    console.log(selectFromCurrency);

    switch (selectFromCurrency) {
      case "AED":
        data = store.get("UAH");
        break;
      case "AFN":
        data = {
          AED: 1,
          AFN: 2,
          ALL: 3,
          AMD: 4,
          ANG: 5,
          AOA: 6,
          ARS: 7,
          AUD: 0.041504,
          AWG: 0.049003,
          AZN: 0.046363,
          BAM: 0.049444,
          BBD: 0.055026,
          BDT: 2.997797,
          BGN: 0.04944,
          BHD: 0.010264,
          BIF: 77.534394,
          BMD: 0.027224,
          BND: 0.036554,
          BOB: 0.188317,
          BRL: 0.133471,
          BSD: 0.027253,
          BTC: 6.23697e-7,
          BTN: 2.270731,
          BWP: 0.372309,
          BYN: 0.089787,
          BYR: 533.588011,
          BZD: 0.054932,
          CAD: 0.037012,
          CDF: 72.823863,
          CHF: 0.023796,
          CLF: 0.000866,
          CLP: 23.902203,
          CNY: 0.194536,
          COP: 108.945877,
          CRC: 14.382378,
          CUC: 0.027224,
          CUP: 0.721433,
          CVE: 2.787587,
          CZK: 0.614933,
          DJF: 4.852373,
          DKK: 0.188321,
          DOP: 1.548716,
          DZD: 3.666396,
          EGP: 0.84127,
          ERN: 0.408358,
          ETB: 1.531607,
          EUR: 0.025259,
          FJD: 0.060932,
          FKP: 0.021628,
          GBP: 0.021644,
          GEL: 0.072959,
          GGP: 0.021628,
          GHS: 0.327032,
          GIP: 0.021628,
          GMD: 1.833521,
          GNF: 234.228751,
          GTQ: 0.213395,
          GYD: 5.701578,
          HKD: 0.212665,
          HNL: 0.672517,
          HRK: 0.191699,
          HTG: 3.605042,
          HUF: 9.628274,
          IDR: 422.56223,
          ILS: 0.100796,
          IMP: 0.021628,
          INR: 2.268903,
          IQD: 35.673731,
          IRR: 1150.889446,
          ISK: 3.791475,
          JEP: 0.021628,
          JMD: 4.231733,
          JOD: 0.019313,
          JPY: 3.958025,
          KES: 4.174776,
          KGS: 2.431638,
          KHR: 112.120331,
          KMF: 12.427767,
          KPW: 24.500838,
          KRW: 35.961392,
          KWD: 0.008394,
          KYD: 0.022712,
          KZT: 12.563039,
          LAK: 564.772985,
          LBP: 409.607043,
          LKR: 8.909205,
          LRD: 5.122178,
          LSL: 0.515879,
          LTL: 0.080385,
          LVL: 0.016467,
          LYD: 0.131662,
          MAD: 0.275417,
          MDL: 0.482914,
          MGA: 124.76015,
          MKD: 1.55336,
          MMK: 57.230401,
          MNT: 94.167358,
          MOP: 0.219197,
          MRU: 1.078226,
          MUR: 1.201442,
          MVR: 0.41788,
          MWK: 45.876848,
          MXN: 0.471787,
          MYR: 0.127244,
          MZN: 1.721909,
          NAD: 0.515885,
          NGN: 21.857782,
          NIO: 0.997337,
          NOK: 0.298268,
          NPR: 3.633213,
          NZD: 0.044402,
          OMR: 0.010479,
          PAB: 0.027255,
          PEN: 0.102564,
          PGK: 0.101579,
          PHP: 1.505345,
          PKR: 7.747906,
          PLN: 0.109388,
          PYG: 201.158361,
          QAR: 0.099109,
          RON: 0.125469,
          RSD: 2.964173,
          RUB: 2.521407,
          RWF: 33.972176,
          SAR: 0.102107,
          SBD: 0.230532,
          SCR: 0.360862,
          SDG: 16.361546,
          SEK: 0.28452,
          SGD: 0.036484,
          SHP: 0.033125,
          SLE: 0.615674,
          SLL: 537.671596,
          SOS: 15.558115,
          SRD: 1.031323,
          STD: 563.479312,
          SYP: 353.96109,
          SZL: 0.517116,
          THB: 0.958267,
          TJS: 0.298007,
          TMT: 0.095284,
          TND: 0.085197,
          TOP: 0.064333,
          TRY: 0.787818,
          TTD: 0.184878,
          TWD: 0.857021,
          TZS: 68.195824,
          UAH: 1,
          UGX: 102.867559,
          USD: 0.027224,
          UYU: 1.066344,
          UZS: 335.34976,
          VEF: 96677.036133,
          VES: 0.966812,
          VND: 661.104656,
          VUV: 3.257359,
          WST: 0.074808,
          XAF: 16.583038,
          XAG: 0.001137,
          XAU: 0.000013400743,
          XCD: 0.073574,
          XDR: 0.020478,
          XOF: 16.583038,
          XPF: 3.021844,
          YER: 6.814818,
          ZAR: 0.515813,
          ZMK: 245.047569,
          ZMW: 0.655427,
          ZWL: 8.766078,
        };
        break;
      case "ALL":
        data = {
          AED: 10,
          AFN: 20,
          ALL: 30,
          AMD: 40,
          ANG: 50,
          AOA: 60,
          ARS: 70,
          AUD: 0.041504,
          AWG: 0.049003,
          AZN: 0.046363,
          BAM: 0.049444,
          BBD: 0.055026,
          BDT: 2.997797,
          BGN: 0.04944,
          BHD: 0.010264,
          BIF: 77.534394,
          BMD: 0.027224,
          BND: 0.036554,
          BOB: 0.188317,
          BRL: 0.133471,
          BSD: 0.027253,
          BTC: 6.23697e-7,
          BTN: 2.270731,
          BWP: 0.372309,
          BYN: 0.089787,
          BYR: 533.588011,
          BZD: 0.054932,
          CAD: 0.037012,
          CDF: 72.823863,
          CHF: 0.023796,
          CLF: 0.000866,
          CLP: 23.902203,
          CNY: 0.194536,
          COP: 108.945877,
          CRC: 14.382378,
          CUC: 0.027224,
          CUP: 0.721433,
          CVE: 2.787587,
          CZK: 0.614933,
          DJF: 4.852373,
          DKK: 0.188321,
          DOP: 1.548716,
          DZD: 3.666396,
          EGP: 0.84127,
          ERN: 0.408358,
          ETB: 1.531607,
          EUR: 0.025259,
          FJD: 0.060932,
          FKP: 0.021628,
          GBP: 0.021644,
          GEL: 0.072959,
          GGP: 0.021628,
          GHS: 0.327032,
          GIP: 0.021628,
          GMD: 1.833521,
          GNF: 234.228751,
          GTQ: 0.213395,
          GYD: 5.701578,
          HKD: 0.212665,
          HNL: 0.672517,
          HRK: 0.191699,
          HTG: 3.605042,
          HUF: 9.628274,
          IDR: 422.56223,
          ILS: 0.100796,
          IMP: 0.021628,
          INR: 2.268903,
          IQD: 35.673731,
          IRR: 1150.889446,
          ISK: 3.791475,
          JEP: 0.021628,
          JMD: 4.231733,
          JOD: 0.019313,
          JPY: 3.958025,
          KES: 4.174776,
          KGS: 2.431638,
          KHR: 112.120331,
          KMF: 12.427767,
          KPW: 24.500838,
          KRW: 35.961392,
          KWD: 0.008394,
          KYD: 0.022712,
          KZT: 12.563039,
          LAK: 564.772985,
          LBP: 409.607043,
          LKR: 8.909205,
          LRD: 5.122178,
          LSL: 0.515879,
          LTL: 0.080385,
          LVL: 0.016467,
          LYD: 0.131662,
          MAD: 0.275417,
          MDL: 0.482914,
          MGA: 124.76015,
          MKD: 1.55336,
          MMK: 57.230401,
          MNT: 94.167358,
          MOP: 0.219197,
          MRU: 1.078226,
          MUR: 1.201442,
          MVR: 0.41788,
          MWK: 45.876848,
          MXN: 0.471787,
          MYR: 0.127244,
          MZN: 1.721909,
          NAD: 0.515885,
          NGN: 21.857782,
          NIO: 0.997337,
          NOK: 0.298268,
          NPR: 3.633213,
          NZD: 0.044402,
          OMR: 0.010479,
          PAB: 0.027255,
          PEN: 0.102564,
          PGK: 0.101579,
          PHP: 1.505345,
          PKR: 7.747906,
          PLN: 0.109388,
          PYG: 201.158361,
          QAR: 0.099109,
          RON: 0.125469,
          RSD: 2.964173,
          RUB: 2.521407,
          RWF: 33.972176,
          SAR: 0.102107,
          SBD: 0.230532,
          SCR: 0.360862,
          SDG: 16.361546,
          SEK: 0.28452,
          SGD: 0.036484,
          SHP: 0.033125,
          SLE: 0.615674,
          SLL: 537.671596,
          SOS: 15.558115,
          SRD: 1.031323,
          STD: 563.479312,
          SYP: 353.96109,
          SZL: 0.517116,
          THB: 0.958267,
          TJS: 0.298007,
          TMT: 0.095284,
          TND: 0.085197,
          TOP: 0.064333,
          TRY: 0.787818,
          TTD: 0.184878,
          TWD: 0.857021,
          TZS: 68.195824,
          UAH: 1,
          UGX: 102.867559,
          USD: 0.027224,
          UYU: 1.066344,
          UZS: 335.34976,
          VEF: 96677.036133,
          VES: 0.966812,
          VND: 661.104656,
          VUV: 3.257359,
          WST: 0.074808,
          XAF: 16.583038,
          XAG: 0.001137,
          XAU: 0.000013400743,
          XCD: 0.073574,
          XDR: 0.020478,
          XOF: 16.583038,
          XPF: 3.021844,
          YER: 6.814818,
          ZAR: 0.515813,
          ZMK: 245.047569,
          ZMW: 0.655427,
          ZWL: 8.766078,
        };
        break;

      default:
        break;
    }

    setCurrentExchangeRate(data);
    updateInputTo();
  }, [selectFromCurrency]);


  useEffect(() => {
    updateInputTo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputFromValue]); //, selectToCurrency

  useEffect(() => {
    updateInputTo();
  }, [selectToCurrency]);

  useEffect(() => {
    updateInputFrom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputToValue]);

  const updateInputFrom = () => {
    if (!currentExchangeRate) return;
    if (typeof inputToValue !== "number") return;
    // const newInputFromValue = inputToValue / 2;
    const newInputFromValue =
      inputToValue / currentExchangeRate![selectToCurrency];
    if (newInputFromValue === inputFromValue) return;
    setInputFromValue(newInputFromValue);
  };

  const updateInputTo = () => {

    
    if (!currentExchangeRate) return;
    if (typeof inputFromValue !== "number") return;
        console.log("!updateInputTo");
        console.log(currentExchangeRate![selectToCurrency]);
    // const newInputToValue = inputFromValue * 2;
    const newInputToValue =
      currentExchangeRate![selectToCurrency] * inputFromValue;
    // if (newInputToValue === inputToValue) return;
    setInputToValue(newInputToValue);
  };

  const handleInputFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const numberValue = roundingValue(Number(e.target.value));
    const numberValue = Number(e.target.value);
    if (numberValue) {
      setInputFromValue(numberValue);
    } else {
      setInputFromValue("");
      setInputToValue("");
    }
  };

  const handleInputToChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const numberValue = roundingValue(Number(e.target.value));
    const numberValue = Number(e.target.value);
    if (numberValue) {
      setInputToValue(numberValue);
    } else {
      setInputFromValue("");
      setInputToValue("");
    }
  };
  console.log(inputFromValue, inputToValue);

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
              // value={roundingValue(inputToValue)}
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

import * as React from "react";
import { useEffect, useState } from "react";
import { CurrencySelect } from "./CurrencySelect";
import { ItemCurrency } from "./types";
import {
  defaultAmount,
  firstCurrencyDefault,
  secondCurrencyDefault,
  separatorDot,
} from "./constants";
import ExchangeIcon from "../../../../content/icons/exchangeIcon.svg";
import { englishLanguage } from "../constants";
import "./styles.scss";

export const CurrencyConverter = () => {
  const [firstCurrentCurrency, setFirstCurrentCurrency] =
    useState<ItemCurrency>(firstCurrencyDefault);

  const [amountValue, setAmountValue] = useState<string>(defaultAmount);

  const [secondCurrentCurrency, setSecondCurrentCurrency] =
    useState<ItemCurrency>(secondCurrencyDefault);

  const handleViceVersa = () => {
    setFirstCurrentCurrency(secondCurrentCurrency);
    setSecondCurrentCurrency(firstCurrentCurrency);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(/[^\\d.]/gi, "");
    setAmountValue(result);
  };

  const [priceValue, setPriceValue] = useState<string>("");

  const sliceString = priceValue.split(separatorDot);
  const stringBeforeDot = sliceString[0];
  const stringAfterDot = sliceString[1];

  useEffect(() => {
    const sum = String(Number(amountValue) * 1.0529131);
    setPriceValue(sum);
  }, [amountValue]);

  return (
    <div className="container">
      <h5>{englishLanguage.converterTitle}</h5>
      <div className="amount-container">
        <CurrencySelect
          currentCurrency={firstCurrentCurrency}
          onSelect={setFirstCurrentCurrency}
        />
        <div className="amount">
          <label className="sign-currency">{englishLanguage.amount}</label>
          <div className="input-currency-container">
            <p className="sign-currency">{firstCurrentCurrency.sign}</p>
            <input
              className="input-currency"
              type="text"
              value={amountValue}
              onChange={handleChangeInput}
            />
            <hr className="bottom-line"></hr>
          </div>
        </div>
      </div>
      <button className="exchange-button" onClick={handleViceVersa}>
        <img src={ExchangeIcon} alt={ExchangeIcon} />
      </button>
      <div className="price-container">
        <CurrencySelect
          currentCurrency={secondCurrentCurrency}
          onSelect={setSecondCurrentCurrency}
        />
        <div className="amount">
          <label>{englishLanguage.price}</label>
          <div className="input-currency-container">
            <p className="sign-currency">{secondCurrentCurrency.sign}</p>
            <p className="dark-price">
              {stringBeforeDot +
                (stringAfterDot
                  ? separatorDot + stringAfterDot.slice(0, 2)
                  : "")}
            </p>
            <p className="bright-price">
              {stringAfterDot ? stringAfterDot.slice(2, 5) : ""}
            </p>
            <hr className="bottom-line"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

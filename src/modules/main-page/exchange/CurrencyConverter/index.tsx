import * as React from 'react';
import { useEffect, useState } from 'react';
import { CurrencySelect } from './CurrencySelect';
import { ItemCurrency } from './types';
import {
  DEFAULT_AMOUNT,
  FIRST_CURRENCY_DEFAULT,
  LENGTH_DARK_STRING_AFTER_DOT,
  MAX_LENGTH_AFTER_DOT,
  REG_EXP_FOR_NUMBER,
  RELATIVE_RATE,
  SECOND_CURRENCY_DEFAULT,
  SEPARATOR_DOT,
} from './constants';
import ExchangeIcon from '../../../../content/icons/exchangeIcon.svg';
import { englishLanguage } from '../constants';
import './styles.scss';

export const CurrencyConverter = () => {
  const [firstCurrentCurrency, setFirstCurrentCurrency] =
    useState<ItemCurrency>(FIRST_CURRENCY_DEFAULT);

  const [amountValue, setAmountValue] = useState<string>(DEFAULT_AMOUNT);

  const [secondCurrentCurrency, setSecondCurrentCurrency] =
    useState<ItemCurrency>(SECOND_CURRENCY_DEFAULT);

  const handleViceVersa = () => {
    setFirstCurrentCurrency(secondCurrentCurrency);
    setSecondCurrentCurrency(firstCurrentCurrency);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(REG_EXP_FOR_NUMBER, '');
    setAmountValue(result);
  };

  const [priceValue, setPriceValue] = useState<string>('');

  const sliceString = priceValue.split(SEPARATOR_DOT);
  const stringBeforeDot = sliceString[0];
  const stringAfterDot = sliceString[1];

  const darkString =
    stringBeforeDot +
    (stringAfterDot ? SEPARATOR_DOT + stringAfterDot.slice(0, LENGTH_DARK_STRING_AFTER_DOT) : '');

  const brightString = stringAfterDot
    ? stringAfterDot.slice(LENGTH_DARK_STRING_AFTER_DOT, MAX_LENGTH_AFTER_DOT)
    : '';

  useEffect(() => {
    const sum = String(Number(amountValue) * RELATIVE_RATE);
    setPriceValue(sum);
  }, [amountValue]);

  return (
    <div className="container">
      <h5>{englishLanguage.converterTitle}</h5>
      <div className="amount-container">
        <CurrencySelect currentCurrency={firstCurrentCurrency} onSelect={setFirstCurrentCurrency} />
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
            <p className="dark-price">{darkString}</p>
            <p className="bright-price">{brightString}</p>
            <hr className="bottom-line"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

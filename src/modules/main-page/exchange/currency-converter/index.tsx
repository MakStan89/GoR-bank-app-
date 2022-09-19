import * as React from 'react';
import { useEffect, useState } from 'react';
import { CurrencySelect } from './currency-select';
import { ItemCurrency } from './types';
import {
  DEFAULT_AMOUNT,
  FIRST_CURRENCY_DEFAULT,
  LENGTH_DARK_STRING_AFTER_DOT,
  MAX_LENGTH_AFTER_DOT,
  REG_EXP_ADD_SPACE,
  REG_EXP_CHECK_MORE_DOT,
  REG_EXP_DELETE_SPACE,
  REG_EXP_FOR_NUMBER,
  RELATIVE_RATE,
  SECOND_CURRENCY_DEFAULT,
  SEPARATOR_DOT,
} from './constants';
import ExchangeIcon from '../../../../content/icons/exchangeIcon.svg';
import { englishLanguage } from '../constants';
import styles from './styles.module.scss';

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
    let result = e.target.value
      .replace(REG_EXP_FOR_NUMBER, '')
      .replace(REG_EXP_CHECK_MORE_DOT, '$1');
    result = result.replace(REG_EXP_ADD_SPACE, ' ');
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
    ? stringAfterDot
        .slice(LENGTH_DARK_STRING_AFTER_DOT, MAX_LENGTH_AFTER_DOT)
        .replace(REG_EXP_DELETE_SPACE, '')
    : '';

  useEffect(() => {
    const sum = Number(amountValue.replace(REG_EXP_DELETE_SPACE, '')) * RELATIVE_RATE;
    const newSumValue = sum.toString().replace(REG_EXP_ADD_SPACE, ' ');
    setPriceValue(newSumValue);
  }, [amountValue]);

  return (
    <div className={styles.wrapper}>
      <h5>{englishLanguage.converterTitle}</h5>
      <div className={styles.container}>
        <CurrencySelect currentCurrency={firstCurrentCurrency} onSelect={setFirstCurrentCurrency} />
        <div className={styles.amount}>
          <label>{englishLanguage.amount}</label>
          <div className={styles.field}>
            <span className={styles.sign}>{firstCurrentCurrency.sign}</span>
            <input
              className={styles.input}
              type="text"
              value={amountValue}
              onChange={handleChangeInput}
            />
            <hr className={styles.line}></hr>
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={handleViceVersa}>
        <img src={ExchangeIcon} alt={ExchangeIcon} />
      </button>
      <div className={styles.price}>
        <CurrencySelect
          currentCurrency={secondCurrentCurrency}
          onSelect={setSecondCurrentCurrency}
        />
        <div className={styles.amount}>
          <label>{englishLanguage.price}</label>
          <div className={styles.field}>
            <span>{secondCurrentCurrency.sign}</span>
            <span className={styles.dark}>{darkString}</span>
            <span className={styles.bright}>{brightString}</span>
            <hr className={styles.line}></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

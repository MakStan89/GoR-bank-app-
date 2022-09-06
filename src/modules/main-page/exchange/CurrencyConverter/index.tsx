import * as React from 'react';
import { useEffect, useState } from 'react';
import { CurrencySelect } from './CurrencySelect';
import { CurrentCurrencyItem } from './CurrencySelect/types';
import { firstCurrencyDefault, secondCurrencyDefault } from './constants';
import ExchangeIcon from '../../../../content/icons/exchangeIcon.svg';
import { englishLanguage } from '../constants';
import './styles.scss';

export const CurrencyConverter = () => {
  const [firstCurrentCurrency, setFirstCurrentCurrency] =
    useState<CurrentCurrencyItem>(firstCurrencyDefault);

  const [amountValue, setAmountValue] = useState<string>('1');

  const [secondCurrentCurrency, setSecondCurrentCurrency] =
    useState<CurrentCurrencyItem>(secondCurrencyDefault);

  const handleViceVersa = () => {
    setFirstCurrentCurrency(secondCurrentCurrency);
    setSecondCurrentCurrency(firstCurrentCurrency);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(/[^\d.]/gi, '');
    setAmountValue(result);
  };

  const [priceValue, setPriceValue] = useState<string>('');

  const sliceSting = priceValue.split('.');

  useEffect(() => {
    const sum = String(Number(amountValue) * 1.0529131);
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
            <p className="dark-price">
              {sliceSting[0] + (sliceSting[1] ? '.' + sliceSting[1].slice(0, 2) : '')}
            </p>
            <p className="bright-price">{sliceSting[1] ? sliceSting[1].slice(2, 5) : ''}</p>
            <hr className="bottom-line"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

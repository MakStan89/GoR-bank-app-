import * as React from 'react';
import { ItemCurrency } from './types';
import './styles.scss';

export const CurrencyItem = ({ name, fullName, image, buying, selling }: ItemCurrency) => {
  return (
    <div className="row">
      <div className="currency-info">
        <img src={image} alt={image} />
        <div className="currency-name">
          <strong>{name}</strong>
          <label className="full-name">{fullName}</label>
        </div>
      </div>
      <div className="currency-rates">
        <div className="cost">{buying}</div>
        <div className="cost">{selling}</div>
      </div>
    </div>
  );
};

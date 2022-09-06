import * as React from 'react';
import { SelectItemCurrency } from './types';
import './styles.scss';

export const SelectItem = ({ image, name, fullName }: SelectItemCurrency) => {
  return (
    <>
      <img src={image} className="select-flag" alt={image} />
      <strong>{name}</strong>
      <label className="full-name">{fullName}</label>
    </>
  );
};

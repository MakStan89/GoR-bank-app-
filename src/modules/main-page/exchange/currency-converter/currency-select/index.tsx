import * as React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import { SelectItem } from '../select-item';
import { currencies } from '../../constants';
import { CurrencySelectItem } from './types';
import styles from './styles.module.scss';

export const CurrencySelect = ({ currentCurrency, onSelect }: CurrencySelectItem) => {
  const [isOptionsOpen, setOptionsOpen] = useState<boolean>(false);

  const optionsCurrencies = currencies.map(obj => (
    <div key={obj.id} className={styles.content} onClick={() => handleChooseCurrency(obj.id)}>
      <SelectItem name={obj.name} fullName={obj.fullName} image={obj.image} />
    </div>
  ));

  const handleOptionsOpen = () => {
    setOptionsOpen(!isOptionsOpen);
  };

  const fetchCurrencyInfo = (id: number) => {
    onSelect(currencies.filter(obj => obj.id === id)[0]);
  };

  const handleChooseCurrency = (id: number) => {
    fetchCurrencyInfo(id);
    setOptionsOpen(!isOptionsOpen);
  };

  const selectClassName = cn(isOptionsOpen ? [styles['options-open']] : styles.options);

  return (
    <>
      <div className={styles.container} onClick={handleOptionsOpen}>
        <SelectItem
          image={currentCurrency.image}
          name={currentCurrency.name}
          fullName={currentCurrency.fullName}
        />
        <div className={styles.arrow}></div>
      </div>
      <div className={selectClassName}>{optionsCurrencies}</div>
    </>
  );
};

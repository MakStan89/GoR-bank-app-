import * as React from 'react';
import { ContainerComponent } from '../container-component/index';
import { currencies, englishLanguage, russianLanguage } from './constants';
import { ExchangeItem } from './exchange-item';
import s from './styles.module.scss';

export const ExchangeRates = () => {

  return (
    <div className={s.outerContainer}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={s.content}>
          <div className={s.tableNames}>
            <p className={s.currency}>{englishLanguage.tableCurrency}</p>
            <p className={s.buying}>{englishLanguage.tableBuying}</p>
            <p className={s.selling}>{englishLanguage.tableSelling}</p>
          </div>
          {currencies.map((obj) => (
            <div key={obj.id} className={s.exchangeItemContainer}>
              <ExchangeItem
                name={obj.name}
                fullName={obj.fullName}
                image={obj.image}
                buying={obj.buying}
                selling={obj.selling}
              />
            </div>
          ))}
        </div>
      </ContainerComponent>
    </div>
  );
};

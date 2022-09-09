import * as React from 'react';
import { ContainerComponent } from '../container-component/index';
import { CURRENCIES, englishLanguage, russianLanguage } from './constants';
import { ExchangeItem } from './exchange-item';
import styles from './styles.module.scss';

export const ExchangeRates = () => {

  return (
    <div className={styles['outer-container']}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={styles.content}>
          <div className={styles['table-names']}>
            <p className={styles.currency}>{englishLanguage.tableCurrency}</p>
            <p className={styles.buying}>{englishLanguage.tableBuying}</p>
            <p className={styles.selling}>{englishLanguage.tableSelling}</p>
          </div>
          {CURRENCIES.map((obj) => (
            <div key={obj.id} className={styles['exchange-item-container']}>
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

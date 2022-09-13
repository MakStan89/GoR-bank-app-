import * as React from 'react';
import { CurrencyItem } from './currency-item';
import { CurrencyConverter } from './currency-converter';
import { currencies, englishLanguage } from './constants';
import { Footer } from '../../template-page/footer';
import { Header } from '../../template-page/header';
import { Title } from './title';
import styles from './styles.module.scss';

export const Exchange = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Title text={englishLanguage.backButton} title={''} />
        <div className={styles.wrapper}>
          <h5>{englishLanguage.exchangeTitle}</h5>
          <div className={styles.converter}>
            <CurrencyConverter />
          </div>
          <div className={styles.table}>
            <div className={styles.title}>
              <p className={styles.currency}>{englishLanguage.tableCurrency}</p>
              <p className={styles.buying}>{englishLanguage.tableBuying}</p>
              <p className={styles.selling}>{englishLanguage.tableSelling}</p>
            </div>
            {currencies.map(obj => (
              <div key={obj.id} className={styles.content}>
                <CurrencyItem
                  name={obj.name}
                  fullName={obj.fullName}
                  image={obj.image}
                  buying={obj.buying}
                  selling={obj.selling}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

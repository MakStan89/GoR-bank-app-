import * as React from 'react';
import { ExchangeRates } from './exchange-rates';
import { FeaturedServices } from './featured-services';
import { History } from './history';
import { MyCards } from './my-cards';
import styles from './styles.module.scss';

export const MainMenu = () => {

  return (
    <div className={styles['main-container']}>
      <MyCards />
      <History />
      <ExchangeRates />
      <FeaturedServices/>
    </div>
  );
};

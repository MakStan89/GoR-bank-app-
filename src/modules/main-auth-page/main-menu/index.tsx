import * as React from 'react';
import { ExchangeRates } from './exchange-rates';
import { FeaturedServices } from './featured-services';
import { History } from './history';
import { MyCards } from './my-cards';
import s from './styles.module.scss';

export const MainMenu = () => {

  return (
    <div className={s.mainContainer}>
      <MyCards />
      <History />
      <ExchangeRates />
      <FeaturedServices/>
    </div>
  );
};

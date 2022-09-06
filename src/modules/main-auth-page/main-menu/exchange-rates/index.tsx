import * as React from 'react';
import s from './styles.module.scss';
import { ContainerComponent } from '../container-component/index';
import { englishLanguage, russianLanguage } from './constants';

export const ExchangeRates = () => {

  return (
    <div className={s.outerContainer}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={s.content}></div>
      </ContainerComponent>
    </div>
  );
};

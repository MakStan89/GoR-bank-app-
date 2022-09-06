import * as React from 'react';
import { ContainerComponent } from '../container-component';
import s from './styles.module.scss';
import { englishLanguage, russianLanguage } from './constants';

export const History = () => {

  return (
    <div className={s.outerContainer}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={s.content}></div>
      </ContainerComponent>
    </div>
  );
};

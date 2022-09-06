import * as React from 'react';
import { FC } from 'react';
import { ContainerComponent } from '../container-component';
import { englishLanguage } from './constants';
import s from './styles.module.scss';

export const MyCards: FC = () => {

  return (
    <div className={s.outerContainer}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={s.content}></div>
      </ContainerComponent>
    </div>
  );
};

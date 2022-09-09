import * as React from 'react';
import { FC } from 'react';
import { ContainerComponent } from '../container-component';
import { CardItem } from './card-item';
import { CARDS, englishLanguage } from './constants';
import s from './styles.module.scss';

export const MyCards: FC = () => {

  return (
    <div className={s.outerContainer}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={s.content}>
          {CARDS.map((obj) => (
            <div key={obj.id} className={s.cardItemContainer}>
              <CardItem
                name={obj.name}
                logo={obj.logo}
                hiddenNumber={obj.hiddenNumber}
                number={obj.number}
                date={obj.date}
                background={obj.background}
                balance={obj.balance}
                system={obj.system}
              />
            </div>
          ))}
        </div>
      </ContainerComponent>
    </div>
  );
};

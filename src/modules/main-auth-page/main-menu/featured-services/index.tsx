import * as React from 'react';
import { ContainerComponent } from '../container-component';
import { englishLanguage, icon, russianLanguage } from './constants';
import { Service } from './service';
import s from './styles.module.scss';

export const FeaturedServices = () => {

  return (
    <div className={s.outerContainer}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={s.content}>
          <Service text={englishLanguage.text1} icon={icon.icon1} />
          <Service text={englishLanguage.text2} icon={icon.icon2} />
          <Service text={englishLanguage.text3} icon={icon.icon3} />
          <Service text={englishLanguage.text4} icon={icon.icon4} />
          <Service text={englishLanguage.textAdd} icon={icon.iconAdd} />
        </div>
      </ContainerComponent>
    </div>
  );
};

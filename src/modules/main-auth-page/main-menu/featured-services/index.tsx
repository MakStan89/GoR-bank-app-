import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerComponent } from '../container-component';
import { englishLanguage, russianLanguage } from './constants';
import s from './styles.module.scss';

export const FeaturedServices = () => {

  return (
    <div className={s.outerContainer}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={s.content}>
          <NavLink to="#" className={s.service}>
            <div className={s.iconBlock}>
              <span className={`${s.icon} ${s.icon1}`} />
            </div>
            <div className={s.textBlock}>
              <span className={s.text}>{englishLanguage.text1}</span>
            </div>
          </NavLink>
          <NavLink to="#" className={s.service}>
            <div className={s.iconBlock}>
              <span className={`${s.icon} ${s.icon2}`} />
            </div>
            <div className={s.textBlock}>
              <span className={s.text}>{englishLanguage.text2}</span>
            </div>
          </NavLink>
          <NavLink to="#" className={s.service}>
            <div className={s.iconBlock}>
              <span className={`${s.icon} ${s.icon3}`} />
            </div>
            <div className={s.textBlock}>
              <span className={s.text}>{englishLanguage.text3}</span>
            </div>
          </NavLink>
          <NavLink to="#" className={s.service}>
            <div className={s.iconBlock}>
              <span className={`${s.icon} ${s.icon4}`} />
            </div>
            <div className={s.textBlock}>
              <span className={s.text}>{englishLanguage.text4}</span>
            </div>
          </NavLink>
          <NavLink to="#" className={s.service}>
            <div className={`${s.iconBlock} ${s.iconBlockAdd}`}>
              <span className={`${s.icon} ${s.iconAdd}`} />
            </div>
            <div className={s.textBlock}>
              <span className={s.text}>{englishLanguage.textAdd}</span>
            </div>
          </NavLink>
        </div>
      </ContainerComponent>
    </div>
  );
};

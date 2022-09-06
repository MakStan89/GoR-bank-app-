import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { englishLanguage, russianLanguage } from './constants';
import s from './styles.module.scss';

export const Navbar = () => {

  /*const handleClick = (e: React.MouseEvent<HTMLLinkElement>) => {
    const elem = e.target as HTMLButtonElement;
    !elem.classList.contains('isActive') ? elem.classList.add('isActive')
  };*/

  return (
    <div className={s.container}>
      <NavLink to="#" className={`${s.item} ${s.isActive}`}>
        <div className={s.itemIcon}> 
          <span className={`${s.mainPage} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.mainPage}</span>
      </NavLink>
      <NavLink to="#" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.payments} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.payments}</span>
      </NavLink>
      <NavLink to="#" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.transfers} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.transfers}</span>
      </NavLink>
      <NavLink to="#" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.cards} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.cards}</span>
      </NavLink>
      <NavLink to="#" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.loans} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.loans}</span>
      </NavLink>
      <NavLink to="#" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.deposits} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.deposits}</span>
      </NavLink>
      <NavLink to="#" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.investing} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.investing}</span>
      </NavLink>
      <NavLink to="#" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.insurance} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.insurance}</span>
      </NavLink>
      <NavLink to="#" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.dealsAndOffers} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.dealsAndOffers}</span>
      </NavLink>
    </div>
  );
};

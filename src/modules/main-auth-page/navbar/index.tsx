import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { englishLanguage, russianLanguage } from './constants';
import s from './styles.module.scss';

export const Navbar = () => {

  /*const handleClick = (e: React.MouseEvent<HTMLLinkElement>) => {
    const elem = e.target as HTMLButtonElement;
    !elem.classList.contains('isActive') ? elem.classList.add('isActive')
  };*/

  let location = useLocation();
  location.pathname


  return (
    <div className={s.container}>
      <NavLink to="/m" className={`${s.item} ${s.isActive}`}>
        <div className={s.itemIcon}> 
          <span className={`${s.mainPage} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.mainPage}</span>
      </NavLink>
      <NavLink to="/payments" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.payments} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.payments}</span>
      </NavLink>
      <NavLink to="/transfers" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.transfers} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.transfers}</span>
      </NavLink>
      <NavLink to="/cards" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.cards} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.cards}</span>
      </NavLink>
      <NavLink to="/cards/my_cards" className={`${s.item} ${s.hiddenItem}`}>
        <div className={s.mark}></div>
        <span className={s.itemText}>{englishLanguage.myCards}</span>
      </NavLink>
      <NavLink to="/cards/card_products" className={`${s.item} ${s.hiddenItem}`}>
        <div className={s.mark}> </div>
        <span className={s.itemText}>{englishLanguage.cardProducts}</span>
      </NavLink>
      <NavLink to="/loans" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.loans} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.loans}</span>
      </NavLink>
      <NavLink to="/loans/my_loans" className={`${s.item} ${s.hiddenItem}`}>
        <div className={s.mark}></div>
        <span className={s.itemText}>{englishLanguage.myLoans}</span>
      </NavLink>
      <NavLink to="/loans/loan_products" className={`${s.item} ${s.hiddenItem}`}>
        <div className={s.mark}></div>
        <span className={s.itemText}>{englishLanguage.loanProducts}</span>
      </NavLink>
      <NavLink to="/loans/apply_for_a_loan" className={`${s.item} ${s.hiddenItem}`}>
        <div className={s.mark}></div>
        <span className={s.itemText}>{englishLanguage.applyForALoan}</span>
      </NavLink>
      <NavLink to="/deposits" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.deposits} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.deposits}</span>
      </NavLink>
      <NavLink to="/investing" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.investing} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.investing}</span>
      </NavLink>
      <NavLink to="insurance" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.insurance} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.insurance}</span>
      </NavLink>
      <NavLink to="dealsAndOffers" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.dealsAndOffers} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.dealsAndOffers}</span>
      </NavLink>
    </div>
  );
};

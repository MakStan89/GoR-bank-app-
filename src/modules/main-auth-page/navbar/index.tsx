import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CARDS, CARDS_SEL, DAO, DAO_SEL, DEP, DEP_SEL, englishLanguage, INS, INS_SEL, INV, INV_SEL, LOANS, LOANS_SEL, MP, MP_SEL, PATH, PAY, PAY_SEL, russianLanguage, TRANS, TRANS_SEL } from './constants';
import { NavbarHiddenItem } from './navbar-hidden-item';
import { NavbarItem } from './navbar-item';
import styles from './styles.module.scss';

export const Navbar = () => {

  /*const handleClick = (e: React.MouseEvent<HTMLLinkElement>) => {
    const elem = e.target as HTMLButtonElement;
    !elem.classList.contains('isActive') ? elem.classList.add('isActive')
  };*/

  let location = useLocation();
  location.pathname

  return (
    <div className={styles.container}>
      <NavbarItem path={PATH.mainPage} image={MP} imageSelect={MP_SEL} name={englishLanguage.mainPage} />
      <NavbarItem path={PATH.payments} image={PAY} imageSelect={PAY_SEL} name={englishLanguage.payments} />
      <NavbarItem path={PATH.transfers} image={TRANS} imageSelect={TRANS_SEL} name={englishLanguage.transfers} />
      <NavbarItem path={PATH.cards} image={CARDS} imageSelect={CARDS_SEL} name={englishLanguage.cards} />
      <NavbarHiddenItem path={PATH.myCards} name={englishLanguage.myCards} />
      <NavbarHiddenItem path={PATH.cardProducts} name={englishLanguage.cardProducts} />
      <NavbarItem path={PATH.loans} image={LOANS} imageSelect={LOANS_SEL} name={englishLanguage.loans} />
      <NavbarHiddenItem path={PATH.myLoans} name={englishLanguage.myLoans} />
      <NavbarHiddenItem path={PATH.loanProducts} name={englishLanguage.loanProducts} />
      <NavbarHiddenItem path={PATH.applyForALoan} name={englishLanguage.applyForALoan} />
      <NavbarItem path={PATH.deposits} image={DEP} imageSelect={DEP_SEL} name={englishLanguage.deposits} />
      <NavbarItem path={PATH.investing} image={INV} imageSelect={INV_SEL} name={englishLanguage.investing} />
      <NavbarItem path={PATH.insurance} image={INS} imageSelect={INS_SEL} name={englishLanguage.insurance} />
      <NavbarItem path={PATH.dealsAndOffers} image={DAO} imageSelect={DAO_SEL} name={englishLanguage.dealsAndOffers} />
    </div>
  );
};

    /*<div className={s.container}>
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
      <NavLink to="/insurance" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.insurance} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.insurance}</span>
      </NavLink>
      <NavLink to="/deals&Offers" className={s.item}>
        <div className={s.itemIcon}> 
          <span className={`${s.dealsAndOffers} ${s.icon}`}></span>
        </div>
        <span className={s.itemText}>{englishLanguage.dealsAndOffers}</span>
      </NavLink>
    </div>
  );
};*/

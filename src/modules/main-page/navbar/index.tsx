import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { englishLanguage, PATH, russianLanguage} from './constants';
import { NavbarSubitem } from './navbar-subitem';
import { NavbarItem } from './navbar-item';
import cn from 'classnames';
import {
  MainPageIcon, PaymentsIcon, TransfersIcon, CardsIcon, LoansIcon, DepositsIcon, InvestingIcon, InsuranceIcon, DealsAndOffersIcon
} from '../../../content/icons/main-auth-page';
import styles from './styles.module.scss';

export const Navbar = () => {

  let location = useLocation();
  let active = [true, false, false, false, false, false, false, false, false, false, false, false, false, false];
  let hidden = [false, false, false, false, true, true, false, true, true, true, false, false, false, false];

  for (let i = 0; i < active.length; i++) {
    if (location.pathname == Object.values(PATH)[i]) {
      active[i] = true;
    } else (active[i] = false);
  }

  active[3] ? (hidden[4] = false, hidden[5] = false, hidden[1] = true, hidden[2] = true, active[4] = true) : (hidden[4], hidden[5]);
  active[4] ? (hidden[4] = false, hidden[5] = false, hidden[1] = true, hidden[2] = true, active[3] = true) : (hidden[4], hidden[5]);
  active[5] ? (hidden[4] = false, hidden[5] = false, hidden[1] = true, hidden[2] = true, active[3] = true) : (hidden[4], hidden[5]);
  active[6] ? (hidden[7] = false, hidden[8] = false, hidden[9] = false, hidden[1] = true, hidden[2] = true, active[7] = true) : (hidden[7], hidden[8], hidden[9]);
  active[7] ? (hidden[7] = false, hidden[8] = false, hidden[9] = false, hidden[1] = true, hidden[2] = true, active[6] = true) : (hidden[7], hidden[8], hidden[9]);
  active[8] ? (hidden[7] = false, hidden[8] = false, hidden[9] = false, hidden[1] = true, hidden[2] = true, active[6] = true) : (hidden[7], hidden[8], hidden[9]);
  active[9] ? (hidden[7] = false, hidden[8] = false, hidden[9] = false, hidden[1] = true, hidden[2] = true, active[6] = true) : (hidden[7], hidden[8], hidden[9]);

  const flexibleContainer = cn(styles.container, { [styles['container-large']] : active[6] === true });

  return (
    <div className={flexibleContainer}>
      <NavbarItem path={PATH.mainPage} image={<MainPageIcon isWhite={active[0]} />} name={englishLanguage.mainPage} isActive={active[0]} isHidden={hidden[0]} />
      <NavbarItem path={PATH.payments} image={<PaymentsIcon isWhite={active[1]}/>} name={englishLanguage.payments} isActive={active[1]} isHidden={hidden[1]} />
      <NavbarItem path={PATH.transfers} image={<TransfersIcon isWhite={active[2]}/>} name={englishLanguage.transfers} isActive={active[2]} isHidden={hidden[2]} />
      <NavbarItem path={PATH.cards} image={<CardsIcon isWhite={active[3]}/>} name={englishLanguage.cards} isActive={active[3]} isHidden={hidden[3]} />
      <NavbarSubitem path={PATH.myCards} name={englishLanguage.myCards} isActive={active[4]} isHidden={hidden[4]} />
      <NavbarSubitem path={PATH.cardProducts} name={englishLanguage.cardProducts} isActive={active[5]} isHidden={hidden[5]} />
      <NavbarItem path={PATH.loans} image={<LoansIcon isWhite={active[6]}/>} name={englishLanguage.loans} isActive={active[6]} isHidden={hidden[6]} />
      <NavbarSubitem path={PATH.myLoans} name={englishLanguage.myLoans} isActive={active[7]} isHidden={hidden[7]} />
      <NavbarSubitem path={PATH.loanProducts} name={englishLanguage.loanProducts} isActive={active[8]} isHidden={hidden[8]} />
      <NavbarSubitem path={PATH.applyForALoan} name={englishLanguage.applyForALoan} isActive={active[9]} isHidden={hidden[9]} />
      <NavbarItem path={PATH.deposits} image={<DepositsIcon isWhite={active[10]}/>} name={englishLanguage.deposits} isActive={active[10]} isHidden={hidden[10]} />
      <NavbarItem path={PATH.investing} image={<InvestingIcon isWhite={active[11]}/>} name={englishLanguage.investing} isActive={active[11]} isHidden={hidden[11]}/>
      <NavbarItem path={PATH.insurance} image={<InsuranceIcon isWhite={active[12]}/>} name={englishLanguage.insurance} isActive={active[12]} isHidden={hidden[12]} />
      <NavbarItem path={PATH.dealsAndOffers} image={<DealsAndOffersIcon isWhite={active[13]}/>} name={englishLanguage.dealsAndOffers} isActive={active[13]} isHidden={hidden[13]} />
    </div>
  );
};

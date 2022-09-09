import BGD from '../../../../content/icons/main-auth-page/cardBgd.svg';
import LOGO from '../../../../content/icons/main-auth-page/bankLogo.svg';
import DOTS from '../../../../content/icons/main-auth-page/dots.svg';
import SYS from '../../../../content/icons/main-auth-page/paymentSystem.svg';
import { CardsType } from './card-item/types';

export const russianLanguage = {
  title: 'Мои карты',
  } as const;

export const englishLanguage = {
  title: 'My cards',
} as const;

export const CARDS: CardsType[] = [
  {
    id: 0,
    name: 'Universal',
    logo: LOGO,
    hiddenNumber: DOTS,
    number: '1111222233337678',
    date: '08/29',
    background: BGD,
    balance: '100,000.00 GBP',
    system: SYS,
  },
  {
    id: 1,
    name: 'Purchase Plus',
    logo: LOGO,
    hiddenNumber: DOTS,
    number: '1111222233338995',
    date: '06/24',
    background: BGD,
    balance: '35,000.25 USD',
    system: SYS,
  },
];
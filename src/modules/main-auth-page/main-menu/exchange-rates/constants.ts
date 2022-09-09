import { ItemCurrency } from '../../../main-page/exchange/currency-item/types';
import EU from '../../../../content/icons/currencies/EU.svg';
import USD from '../../../../content/icons/currencies/US.svg';
import CAD from '../../../../content/icons/currencies/Canada.svg';
import GBP from '../../../../content/icons/currencies/GBP.svg';
import CHF from '../../../../content/icons/currencies/Switzerland.svg';
import EURUSD from '../../../../content/icons/currencies/EU_USD.svg';
import EURCHF from '../../../../content/icons/currencies/EU_CHF.svg';

export const russianLanguage = {
  title: 'Курсы валют',
  tableCurrency: 'Валюта',
  tableBuying: 'Покупка',
  tableSelling: 'Продажа',
  backButton: 'Назад',
  } as const;

export const englishLanguage = {
  title: 'Exchange rates',
  tableCurrency: 'Currency',
  tableBuying: 'Buying',
  tableSelling: 'Selling',
  backButton: 'Back',
} as const;

export const CURRENCIES: ItemCurrency[] = [
  {
    id: 0,
    name: 'EUR',
    fullName: 'Euro',
    image: EU,
    buying: 0.85,
    selling: 0.68,
  },
  {
    id: 1,
    name: 'USD',
    fullName: 'US Dollar',
    image: USD,
    buying: 0.81,
    selling: 0.64,
  },
  {
    id: 2,
    name: 'CAD',
    fullName: 'Canadian Dollar',
    image: CAD,
    buying: 0.74,
    selling: 0.71,
  },
  {
    id: 3,
    name: 'GBP',
    fullName: 'British pound',
    image: GBP,
    buying: 1.21,
    selling: 0.96,
  },
  {
    id: 4,
    name: 'CHF',
    fullName: 'Swiss franc',
    image: CHF,
    buying: 0.98,
    selling: 0.71,
  },
  {
    id: 5,
    name: 'EUR/USD',
    fullName: 'Euro to Dollar',
    image: EURUSD,
    buying: 1.42,
    selling: 1.10,
  },
  {
    id: 6,
    name: 'EUR/CHF',
    fullName: 'Euro to Franc',
    image: EURCHF,
    buying: 1.21,
    selling: 0.82,
  },
];

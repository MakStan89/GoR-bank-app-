import { ItemCurrency } from './types';
import EU from '../../../content/icons/currencies/EU.svg';
import USD from '../../../content/icons/currencies/US.svg';
import GBP from '../../../content/icons/currencies/GBP.svg';
import CHF from '../../../content/icons/currencies/Switzerland.svg';
import EURUSD from '../../../content/icons/currencies/EU_USD.svg';

export const currencies: ItemCurrency[] = [
  {
    id: 0,
    name: 'EUR',
    fullName: 'Euro',
    image: EU,
    buying: 151.54,
    selling: 151.54,
    sign: '€',
  },
  {
    id: 1,
    name: 'USD',
    fullName: 'US Dollar',
    image: USD,
    buying: 138.75,
    selling: 151.54,
    sign: '$',
  },
  {
    id: 2,
    name: 'GBP',
    fullName: 'British pound',
    image: GBP,
    buying: 138.75,
    selling: 151.54,
  },
  {
    id: 3,
    name: 'CHF',
    fullName: 'Swiss franc',
    image: CHF,
    buying: 29.75,
    selling: 28.07,
  },
  {
    id: 4,
    name: 'EUR/USD',
    fullName: 'Euro to Dollar',
    image: EURUSD,
    buying: 1.1,
    selling: '',
  },
];

export const russianLanguage = {
  exchangeTitle: 'Курс валют',
  tableCurrency: 'Валюта',
  tableBuying: 'Покупка',
  tableSelling: 'Продажа',
  converterTitle: 'Обмен валют',
  amount: 'Сумма',
  price: 'Стоимость',
} as const;

export const englishLanguage = {
  exchangeTitle: 'Exchange Rates',
  tableCurrency: 'Currency',
  tableBuying: 'Buying',
  tableSelling: 'Selling',
  converterTitle: 'Currency Converter',
  amount: 'Amount',
  price: 'Price',
} as const;

import EU from '../../../../content/icons/currencies/EU.svg';
import USD from '../../../../content/icons/currencies/US.svg';
import { ItemCurrency } from './types';

export const FIRST_CURRENCY_DEFAULT: ItemCurrency = {
  id: 1,
  name: 'USD',
  fullName: 'US Dollar',
  image: USD,
  buying: 138.75,
  selling: 151.54,
  sign: '$',
};

export const SECOND_CURRENCY_DEFAULT: ItemCurrency = {
  id: 0,
  name: 'EUR',
  fullName: 'Euro',
  image: EU,
  buying: 151.54,
  selling: 151.54,
  sign: '€',
};

export const SEPARATOR_DOT: string = '.';

export const REG_EXP_FOR_NUMBER = /[^\d.]/gi;

export const DEFAULT_AMOUNT: string = '1';

export const MAX_LENGTH_AFTER_DOT: number = 5;

export const LENGTH_DARK_STRING_AFTER_DOT: number = 2;

export const RELATIVE_RATE: number = 1.0529131;

export const REG_EXP_ADD_SPACE = /\B(?=(\d{3})+(?!\d))/g;

export const REG_EXP_DELETE_SPACE = /\s/g;

export const REG_EXP_CHECK_MORE_DOT = /^([^.]*\.)|\./g;

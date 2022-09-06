import EU from '../../../../content/icons/currencies/EU.svg';
import USD from '../../../../content/icons/currencies/US.svg';
import { ItemCurrency } from './types';

export const firstCurrencyDefault: ItemCurrency = {
  id: 1,
  name: 'USD',
  fullName: 'US Dollar',
  image: USD,
  buying: 138.75,
  selling: 151.54,
  sign: '$',
};

export const secondCurrencyDefault: ItemCurrency = {
  id: 0,
  name: 'EUR',
  fullName: 'Euro',
  image: EU,
  buying: 151.54,
  selling: 151.54,
  sign: '€',
};

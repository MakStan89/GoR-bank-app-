import EU from "../../../../content/icons/currencies/EU.svg";
import USD from "../../../../content/icons/currencies/US.svg";
import { ItemCurrency } from "./types";

export const FIRST_CURRENCY_DEFAULT: ItemCurrency = {
  id: 1,
  name: "USD",
  fullName: "US Dollar",
  image: USD,
  buying: 138.75,
  selling: 151.54,
  sign: "$",
};

export const SECOND_CURRENCY_DEFAULT: ItemCurrency = {
  id: 0,
  name: "EUR",
  fullName: "Euro",
  image: EU,
  buying: 151.54,
  selling: 151.54,
  sign: "€",
};

export const separatorDot: string = ".";

export const regExpForNumber = /[^\d.]/gi;

export const defaultAmount: string = "1";

export const maxLengthAfterDot: number = 5;

export const lengthDarkStringAfterDot = 2;

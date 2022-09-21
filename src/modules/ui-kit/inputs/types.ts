import { ChangeEvent } from 'react';

export type Props = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValid: (valid: boolean, name: string) => void;
  request?: number;
  isMessage?: boolean;
  labelText?: string;
  placeholderText?: string;
};

export type IncomeProps = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValid: (valid: boolean, name: string) => void;
  name: string;
  placeholder: string;
  request: number;
  minValue: number;
  maxValue: number;
};

export type MonthProps = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValid: (valid: boolean, name: string) => void;
  name: string;
  placeholder: string;
  request: number;
  minValue: number;
  maxValue: number;
};

export type EinProps = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValid: (valid: boolean, name: string) => void;
  name: string;
  placeholder: string;
  request: number;
};

export type RangeProps = {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  width: number;
  value: string;
  minValue: number;
  maxValue: number;
  name?: string;
};

export enum TelephoneErrors {
  None = 0,
  IncorrectNumber = 1,
  Registration = 2,
  Request = 3,
}

export enum SmsErrors {
  None = 0,
  Disable = 1,
  FirstAttempt = 2,
  SecondAttempt = 3,
  FailedAttempts = 4,
}

export enum PasswordErrors {
  None = 0,
  CapsLock = 1,
  IncorrectPassword = 2,
  Request = 3,
}

export enum PassportErrors {
  None = 0,
  CapsLock = 1,
  IncorrectPassport = 2,
  Request = 3,
}

export enum NameErrors {
  None = 0,
  Length = 1,
  IncorrectSymbols = 2,
}

export enum PatronymicErrors {
  None = 0,
  Message = 1,
  Length = 2,
  IncorrectSymbols = 3,
}

export enum IncomeErrors {
  None = 0,
  CapsLock = 1,
  Length = 2,
  IncorrectIncome = 3,
  Request = 4,
}

export enum EinErrors {
  None = 0,
  CapsLock = 1,
  Length = 2,
  IncorrectIncome = 3,
  Request = 4,
}

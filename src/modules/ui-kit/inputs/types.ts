import { ChangeEvent } from 'react';

export type Props = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValid: (valid: boolean, name: string) => void;
  request: number;
  isMessage?: boolean;
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
  Length = 2,
  IncorrectPassport = 3,
  Request = 4,
}
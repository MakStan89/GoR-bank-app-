import { ChangeEvent } from 'react';

export type Props = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValid: (v: boolean, n: string) => void;
  request: number;
  isMessage?: boolean;
};

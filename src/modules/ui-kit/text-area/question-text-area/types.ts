import { ChangeEvent } from 'react';

export type Props = {
  value: string;
  name: string;
  text: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleValid: (v: boolean, n: string) => void;
};

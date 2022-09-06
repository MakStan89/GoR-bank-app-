import { ChangeEvent } from 'react';

export type Props = {
  value: string;
  name: string;
  text: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleValid: (valid: boolean, name: string) => void;
};

export enum SecurityQuestionErrors {
  None = 0,
  LowLength = 1,
  IncorrectQuestion = 2,
  HighLength = 3,
}

import { ChangeEvent } from "react";

export type LoanAmountProps = {
  title: string;
  subtitle: string;
  values: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValid: (valid: boolean, name: string) => void;
};

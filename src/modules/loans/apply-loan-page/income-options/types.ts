import { ChangeEvent } from "react";

export type IncomeOptionProps = {
  values: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleValid: (valid: boolean, name: string) => void;
};

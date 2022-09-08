import { ChangeEvent, useState } from 'react';
import { defaultFormData, defaultFormValid } from './constants';
import { FormDataProps, FormValidityProps } from './types';

export const useFormValidation = () => {
  const [values, setValues] = useState<FormDataProps>(defaultFormData);
  const [valid, setValid] = useState<FormValidityProps>(defaultFormValid);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };
  const handleValid = (validly: boolean, name: string) => {
    setValid({ ...valid, [name]: validly });
  };

  return { values, handleChange, handleValid, valid };
};

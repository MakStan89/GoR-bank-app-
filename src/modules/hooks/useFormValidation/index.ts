import { ChangeEvent, useState } from 'react';
import { defaultFormValid } from './constants';
import { FormDataProps, FormValidityProps } from './types';

export const useFormValidation = () => {
  const [values, setValues] = useState<FormDataProps>({});
  const [valid, setValid] = useState<FormValidityProps>(defaultFormValid);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === 'password' || name === 'confirmPassword') {
      setValues({ ...values, [name]: value.replace(/\W+/g, '') });
    } else {
      setValues({ ...values, [name]: value });
    }
  };
  const handleValid = (validly: boolean, name: string) => {
    setValid({ ...valid, [name]: validly });
  };

  return { values, handleChange, handleValid, valid };
};

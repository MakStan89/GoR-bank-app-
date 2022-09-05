import { ChangeEvent, useState } from 'react';
import { FormDataProps, FormValidityProps } from '../types';

export const useFormValidation = () => {
  const [values, setValues] = useState<FormDataProps>({ passport: '', password: '' });
  const [valid, setValid] = useState<FormValidityProps>({ passport: false, password: false });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };
  const handleValid = (validly: boolean, name: string) => {
    setValid({ ...valid, [name]: validly });
  };

  return { values, handleChange, handleValid, valid };
};

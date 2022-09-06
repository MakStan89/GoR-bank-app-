import { ChangeEvent, useEffect, useState } from 'react';
import { FormDataProps, FormValidityProps } from '../../../../hooks/useFormValidation/types';
import { defaultValues, defaultValidity } from './constants';

export const useFormValidation = () => {
  const [values, setValues] = useState<FormDataProps>(defaultValues);
  const [valid, setValid] = useState<FormValidityProps>(defaultValidity);

  useEffect(() => setValues({ ...values, question: '', answer: '' }), [values.questions]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    setValues({ ...values, [name]: value });
  };
  const handleSelect = (text: string) => {
    setValues({ ...values, questions: text });
  };
  const handleValid = (validly: boolean, name: string) => {
    setValid({ ...valid, [name]: validly });
  };

  return { values, handleChange, handleSelect, handleValid, valid };
};

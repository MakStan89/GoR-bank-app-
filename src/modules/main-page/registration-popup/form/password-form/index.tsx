import * as React from 'react';
import { useState, useEffect } from 'react';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import { PasswordInput, ConfirmPasswordInput, ContinueButton } from '../../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from '../types';
import styles from './styles.module.scss';

export const PasswordForm = ({ onNextStep }: Props) => {
  const [request, setRequest] = useState(null);
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    values.password === values.confirmPassword ? onNextStep(values) : setRequest(1);
  };

  useEffect(() => setRequest(null), [values]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <PasswordInput
        value={values.password}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
        isMessage={true}
        labelText={russianLanguage.passwordLabelText}
        placeholderText={russianLanguage.passwordPlaceholderText}
      />
      <ConfirmPasswordInput
        value={values.confirmPassword}
        handleChange={handleChange}
        handleValid={handleValid}
        request={request}
        labelText={russianLanguage.confirmPasswordLabelText}
        placeholderText={russianLanguage.confirmPasswordPlaceholderText}
      />
      <ContinueButton
        isActive={valid.password && valid.confirmPassword}
        text={russianLanguage.continueButtonText}
      />
    </form>
  );
};

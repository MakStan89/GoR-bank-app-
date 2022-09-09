import * as React from 'react';
import { PassportInput, PasswordInput, ContinueButton } from '../../../../ui-kit';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import { russianLanguage } from './constants';
import styles from './styles.module.scss';

export const AuthPassportForm = () => {
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <PassportInput
        value={values.passport}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
      />
      <PasswordInput
        value={values.password}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
      />
      <ContinueButton
        isActive={valid.passport && valid.password}
        text={russianLanguage.enterButtonText}
      />
    </form>
  );
};

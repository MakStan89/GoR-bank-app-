import * as React from 'react';
import { useState } from 'react';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import { ContinueButton, PassportInput } from '../../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from '../types';
import styles from './styles.module.scss';

export const PassportForm = ({ onNextStep, onRegister }: Props) => {
  const [requestError, setRequestError] = useState(false);
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <PassportInput
        value={values.passport}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
        labelText={russianLanguage.passportLabelText}
        placeholderText={russianLanguage.passportPlaceholderText}
      />
      {requestError && (
        <button className={styles.button} onClick={onRegister}>
          {russianLanguage.joinButtonText}
        </button>
      )}
      <div className={styles.text}>
        <p>{russianLanguage.subtitleText}</p>
      </div>
      <ContinueButton
        isActive={valid.passport}
        handleClick={onNextStep}
        text={russianLanguage.continueButtonText}
      />
    </form>
  );
};

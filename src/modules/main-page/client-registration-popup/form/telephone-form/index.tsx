import * as React from 'react';
import { useState } from 'react';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import { TelephoneInput, ContinueButton } from '../../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from '../types';
import './styles.scss';

export const TelephoneForm = ({ onNextStep, onJoin }: Props) => {
  const [requestError, setRequestError] = useState(false);
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleNextStep = () => {
    onNextStep(values);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="telephone-form" onSubmit={handleSubmit}>
      <TelephoneInput
        value={values.telephone}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
      />
      {requestError && (
        <button className="join-button" onClick={onJoin}>
          {russianLanguage.joinButtonText}
        </button>
      )}
      <div className="form-text">
        <p>
          {russianLanguage.subtitleText}
          <a
            href="https://www.prior.by/web/Download/Mc/Prior/generalrules.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            {russianLanguage.confidentialityText}
          </a>
          {russianLanguage.and}
          <a
            href="https://www.prior.by/web/Download/Mc/Prior/generalrules.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            {russianLanguage.serviceText}
          </a>
        </p>
      </div>
      <ContinueButton
        isActive={valid.telephone}
        handleClick={handleNextStep}
        text={russianLanguage.continueButtonText}
      />
    </form>
  );
};

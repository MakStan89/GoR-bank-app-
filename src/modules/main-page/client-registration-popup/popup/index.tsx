import * as React from 'react';
import infoPopupImage from '../../../../content/images/successPopupImage.png';
import { ContinueButton } from '../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from './types';
import './styles.scss';

export const SuccessPopup = ({ onContinue }: Props) => (
  <section className="popup-container">
    <h2>{russianLanguage.titleText}</h2>
    <p>{russianLanguage.subtitleText}</p>
    <img src={infoPopupImage} />
    <ContinueButton text={russianLanguage.buttonText} isActive={true} handleClick={onContinue} />
  </section>
);

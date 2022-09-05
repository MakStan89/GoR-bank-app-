import * as React from 'react';
import { useState } from 'react';
import { MainFormWrapper } from '../form';
import { Slider } from '../slider';
import { ClientRegister } from '../../client-registration-popup';
import { russianLanguage } from './constants';
import './styles.scss';

export const Main = () => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

  const handlePopupOpenCLick = () => {
    setPopupOpen(true);
  };
  const handlePopupCloseCLick = () => {
    setPopupOpen(false);
  };

  return (
    <section className="main-container">
      <Slider />
      <MainFormWrapper onRegisterPopupOpen={handlePopupOpenCLick} />
      <button className="scroll-button" />
      <div className="info-container">
        <p>{russianLanguage.info}</p>
        <button className="apple" />
        <button className="google" />
      </div>
      <ClientRegister onClose={handlePopupCloseCLick} isOpen={isPopupOpen} />
    </section>
  );
};

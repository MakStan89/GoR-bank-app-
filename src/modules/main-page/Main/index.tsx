import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { russianLanguage } from './constants';
import { Form } from '../form';
import { Header } from '../../template-page/header';
import './styles.scss';

export const Main: FC = () => {
  const [slide, changeSlide] = useState<number>(0);
  let timeOut: number = null;

  const handleSlideChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLButtonElement;
    changeSlide(Number(id));
    clearTimeout(timeOut);
  };

  useEffect(() => {
    timeOut = setTimeout(() => {
      changeSlide(slide === 3 ? 0 : slide + 1);
    }, 5000);
  });

  return (
    <>
      <Header isDark />
      <section className="main-container">
        <div className="title">
          <h1>{russianLanguage.slider[slide].title}</h1>
          <p>{russianLanguage.slider[slide].subtitle}</p>
          <button>{russianLanguage.buttonText}</button>
        </div>
        <div className="image">
          <img src={russianLanguage.slider[slide].image} />
        </div>
        <div className="pagination">
          <button id="0" className={slide === 0 && 'pagination-active'} onClick={handleSlideChange} />
          <button id="1" className={slide === 1 && 'pagination-active'} onClick={handleSlideChange} />
          <button id="2" className={slide === 2 && 'pagination-active'} onClick={handleSlideChange} />
          <button id="3" className={slide === 3 && 'pagination-active'} onClick={handleSlideChange} />
        </div>
        <div className="form-container">
          <Form />
        </div>
        <button className="scroll" />
        <div className="info">
          <p>{russianLanguage.info}</p>
          <button className="apple" />
          <button className="google" />
        </div>
      </section>
    </>
  );
};

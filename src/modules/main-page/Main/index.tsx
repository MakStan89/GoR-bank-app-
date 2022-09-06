import * as React from 'react';
import { useState, useEffect } from 'react';
import { russianLanguage } from './constants';
import { Form } from '../form';
import { Header } from '../../template-page/header';
import s from './styles.module.scss';

export const Main = () => {
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
      <section className={s.mainContainer}>
        <div className={s.title}>
          <h1>{russianLanguage.slider[slide].title}</h1>
          <p>{russianLanguage.slider[slide].subtitle}</p>
          <button>{russianLanguage.buttonText}</button>
        </div>
        <div className={s.image}>
          <img src={russianLanguage.slider[slide].image} />
        </div>
        <div className={s.pagination}>
          <button id="0" className={slide === 0 && s.paginationActive} onClick={handleSlideChange} />
          <button id="1" className={slide === 1 && s.paginationActive} onClick={handleSlideChange} />
          <button id="2" className={slide === 2 && s.paginationActive} onClick={handleSlideChange} />
          <button id="3" className={slide === 3 && s.paginationActive} onClick={handleSlideChange} />
        </div>
        <div className={s.formContainer}>
          <Form />
        </div>
        <button className={s.scroll} />
        <div className={s.info}>
          <p>{russianLanguage.info}</p>
          <button className={s.apple} />
          <button className={s.google} />
        </div>
      </section>
    </>
  );
};

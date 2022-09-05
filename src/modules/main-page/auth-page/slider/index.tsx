import * as React from 'react';
import cx from 'classnames';
import { useState, useEffect } from 'react';
import { sliderContent } from './constants';
import './styles.scss';

export const Slider = () => {
  const [currentSlide, changeSlide] = useState<number>(0);
  let timeOut: number = null;

  const handleSlideChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLButtonElement;
    changeSlide(Number(id));
    clearTimeout(timeOut);
  };

  useEffect(() => {
    timeOut = setTimeout(() => {
      changeSlide(currentSlide === 3 ? 0 : currentSlide + 1);
    }, 5000);
  });

  const titleClassName = (index: number) =>
    cx('slide-content', {
      'slide-content-active': currentSlide === index,
    });

  const imageClassName = (index: number) =>
    cx('slide-image', {
      'slide-image-active': currentSlide === index,
    });

  return (
    <>
      {sliderContent.map((slide, index) => {
        return (
          <div className="slider-title-container" key={index}>
            <h1 className={titleClassName(index)}>{slide.title}</h1>
            <p className={titleClassName(index)}>{slide.subtitle}</p>
            <button className={titleClassName(index)}>{slide.button}</button>
          </div>
        );
      })}
      <div className="slider-image-container">
        {sliderContent.map((slide, index) => {
          return <img key={index} src={slide.image} className={imageClassName(index)} />;
        })}
      </div>
      <div className="slider-pagination-container">
        {sliderContent.map((slide, index) => {
          return (
            <button
              id={String(index)}
              key={index}
              className={currentSlide === index ? 'pagination-active' : 'pagination'}
              onClick={handleSlideChange}
            />
          );
        })}
      </div>
    </>
  );
};

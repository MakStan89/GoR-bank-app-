import * as React from 'react';
import cx from 'classnames';
import { useState, useEffect } from 'react';
import { SliderTitle } from './title';
import { sliderContent } from './constants';
import * as classes from './styles.module.scss';

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

  const getImageClassName = (index: number) =>
    cx([classes.image], {
      [classes.imageActive]: currentSlide === index,
    });

  const slideImage = sliderContent.map((slide, index) => {
    return <img key={index} src={slide.image} className={getImageClassName(index)} />;
  });
  const paginationButtons = sliderContent.map((slide, index) => {
    return (
      <button
        id={String(index)}
        key={index}
        className={currentSlide === index ? classes.paginationActive : classes.pagination}
        onClick={handleSlideChange}
      />
    );
  });

  return (
    <>
      <SliderTitle currentSlide={currentSlide} />
      <div className={classes.images}>{slideImage}</div>
      <div className={classes.paginating}>{paginationButtons}</div>
    </>
  );
};

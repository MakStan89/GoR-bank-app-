import * as React from 'react';
import cx from 'classnames';
import { sliderContent } from '../constants';
import { Props } from './types';

export const SliderTitle = ({ currentSlide }: Props) => {
  const getTitleClassName = (index: number) =>
    cx('slide-content', {
      'slide-content-active': currentSlide === index,
    });

  const sliderTitle = sliderContent.map((slide: any, index: number) => {
    return (
      <div className="slider-title-container" key={index}>
        <h1 className={getTitleClassName(index)}>{slide.title}</h1>
        <p className={getTitleClassName(index)}>{slide.subtitle}</p>
        <button className={getTitleClassName(index)}>{slide.button}</button>
      </div>
    );
  });

  return <>{sliderTitle}</>;
};

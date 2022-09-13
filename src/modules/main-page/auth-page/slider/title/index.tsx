import * as React from 'react';
import cx from 'classnames';
import { sliderContent } from '../constants';
import { Props } from './types';
import styles from '../styles.module.scss';

export const SliderTitle = ({ currentSlide }: Props) => {
  const getTitleClassName = (index: number) =>
    cx(styles.content, {
      [styles['content-active']]: currentSlide === index,
    });

  const sliderTitle = sliderContent.map((slide: any, index: number) => {
    return (
      <div className={styles.title} key={index}>
        <h1 className={getTitleClassName(index)}>{slide.title}</h1>
        <p className={getTitleClassName(index)}>{slide.subtitle}</p>
        <button className={getTitleClassName(index)}>{slide.button}</button>
      </div>
    );
  });

  return <>{sliderTitle}</>;
};

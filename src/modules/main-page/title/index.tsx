import * as React from 'react';
import { Props } from './types';
import { BackButton } from '../../ui-kit/buttons/back-button';
import s from './styles.module.scss';

export const Title = ({ handleClick, text, title }: Props) => {
  return (
    <div className={s.titleBlock}>
      <BackButton handleClick={handleClick} text={text} />
      <div className={s.title}>{title}</div>
    </div>

  );
};
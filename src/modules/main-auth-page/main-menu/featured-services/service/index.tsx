import * as React from 'react';
import { Props } from './types';
import s from './styles.module.scss';

export const Service = ({text, icon}: Props) => {
  

  return (
    <div className={s.service}>
      <div className={s.iconBlock}>
        <span className={`${s.icon} ${icon}`} />
      </div>
      <div className={s.textBlock}>
        <span className={s.text}>{text}</span>
      </div>
    </div>
  );
};

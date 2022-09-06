import * as React from 'react';
import s from './styles.module.scss';
import { Props } from './types';

export const ContainerComponent = ({ children, title }: Props) => {

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.headerText}>{title}</h2>
      </div>
      {children}
    </div>
  );
};

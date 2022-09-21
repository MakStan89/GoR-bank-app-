import * as React from 'react';
import { Props, RadioButtonColor } from './types';
import styles from './styles.module.scss';
import cx from 'classnames';

export const RadioButton = ({
  name,
  checked,
  text,
  onClick,
  defaultColor,
  checkedColor,
}: Props) => {
  const RadiobuttonClassName = cx(styles.radio, {
    [styles.black]: defaultColor === RadioButtonColor.Black,
    [styles['black-checked']]: checkedColor === RadioButtonColor.Black && checked,
    [styles.gray]: defaultColor === RadioButtonColor.Gray,
    [styles['gray-checked']]: checkedColor === RadioButtonColor.Gray && checked,
    [styles.yellow]: defaultColor === RadioButtonColor.Yellow,
    [styles['yellow-checked']]: checkedColor === RadioButtonColor.Yellow && checked,
  });

  return (
    <div className={styles.container}>
      <input
        className={RadiobuttonClassName}
        type="radio"
        name={name}
        checked={checked}
        onClick={onClick}
        readOnly
      />
      <label className={styles.label}>{text}</label>
    </div>
  );
};

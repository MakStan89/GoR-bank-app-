import * as React from "react";
import cn from 'classnames';
import { NavbarType } from "./types";
import { NavLink } from "react-router-dom";
import styles from './styles.module.scss';


export const NavbarSubitem = ({path, name, isActive, isHidden}: NavbarType) => {

  let item = cn(styles['item-base'], { [styles['item-active']] : isActive, [styles['item-hidden']] : isHidden });

  return (
    <NavLink to={path} className={item}>
      <div className={styles.mark}></div>
      <span className={styles['item-text']}>{name}</span>
  </NavLink>
  );
};

import * as React from "react";
import { NavbarHiddenType } from "./types";
import { NavLink } from "react-router-dom";
import styles from '../navbar-item/styles.module.scss';


export const NavbarHiddenItem = ({path, name}: NavbarHiddenType) => {
  return (
    <NavLink to={path} className={`${styles.item} ${styles['hidden-item']}`}>
      <div className={styles.mark}></div>
      <span className={styles['item-text']}>{name}</span>
  </NavLink>
  );
};

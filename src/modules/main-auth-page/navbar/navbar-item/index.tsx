import * as React from "react";
import { NavbarType } from "./types";
import { NavLink } from "react-router-dom";
import styles from './styles.module.scss';

export const NavbarItem = ({path, image, imageSelect, name}: NavbarType) => {
  return (
    <NavLink to={path} className={styles.item}>
      <div className={styles['item-icon']}> 
        <img className={styles.icon} src={image} alt=''/>
      </div>
      <span className={styles['item-text']}>{name}</span>
    </NavLink>
  );
};

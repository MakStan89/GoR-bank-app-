import * as React from "react";
import { ScaleProps } from "./types";
import styles from "./styles.module.scss";

export const Scale = ({ minAmount, maxAmount, value }: ScaleProps) => {
  return (
    <div className={styles.scale}>
      <div className={styles.amount}>
        <div className={styles.minAmount}>
          <p>{minAmount.name}</p>
          <p>{minAmount.value}</p>
        </div>
        <div className={styles.maxAmount}>
          <p>{maxAmount.name}</p>
          <p>{maxAmount.value}</p>
        </div>
      </div>
      <progress
        className={styles.progress}
        value={value}
        max={maxAmount.inputValue}
      ></progress>
    </div>
  );
};

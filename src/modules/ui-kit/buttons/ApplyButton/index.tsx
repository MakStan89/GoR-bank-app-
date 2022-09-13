import * as React from "react";
import { Props } from "./types";
import styles from "./ApplyButton.module.scss";

export const ApplyButton = ({ text, width, height }: Props) => {
  const style = {
    "--buttonWidth": width,
    "--buttonHeight": height,
  } as React.CSSProperties;
  return (
    <button className={styles.applyButton} style={style}>
      {text}
    </button>
  );
};

import * as React from "react";
import { RangeProps } from "../types";
import { useTransformValueInNumber } from "../../../loans/apply-loan-page/hooks";
import styles from "../styles.module.scss";

export const RangeInput = ({
  width,
  value,
  handleChange,
  name,
  minValue,
  maxValue,
}: RangeProps) => {
  let tranformedValue = useTransformValueInNumber(`${value}`);

  const applyStyles = (width: number) => {
    if (tranformedValue === "") {
      tranformedValue = String(0);
    }

    const size = ((+tranformedValue - minValue) * 100) / (maxValue - minValue);

    return {
      width: `${width}px`,
      backgroundSize: `${size <= 0 ? 0 : size}% 100%`,
    };
  };

  return (
    <div className={styles.coontainer}>
      <input
        className={styles.range}
        type="range"
        min={minValue}
        max={maxValue}
        onChange={handleChange}
        style={applyStyles(width)}
        value={tranformedValue ?? 0}
        name={name}
        step={1}
      />
    </div>
  );
};

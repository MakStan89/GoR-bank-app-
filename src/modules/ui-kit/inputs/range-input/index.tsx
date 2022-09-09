import * as React from "react";
import { useEffect } from "react";
import { RangeProps } from "../types";
import { defaultValues, name } from "./constants";
import "../styles.scss";

export const RangeInput = ({ width, value, handleChange }: RangeProps) => {
  const MAX = defaultValues.maxAmount;
  let tranformedValue = transformValue(`${value}`);

  const applyStyles = (width: number) => {
    return {
      width: `${width}px`,
      backgroundSize: `${
        ((+tranformedValue - defaultValues.minAmount) * 100) /
        (MAX - defaultValues.minAmount)
      }% 100%`,
    };
  };

  const changeBack = () => {
    const size =
      ((+tranformedValue - defaultValues.minAmount) * 100) /
      (MAX - defaultValues.minAmount);
    const elem = Array.from(
      document.getElementsByClassName(
        "input-range"
      ) as HTMLCollectionOf<HTMLElement>
    );
    elem[0].style.backgroundSize = `${size < 0 ? 0 : size}% 100%`;
  };

  useEffect(() => {
    changeBack();
  }, [value]);

  return (
    <div className="input-container">
      <input
        className="input-range"
        type="range"
        min={defaultValues.minAmount}
        max={defaultValues.maxAmount}
        onChange={handleChange}
        style={applyStyles(width)}
        value={tranformedValue ?? 0}
        name={name}
      />
    </div>
  );
};

function transformValue(value: string) {
  if (value[0] === "$") {
    let transformedValue = value.split(",").join("").slice(1);

    return String(Number.parseFloat(transformedValue));
  }
  return value;
}

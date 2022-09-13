import * as React from 'react';
import { useFormValidation } from '../../../hooks/useFormValidation';
import { RangeInput } from '../../../ui-kit/inputs/range-input';
import { IncomeInput } from '../../../ui-kit/inputs/income-input';
import { LoanProps } from './types';
import { rangeValues } from './constants';
import './styles.scss';

export const LoanOptions = ({ title, subtitle }: LoanProps) => {
  const { values, handleChange, handleValid } = useFormValidation();
  const { minValue, maxValue, defaultValue } = rangeValues;

  return (
    <div className="loan-container">
      <span className="loan-title">{title}</span>

      <RangeInput
        width={343}
        value={values.income.length > 0 ? values.income : String(defaultValue)}
        handleChange={handleChange}
        minValue={minValue}
        maxValue={maxValue}
      />
      <IncomeInput
        value={values.income.length > 0 ? values.income : String(defaultValue)}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
        isEIN={false}
        minValue={minValue}
        maxValue={maxValue}
      />

      <span className="loan-subtitle">{subtitle}</span>
    </div>
  );
};

// function transformValue(value: string) {
//   if (value.length === 0) {
//     return Number(value);
//   }

//   if (value[0] === "$") {
//     let transformedValue = value.split(",").join("").slice(1);

//     return Number.parseFloat(transformedValue);
//   }
// }

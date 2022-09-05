import cx from 'classnames';

export const useClassNames = (isHasFocus: boolean, error: number, value: string) => {
  const inputClassName = cx('input', {
    'input-error': error > 0,
    'input-disable': error === 1,
  });
  const inputLabelClassName = cx('label', {
    'label-visible': isHasFocus || value,
  });
  const inputMessageClassName = cx('input-message', {
    'input-message-visible': error === 1,
    'input-message-error': error > 0,
  });
  const warningIconClassName = cx('warning', {
    'warning-active': error > 0,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};

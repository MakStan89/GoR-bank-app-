import cx from 'classnames';

export const useClassNames = (isHasFocus: boolean, error: number, value: string) => {
  const inputClassName = cx('input', {
    'input-error': !isHasFocus && error && value,
  });
  const inputLabelClassName = cx('label', {
    'label-visible': isHasFocus || value,
  });
  const inputMessageClassName = cx('input-message', {
    'input-message-error': !isHasFocus && error && value,
  });
  const warningIconClassName = cx('warning', {
    'warning-active': !isHasFocus && error && value,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};

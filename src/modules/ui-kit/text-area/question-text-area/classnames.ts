import cx from 'classnames';

export const useClassNames = (isHasFocus: boolean, error: number, value: string) => {
  const textAreaClassName = cx('text-area', {
    'text-area-active': value,
    'text-area-error': value && error && !isHasFocus,
  });
  const labelClassName = cx('text-area-label', {
    'text-area-label-active': isHasFocus || value,
  });
  const errorMessageClassName = cx('error-message', {
    'error-message-active': value && error && !isHasFocus,
  });
  const errorIconClassName = cx('error-icon', {
    'error-icon-active': value && error && !isHasFocus,
  });
  const counterClassName = cx('text-area-counter', {
    'text-area-counter-active': value,
  });

  return {
    textAreaClassName,
    labelClassName,
    errorMessageClassName,
    errorIconClassName,
    counterClassName,
  };
};

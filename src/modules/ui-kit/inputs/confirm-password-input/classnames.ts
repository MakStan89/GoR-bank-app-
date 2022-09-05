import cx from 'classnames';

export const useClassNames = (
  isHasFocus: boolean,
  error: number,
  value: string,
  isPasswordVisible: boolean
) => {
  const inputClassName = cx('input', {
    'input-error': (isHasFocus && error === 1) || (!isHasFocus && error > 0 && value),
  });
  const inputLabelClassName = cx('label', {
    'label-visible': isHasFocus || value,
  });
  const inputMessageClassName = cx('input-message', {
    'input-message-error': (isHasFocus && error === 1) || (!isHasFocus && error > 0 && value),
  });
  const warningIconClassName = cx('warning', {
    'warning-active': (isHasFocus && error === 1) || (!isHasFocus && error > 0 && value),
  });
  const passwordButtonClassName = cx('password', {
    'password-visible': value && isPasswordVisible,
    'password-hidden': value && !isPasswordVisible,
  });
  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
    passwordButtonClassName,
  };
};
